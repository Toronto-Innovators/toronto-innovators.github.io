import { NextRequest, NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: NextRequest) {
  try {
    const { fullName, phoneNumber, selectedDate } = await req.json();

    if (!fullName || !phoneNumber || !selectedDate) {
      return NextResponse.json({ error: "Missing fields." }, { status: 400 });
    }

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "your-email@example.com",
      subject: "New Contact Request",
      text: `Full Name: ${fullName}\nPhone Number: ${phoneNumber}\nPreferred Date & Time: ${selectedDate}`,
    });

    return NextResponse.json({ message: "Request submitted successfully!" });
  } catch (error) {
    console.error(error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}
