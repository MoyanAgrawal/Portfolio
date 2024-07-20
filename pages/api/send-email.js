import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method === "POST") {
    const { firstName,lastName, email, message } = req.body;
    // console.log("email___",email)
    // Create a transporter
    const transporter = nodemailer.createTransport({
      service: "gmail", // Use your email service
      auth: {
        user: process.env.EMAIL_USER, // Your email address
        pass: process.env.EMAIL_PASS, // Your email password
      },
    });

    try {
      // Send email
      await transporter.sendMail({
        replyTo: email,
        from: `<email>`,
        to: process.env.EMAIL_USER,email, // Your email address
        subject: `Query message from ${firstName+" "+lastName +" "+email}  from your Porfolio Website!!`,
        text: message ,
      });

      res.status(200).json({ success: true });
    } catch (error) {
      res.status(500).json({ error: "Failed to send email" });
    }
  } else {
    res.status(405).json({ error: "Method not allowed" });
  }
}
