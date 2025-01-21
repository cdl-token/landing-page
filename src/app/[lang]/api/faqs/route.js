import { EmailTemplate } from "@/components/email/FaqsEmailTemplate";
import { Resend } from "resend";
import { UserEmailTemplate } from "@/components/email/UserEmailTemplate";
import { NextResponse } from "next/server";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req, res) {
  try {
    const { name, email, message } = await req.json();
    const data = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: ["info@cryptodata.live"],
      subject: "FAQs",
      react: EmailTemplate({
        name,
        email,
        message,
      }),
    });
    console.log("DATA", data);
    
    const data2 = await resend.emails.send({
      from: "cryptodatalive@cryptodata.live",
      to: [email],
      subject: "Hello",
      react: UserEmailTemplate(),
    });
    console.log("DATA", data2);

    return NextResponse.json({ message: "method allow" });
  } catch (error) {
    console.error("Error:", error);
    return NextResponse.json({ message: "nope" });
  }
}
