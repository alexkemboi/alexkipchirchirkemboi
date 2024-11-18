import nodemailer from "nodemailer";

export async function POST(req, res) {
    //const { name, email, message } = await req.json(); // For Next.js, use req.json() to parse the body
    const { projectName, contactPerson, email, description, budget, deadline, goals } = await req.json();


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

        // // Define email options
        // const mailOptions = {
        //     from: email, // Sender's email
        //     to: "alexkemboi97@gmail.com", // Your email address
        //     subject: `PORTFOLIO VISITOR ${name.toUpperCase() }`,
        //     html: `
        //         <h4>Resume contact Form Submission</h4>
        //         <p><strong>Name:</strong> ${name.toUpperCase() }</p>
        //         <p><strong>Email:</strong> ${email}</p>
        //         <p><strong>Message:</strong></p>
        //         <p>${message}</p>
        //     `,
        // };



            // Define the email content
            const mailOptions = {
                from: email, // Sender's email
                to: "alexkemboi97@gmail.com", // Your email address
                subject: `New Project Requirement from ${contactPerson}`,
                html: `
                    <div style="font-family: Arial, sans-serif; color: #333; line-height: 1.6;">
                        <h2 style="color: #007acc;">Project Requirement Submission</h2>
                        <p><strong>Project Name:</strong> ${projectName}</p>
                        <p><strong>Contact Person:</strong> ${contactPerson}</p>
                        <p><strong>Email:</strong> ${email}</p>
                        <p><strong>Project Description:</strong></p>
                        <p>${description}</p>
                        <p><strong>Estimated Budget:</strong> $${budget}</p>
                        <p><strong>Deadline:</strong> ${deadline}</p>
                        <p><strong>Goals:</strong></p>
                        <p>${goals}</p>
                    </div>
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
