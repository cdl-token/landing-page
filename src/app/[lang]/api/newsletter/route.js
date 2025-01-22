import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req) {
  try {
    const { email } = await req.json();

    const adminEmailData = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: ["info@cryptodata.live"],
      subject: "New Newsletter Sign-Up",
      react: (
        <div>
          <h1>New Newsletter Sign-Up</h1>
          <p>
            <strong>Email:</strong> {email}
          </p>
        </div>
      ),
    });
    console.log("Admin Notification Email Sent:", adminEmailData);

    const userEmailData = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: [email],
      subject: "Thank you for signing up!",
      react: (
        <div>
          <h1>Thank You for Signing Up!</h1>
          <p>
            We're excited to have you on board. You'll start receiving updates
            soon!
          </p>
          <p>Best regards,</p>
          <p>The Team</p>
        </div>
      ),
    });
    console.log("User Confirmation Email Sent:", userEmailData);

    return NextResponse.json({ message: "method allow" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
