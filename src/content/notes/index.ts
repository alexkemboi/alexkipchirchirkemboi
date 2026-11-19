import type { ComponentType } from "react";

import IdempotencyNote, { meta as idempotencyMeta } from "./idempotency";

export type Note = {
  Body: ComponentType;
  readingMinutes: number;
};

/** Full-page notes, keyed by the `slug` on the matching entry in content.ts `articles`. */
export const notes: Record<string, Note> = {
  idempotency: { Body: IdempotencyNote, ...idempotencyMeta },
};
