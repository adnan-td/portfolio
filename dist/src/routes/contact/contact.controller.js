"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.httpPostContact = void 0;
const nodemailer_1 = __importDefault(require("nodemailer"));
const httpPostContact = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const { email, message, name } = req.body;
    try {
        const transporter = nodemailer_1.default.createTransport({
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
        yield transporter.sendMail(mailOptions);
        res.sendStatus(200);
    }
    catch (error) {
        console.error("Error sending email:", error);
        res.sendStatus(500);
    }
});
exports.httpPostContact = httpPostContact;
