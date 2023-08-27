import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { email, message, name } = await req.json();
    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: "adnan.test.139@gmail.com",
        pass: "dqzaterqyhxvgpdf",
      },
      tls: {
        rejectUnauthorized: false,
      },
    });

    const mailOptions = {
      from: "contact.form@adnansh.in",
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
