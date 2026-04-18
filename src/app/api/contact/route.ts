import { NextResponse } from "next/server";
import nodemailer from "nodemailer";
import { client } from "../../../../lib/sanity.client";

export async function POST(req: Request) {
  try {
    // fetch mail config from Sanity
    const cfg = await client.fetch(`*[_type == "siteConfig"][0]{gmailUser, gmailAppPassword, contactMailFrom, contactMailTo}`);

    const gmailUser = cfg?.gmailUser;
    const gmailAppPassword = cfg?.gmailAppPassword;
    const contactMailFrom = cfg?.contactMailFrom;
    const contactMailTo = cfg?.contactMailTo;

    if (!gmailUser || !gmailAppPassword || !contactMailFrom || !contactMailTo) {
      return new NextResponse("Missing email configuration in Sanity.", {
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
