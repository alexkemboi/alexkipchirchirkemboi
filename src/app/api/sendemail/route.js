import nodemailer from "nodemailer";

export async function POST(req, res) {
    //const { name, email, message } = await req.json(); // For Next.js, use req.json() to parse the body
    const { projectName, contactPerson, email, description, budget, deadline, goals } = await req.json();


    // if (!projectName || !email || !description) {
    //     return new Response(JSON.stringify({ error: "All fields are required." }), {
    //         status: 400,
    //     });
    // }

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
                subject: `${projectName}`,
                html: `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Project Requirement Submission</title>
</head>
<body >
    <div">
        <h2 style="text-align: left; font-size: 1.8rem; margin-bottom: 20px; color: #3772ff;">Project Requirement Submission</h2>
        <div >
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Project Name:</strong>
                <span>${projectName}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Contact Person:</strong>
                <span>${contactPerson}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Email:</strong>
                <span>${email}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Project Description:</strong>
                <span>${description}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Estimated Budget:</strong>
                <span>$${budget}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Deadline:</strong>
                <span>${deadline}</span>
            </div>
            <div>
                <strong style="color: #555; margin-bottom: 5px;">Goals:</strong>
                <span>${goals}</span>
            </div>
        </div>
        <div style="margin-top: 30px; text-align:center;">
            <button style="background-color: #3772ff; color: #fff; padding: 10px 20px; border: none; border-radius: 99em; font-size: 1rem; cursor: pointer; text-transform: uppercase; transition: background-color 0.3s;">
                Follow
            </button>
        </div>
    </div>
</body>
</html>`,
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
