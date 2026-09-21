import { NextResponse } from "next/server";

// Contact form endpoint.
//
// This is a stub: it validates the payload and logs it, but does not
// actually send an email anywhere yet, since no email provider
// credentials are configured for this project. To wire up real
// delivery, pick a provider (e.g. Resend, Postmark, SendGrid, or SMTP
// via nodemailer), add its API key as an environment variable in
// Vercel, and send the message inside the try block below.
export async function POST(request) {
  let body;
  try {
    body = await request.json();
  } catch {
    return NextResponse.json({ error: "Invalid request body" }, { status: 400 });
  }

  const { name, email, message } = body || {};

  if (!name || !email || !message) {
    return NextResponse.json(
      { error: "Name, email, and message are required." },
      { status: 400 }
    );
  }

  try {
    // TODO: send the enquiry, e.g.:
    // await resend.emails.send({
    //   from: "Ladi Williams Website <noreply@ladiwilliams.com>",
    //   to: "ladiwilliamsmedia@gmail.com",
    //   subject: `New enquiry from ${name}`,
    //   text: `${name} <${email}>\n\n${message}`,
    // });
    console.log("New contact enquiry:", { name, email, message });

    return NextResponse.json({ ok: true });
  } catch (error) {
    console.error("Failed to process contact enquiry", error);
    return NextResponse.json(
      { error: "Something went wrong. Please try again later." },
      { status: 500 }
    );
  }
}
