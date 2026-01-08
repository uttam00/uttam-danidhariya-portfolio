import { NextResponse } from "next/server";
import nodemailer from "nodemailer";

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();

    const transporter = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS,
      },
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: "aughost66@gmail.com", // The destination email requested by user
      subject: `New Message from Portfolio: ${name}`,
      text: `
        Name: ${name}
        Email: ${email}
        Message: ${message}
      `,
      html: `
        <!DOCTYPE html>
        <html>
          <head>
            <meta charset="utf-8">
            <meta name="viewport" content="width=device-width, initial-scale=1.0">
            <title>New Contact Form Submission</title>
            <style>
              body { margin: 0; padding: 0; background-color: #f3f4f6; font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif; }
              .container { max-width: 600px; margin: 0 auto; background-color: #ffffff; border-radius: 8px; overflow: hidden; box-shadow: 0 4px 6px rgba(0,0,0,0.1); }
              .header { background-color: #2563eb; color: #ffffff; padding: 24px; text-align: center; }
              .header h1 { margin: 0; font-size: 24px; font-weight: 600; }
              .content { padding: 32px; color: #1f2937; }
              .field { margin-bottom: 24px; }
              .label { display: block; font-size: 14px; color: #6b7280; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; margin-bottom: 8px; }
              .value { display: block; font-size: 16px; color: #111827; line-height: 1.5; background-color: #f9fafb; padding: 12px; border-radius: 6px; border: 1px solid #e5e7eb; }
              .footer { background-color: #f9fafb; padding: 16px; text-align: center; font-size: 12px; color: #9ca3af; border-top: 1px solid #e5e7eb; }
            </style>
          </head>
          <body>
            <div style="padding: 40px 0;">
              <div class="container">
                <div class="header">
                  <h1>My Portfolio Contact</h1>
                </div>
                <div class="content">
                  <div class="field">
                    <span class="label">Name</span>
                    <div class="value">${name}</div>
                  </div>
                  <div class="field">
                    <span class="label">Email</span>
                    <div class="value"><a href="mailto:${email}" style="color: #2563eb; text-decoration: none;">${email}</a></div>
                  </div>
                  <div class="field">
                    <span class="label">Message</span>
                    <div class="value" style="white-space: pre-wrap;">${message}</div>
                  </div>
                </div>
                <div class="footer">
                  <p>This message was sent from your portfolio website contact form.</p>
                  <p>&copy; ${new Date().getFullYear()} Uttam Portfolio. All rights reserved.</p>
                </div>
              </div>
            </div>
          </body>
        </html>
      `,
    };

    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: "Email sent successfully" },
      { status: 200 }
    );
  } catch (error) {
    console.error("Error sending email:", error);
    return NextResponse.json(
      { error: "Failed to send email" },
      { status: 500 }
    );
  }
}
