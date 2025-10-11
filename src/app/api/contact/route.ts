import nodemailer from "nodemailer";
// const nodemailer = require("nodemailer");

import { NextResponse } from "next/server";

export async function POST(req: Request) {
    console.log("hitted");
    
  const { name, email, message } = await req.json();
  // Create a test account or replace with real credentials.
  const transporter = nodemailer.createTransport({
    service: "gmail",
    port: 587,
    secure: false, // true for 465, false for other ports
    auth: {
      user: process.env.SMTP_USER,
      pass: process.env.SMTP_PASS,
    },
  });

  transporter.verify((error, success) => {
    if (error) {
      console.error("SMTP error:", error);
    } else {
      console.log("SMTP server ready!");
    }
  });

  const mailOptions = {
    from: email,
    to: process.env.SMTP_USER,
    subject: `${name}'s message through my PORTFOLIO`,
    text: message,
    html: `<p>${message}</p>`,
  };
  // Wrap in an async IIFE so we can use await.
  try {
    const info = await transporter.sendMail(mailOptions);
    console.log("Message sent:", info.messageId);
    return NextResponse.json({ success: true });
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json({ success: false, error: "Failed to send email" });
  }
};
