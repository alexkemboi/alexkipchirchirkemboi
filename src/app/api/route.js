import nodemailer from "nodemailer";

export async function POST(req, res) {
    const { name, email, message } = await req.json(); // For Next.js, use req.json() to parse the body

    if (!name || !email || !message) {
        return new Response(JSON.stringify({ error: "All fields are required." }), {
            status: 400,
        });
    }

    try {
        // Configure the Nodemailer transport
        const transporter = nodemailer.createTransport({
            service: "Gmail", // Use your email service
            auth: {
                user: "alexkemboi97@gmail.com", // Your email address
                pass: "ruvn uavn uajw qqyu ", // Your password
            },
        });

        // Define email options
        const mailOptions = {
            from: email, // Sender's email
            to: "alexkemboi97@gmail.com", // Your email address
            subject: `New Contact Form Submission from ${name}`,
            html: `
                <h4>Resume contact Form Submission</h4>
                <p><strong>Name:</strong> ${name}</p>
                <p><strong>Email:</strong> ${email}</p>
                <p><strong>Message:</strong></p>
                <p>${message}</p>
            `,
        };

        // Send the email
        await transporter.sendMail(mailOptions);

        console.log("Email sent successfully!");
        return new Response(JSON.stringify({ message: "Email sent successfully!" }), {
            status: 200,
        });
    } catch (error) {
        console.error("Error sending email:", error);
        return new Response(JSON.stringify({ error: "Failed to send email." }), {
            status: 500,
        });
    }
}
