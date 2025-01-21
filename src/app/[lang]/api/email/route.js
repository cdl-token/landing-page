import { EmailTemplate } from "@/components/email/EmailTemplate";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { Resend } from "resend";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message, selectedOption } = await req.json();

    // Send email to support
    const data = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: ["info@cryptodata.live"],
      subject: "Customer Inquiry",
      react: EmailTemplate({
        name,
        email,
        message,
        selectedOption,
      }),
    });
    console.log("DATA", data);
    const data2 = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate({ name, selectedOption }),
    });
    console.log("DATA", data2);
    return NextResponse.json({ message: "method allowed" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
