import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const gmailUser = process.env.GMAIL_USER;
    const gmailAppPassword = process.env.GMAIL_APP_PASSWORD;
    const contactMailFrom = process.env.CONTACT_MAIL_FROM;
    const contactMailTo = process.env.CONTACT_MAIL_TO;

    if (!gmailUser || !gmailAppPassword || !contactMailFrom || !contactMailTo) {
      return new NextResponse("Missing email environment variables.", {
        status: 500,
      });
    }

    const { email, message, name } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: gmailUser,
        pass: gmailAppPassword,
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: contactMailFrom,
      to: contactMailTo,
      subject: "New Contact Form Submission",
      html: `
        <h1>Checkout the new contact form submission:</h1>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong> ${message}</p>
      `,
    };

    await transporter.sendMail(mailOptions);
    return new NextResponse("Successfully mailed!", {
      status: 200,
    });
  } catch (error) {
    console.error("Error sending email:", error);
    return new NextResponse("Mailing was Unsuccessfull!", {
      status: 500,
    });
  }
}
