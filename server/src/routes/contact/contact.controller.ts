import { Request, Response } from "express";
import nodemailer from "nodemailer";

export const httpPostContact = async (req: Request, res: Response) => {
  const { email, message, name } = req.body;

  try {
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adnan.test.139@gmail.com",
        pass: "dqzaterqyhxvgpdf",
      },
      tls: {
        rejectUnauthorized: false, // Disable SSL verification
      },
    });

    const mailOptions = {
      from: "adnan.test.139@gmail.com",
      to: "adnan.s.husain.1@gmail.com",
      subject: "New Contact Form Submission",
      html: `
        <h1>Checkout the new contact form submission:</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);

    res.sendStatus(200);
  } catch (error) {
    console.error("Error sending email:", error);
    res.sendStatus(500);
  }
};
