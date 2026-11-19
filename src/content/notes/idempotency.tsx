/* Note: Idempotency. Rendered inside <article className="note">, see globals.css. */

const schemaSql = `CREATE TABLE idempotency_keys (
  key            VARCHAR(64)  PRIMARY KEY,
  request_hash   CHAR(64)     NOT NULL,      -- SHA-256 of the request body
  status         VARCHAR(16)  NOT NULL,      -- 'processing' | 'completed'
  response_code  INT,
  response_body  JSONB,
  created_at     TIMESTAMPTZ  NOT NULL DEFAULT now()
);`;

const handlerTs = `app.post("/disbursements", async (req, res) => {
  const key = req.header("Idempotency-Key");
  if (!key) return res.status(400).json({ error: "Idempotency-Key header required" });
  const hash = sha256(JSON.stringify(req.body));

  // 1. Claim the key. The primary key makes this atomic: only one request wins.
  const claimed = await db.query(
    \`INSERT INTO idempotency_keys (key, request_hash, status)
     VALUES ($1, $2, 'processing')
     ON CONFLICT (key) DO NOTHING
     RETURNING key\`,
    [key, hash]
  );

  // 2. Someone already used this key: replay, reject or wait.
  if (claimed.rowCount === 0) {
    const { rows: [prev] } = await db.query(
      "SELECT request_hash, status, response_code, response_body FROM idempotency_keys WHERE key = $1",
      [key]
    );
    if (prev.request_hash !== hash)
      return res.status(422).json({ error: "Key reused with a different payload" });
    if (prev.status === "processing")
      return res.status(409).json({ error: "Original request still in progress" });
    return res.status(prev.response_code).json(prev.response_body); // replay, no side effects
  }

  // 3. First time: do the work once, then store the outcome against the key.
  try {
    const result = await disburseLoan(req.body);
    await db.query(
      "UPDATE idempotency_keys SET status = 'completed', response_code = 201, response_body = $2 WHERE key = $1",
      [key, result]
    );
    return res.status(201).json(result);
  } catch (err) {
    // Release the key so the client can safely retry a request that never took effect
    await db.query("DELETE FROM idempotency_keys WHERE key = $1", [key]);
    throw err;
  }
});`;

const callbackSql = `-- M-Pesa may deliver the same confirmation more than once.
-- TransID is unique per transaction, so let the database reject duplicates.
CREATE UNIQUE INDEX ux_mpesa_trans_id ON mpesa_payments (trans_id);

INSERT INTO mpesa_payments (trans_id, msisdn, amount, account_ref)
VALUES (@TransID, @MSISDN, @TransAmount, @BillRefNumber)
ON CONFLICT (trans_id) DO NOTHING;   -- SQL Server: catch error 2627 / 2601, or use MERGE`;

const clientTs = `// Generate the key once per user action, not once per attempt.
const key = crypto.randomUUID();

await retry(() =>
  fetch("/disbursements", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Idempotency-Key": key },
    body: JSON.stringify({ loanId, amount }),
  }),
  { attempts: 4, backoff: "exponential" }
);`;

export const meta = {
  readingMinutes: 7,
};

export default function IdempotencyNote() {
  return (
    <>
      <p className="lead">
        A customer taps <em>Pay</em>. The request reaches your server, the money
        moves, and then the network drops before the response gets back. The app
        retries. Without idempotency, you have just charged them twice.
      </p>

      <p>
        In lending, payments and core banking, retries are not an edge case.
        Mobile networks drop, load balancers time out, users double-tap and
        providers resend callbacks. Idempotency is how you make every one of
        those retries harmless.
      </p>

      <h2>What idempotent means</h2>
      <p>
        An operation is <strong>idempotent</strong> if performing it many times
        has the same effect as performing it once. Setting a balance to 500 is
        idempotent. Adding 500 to a balance is not.
      </p>
      <p>HTTP already gives us part of the answer:</p>
      <ul>
        <li>
          <code>GET</code>, <code>PUT</code> and <code>DELETE</code> are idempotent
          by definition. Repeating them should not change the outcome.
        </li>
        <li>
          <code>POST</code> is not. &ldquo;Create a disbursement&rdquo; run twice
          creates two disbursements.
        </li>
      </ul>
      <p>
        Most money-moving operations are naturally <code>POST</code>s, so we
        have to make them idempotent ourselves.
      </p>

      <h2>Exactly-once is a myth</h2>
      <p>
        Over a network you cannot guarantee a message is delivered exactly once.
        You can choose <em>at-most-once</em> (never retry, sometimes lose
        payments) or <em>at-least-once</em> (always retry, sometimes see
        duplicates). Only the second is acceptable for money.
      </p>
      <blockquote>
        At-least-once delivery + idempotent processing = effectively exactly-once.
      </blockquote>

      <h2>The idempotency-key pattern</h2>
      <p>
        The client generates a unique key for each <em>intended</em> operation
        and sends it with every attempt, usually as an <code>Idempotency-Key</code>{" "}
        header. The server records the key with the outcome of the first attempt
        and replays that outcome for every repeat.
      </p>

      <h3>1. Store keys with their outcome</h3>
      <pre>
        <code>{schemaSql}</code>
      </pre>

      <h3>2. Claim, replay or reject</h3>
      <pre>
        <code>{handlerTs}</code>
      </pre>
      <p>Four details make this safe in production:</p>
      <ul>
        <li>
          <strong>The claim is atomic.</strong> The primary key constraint, not
          application code, decides which of two simultaneous requests wins.
        </li>
        <li>
          <strong>Payloads are compared.</strong> Reusing a key with a different
          amount is a client bug; fail loudly with <code>422</code> instead of
          replaying the wrong response.
        </li>
        <li>
          <strong>In-flight requests get <code>409</code>.</strong> The client
          backs off and retries later rather than triggering a second disbursement.
        </li>
        <li>
          <strong>Failures release the key.</strong> If the work never happened,
          a retry must be allowed to try again.
        </li>
      </ul>

      <h3>3. Retry with the same key</h3>
      <pre>
        <code>{clientTs}</code>
      </pre>

      <h2>Callbacks and webhooks</h2>
      <p>
        Inbound notifications are the other half of the problem. Payment
        providers such as M-Pesa (Daraja) deliver confirmations at least once,
        so your handler will eventually see the same transaction twice.
      </p>
      <p>
        You don&apos;t need a separate key here: the provider already gives you
        one. Use the transaction ID (<code>TransID</code>, or{" "}
        <code>CheckoutRequestID</code> for STK push) as a natural key and let a
        unique index do the deduplication.
      </p>
      <pre>
        <code>{callbackSql}</code>
      </pre>
      <p>
        Acknowledge the callback quickly, then post to the ledger from a queue.
        If the ledger update is itself keyed on the transaction ID, a replayed
        message becomes a no-op all the way down.
      </p>

      <h2>When integrating with core banking</h2>
      <p>
        Core banking systems such as Temenos T24 and Oracle FLEXCUBE usually
        accept an external reference on each posting. Treat that reference as
        your idempotency key: generate it before the first attempt, persist it,
        and send the same value on every retry. Before re-posting after a
        timeout, query by that reference first. The original may have succeeded.
      </p>

      <h2>A checklist</h2>
      <ul>
        <li>Every money-moving <code>POST</code> requires an idempotency key.</li>
        <li>Keys are generated per user action and reused across retries.</li>
        <li>Uniqueness is enforced by the database, not by a check-then-insert.</li>
        <li>Repeats replay the stored response; mismatched payloads return <code>422</code>.</li>
        <li>Callbacks are deduplicated on the provider&apos;s transaction ID.</li>
        <li>Timeouts trigger a status query before any re-post.</li>
        <li>Keys expire after a retention window (24 hours to 7 days is common).</li>
      </ul>

      <p>
        Idempotency costs one table and a few lines per endpoint. In return,
        every retry, double-tap and duplicate callback becomes boring, which is
        exactly what you want from a system that moves money.
      </p>
    </>
  );
}
