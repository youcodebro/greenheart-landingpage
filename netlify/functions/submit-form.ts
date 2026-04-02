import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);
const FROM_EMAIL = process.env.FROM_EMAIL || "Green Heart <onboarding@resend.dev>";
const RECIPIENT_EMAIL = process.env.RECIPIENT_EMAIL || "youcodebro@gmail.com";
const EMAIL_LOGO_URL = process.env.EMAIL_LOGO_URL || "https://greenheart.group/media/greenheart-logo-optimized.webp";

/** Shared mobile styles: larger type + more horizontal space for the card on phones */
const EMAIL_MOBILE_CSS = `
  @media only screen and (max-width: 640px) {
    .wrapper { padding: 12px 6px !important; }
    .card { max-width: 100% !important; }
    .pad { padding-left: 14px !important; padding-right: 14px !important; }
    .pad-top { padding-top: 20px !important; }
    .pad-bottom { padding-bottom: 20px !important; }
    .email-h2 { font-size: 22px !important; }
    .email-p { font-size: 17px !important; line-height: 1.65 !important; }
    .email-small { font-size: 15px !important; line-height: 1.55 !important; }
    .email-caption { font-size: 13px !important; line-height: 1.5 !important; }
    .email-header-tagline { font-size: 15px !important; }
    .email-logo { max-width: 220px !important; width: 78% !important; }
    .email-table td { font-size: 16px !important; line-height: 1.5 !important; }
    .email-summary-table p { font-size: 16px !important; line-height: 1.55 !important; }
    .email-message-box { padding: 22px 18px !important; }
    .email-message-box .msg-body { font-size: 17px !important; line-height: 1.65 !important; }
    .email-contact-box { padding: 18px 16px !important; }
    .email-contact-box p,
    .email-contact-box td,
    .email-contact-box a { font-size: 16px !important; }
  }
`;

interface FormPayload {
  fullName: string;
  companyName: string;
  email: string;
  phone?: string;
  industry?: string;
  service?: string;
  message: string;
}

function escapeHtml(str: string): string {
  return str
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;");
}

function escapeText(str: string): string {
  // Keep text email readable; normalize newlines from user input.
  return str.replace(/\r\n/g, "\n").replace(/\r/g, "\n").trim();
}

function buildEmailText(data: FormPayload): string {
  return `
New inquiry received

Full Name: ${escapeText(data.fullName)}
Company: ${escapeText(data.companyName)}
Email: ${escapeText(data.email)}
Phone: ${escapeText(data.phone || "—")}
Industry: ${escapeText(data.industry || "—")}
Service of Interest: ${escapeText(data.service || "—")}

Message:
${escapeText(data.message)}

Green Heart Environmental & HSE Consultancy · Guyana LTD
`.trim();
}

function buildConfirmationText(data: FormPayload): string {
  return `
Thank you for your inquiry

Dear ${escapeText(data.fullName)},
We’ve received your message and a representative will get to you shortly.

Inquiry Details
Company: ${escapeText(data.companyName)}
Service: ${escapeText(data.service || "—")}
Industry: ${escapeText(data.industry || "—")}

Your message:
${escapeText(data.message)}

or contact us at:
info@greenheart.group

Green Heart Environmental & HSE Consultancy · Guyana LTD
`.trim();
}

function buildEmailHtml(data: FormPayload): string {
  const fields = [
    { label: "Full Name", value: data.fullName },
    { label: "Company", value: data.companyName },
    { label: "Email", value: `<a href="mailto:${escapeHtml(data.email)}" style="color: #1F6F50;">${escapeHtml(data.email)}</a>` },
    { label: "Phone", value: data.phone || "—" },
    { label: "Industry", value: data.industry || "—" },
    { label: "Service of Interest", value: data.service || "—" },
  ];

  const rows = fields
    .map(
      (f) => `
    <tr>
      <td style="padding: 12px 16px; font-weight: 600; color: #0B3D2E; width: 180px; vertical-align: top;"><strong>${escapeHtml(f.label)}</strong></td>
      <td style="padding: 12px 16px; color: #374151;">${typeof f.value === "string" && !f.value.startsWith("<") ? escapeHtml(f.value) : f.value}</td>
    </tr>`
    )
    .join("");

  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>New Inquiry — Green Heart</title>
  <style>${EMAIL_MOBILE_CSS}</style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background-color: #e8f0ec; -webkit-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="wrapper" style="background-color: #e8f0ec; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="card" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 24px rgba(11, 61, 46, 0.08);">
          <tr>
            <td class="pad pad-top" style="background: linear-gradient(135deg, #0B3D2E 0%, #134E3A 100%); padding: 32px 40px; text-align: center;">
              <img class="email-logo" src="${EMAIL_LOGO_URL}" alt="Green Heart" width="180" style="display: block; margin: 0 auto; width: 100%; max-width: 180px; height: auto;" />
              <p class="email-header-tagline" style="margin: 8px 0 0 0; color: #C8A951; font-size: 14px; font-weight: 500;">Corporate Environmental & HSE Consultancy</p>
              <div style="margin-top: 16px; width: 48px; height: 3px; background: #C8A951; margin-left: auto; margin-right: auto;"></div>
            </td>
          </tr>
          <tr>
            <td class="pad pad-top" style="padding: 28px 40px 16px 40px;">
              <h2 class="email-h2" style="margin: 0; color: #0B3D2E; font-size: 20px; font-weight: 600;">New Inquiry</h2>
            </td>
          </tr>
          <tr>
            <td class="pad pad-bottom" style="padding: 0 40px 24px 40px;">
              <table role="presentation" class="email-table" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #e5e7eb; border-radius: 8px;">
                ${rows}
              </table>
            </td>
          </tr>
          <tr>
            <td class="pad pad-bottom" style="padding: 0 40px 32px 40px;">
              <div class="email-message-box" style="background: #F4F8F5; border-radius: 8px; padding: 20px 24px; border-left: 4px solid #1F6F50;">
                <p class="email-small" style="margin: 0 0 8px 0; color: #0B3D2E; font-size: 14px; font-weight: 600;"><strong>Message</strong></p>
                <p class="email-p msg-body" style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </td>
          </tr>
          <tr>
            <td class="pad" style="padding: 20px 40px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p class="email-caption" style="margin: 0; color: #6b7280; font-size: 12px;">Green Heart Environmental & HSE Consultancy · Guyana LTD</p>
            </td>
          </tr>
          <tr>
            <td style="height: 10px; line-height: 10px; font-size: 10px;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

function buildConfirmationHtml(data: FormPayload): string {
  // Keep the message readable and aligned with your brand colors
  return `
<!DOCTYPE html>
<html>
<head>
  <meta charset="utf-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Thanks — Green Heart</title>
  <style>${EMAIL_MOBILE_CSS}</style>
</head>
<body style="margin: 0; padding: 0; font-family: 'Segoe UI', system-ui, -apple-system, sans-serif; background-color: #e8f0ec; -webkit-text-size-adjust: 100%;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="wrapper" style="background-color: #e8f0ec; padding: 40px 20px;">
    <tr>
      <td align="center">
        <table role="presentation" width="100%" cellspacing="0" cellpadding="0" class="card" style="max-width: 600px; width: 100%; background: #ffffff; border-radius: 12px; box-shadow: 0 4px 24px rgba(11, 61, 46, 0.08);">
          <!-- Header -->
          <tr>
            <td class="pad pad-top" style="background: linear-gradient(135deg, #0B3D2E 0%, #134E3A 100%); padding: 32px 40px; text-align: center;">
              <img class="email-logo" src="${EMAIL_LOGO_URL}" alt="Green Heart" width="180" style="display: block; margin: 0 auto; width: 100%; max-width: 180px; height: auto;" />
              <div style="margin-top: 16px; width: 48px; height: 3px; background: #C8A951; margin-left: auto; margin-right: auto;"></div>
            </td>
          </tr>

          <!-- Body -->
          <tr>
            <td class="pad pad-top" style="padding: 28px 40px 8px 40px;">
              <h2 class="email-h2" style="margin: 0 0 12px 0; color: #0B3D2E; font-size: 20px; font-weight: 700;">Thank you for your inquiry</h2>
              <p class="email-p" style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7;">
                Dear ${escapeHtml(data.fullName)},
              </p>
              <p class="email-p" style="margin: 10px 0 0 0; color: #374151; font-size: 15px; line-height: 1.7;">
                We’ve received your message and a representative will get to you shortly.
              </p>
            </td>
          </tr>

          <!-- Summary -->
          <tr>
            <td class="pad pad-bottom" style="padding: 12px 40px 24px 40px;">
              <table role="presentation" class="email-summary-table" width="100%" cellspacing="0" cellpadding="0" style="border: 1px solid #e5e7eb; border-radius: 8px;">
                <tr>
                  <td style="padding: 14px 16px; background: #F4F8F5; border-bottom: 1px solid #e5e7eb;">
                    <p class="email-small" style="margin: 0; color: #0B3D2E; font-size: 14px; font-weight: 700;">Inquiry Details</p>
                  </td>
                </tr>
                <tr>
                  <td style="padding: 12px 16px;">
                    <p class="email-p" style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">
                      <strong style="color: #0B3D2E;">Company:</strong> ${escapeHtml(data.companyName)}
                    </p>
                    <p class="email-p" style="margin: 0 0 8px 0; color: #374151; font-size: 14px;">
                      <strong style="color: #0B3D2E;">Service:</strong> ${escapeHtml(data.service || "—")}
                    </p>
                    <p class="email-p" style="margin: 0; color: #374151; font-size: 14px;">
                      <strong style="color: #0B3D2E;">Industry:</strong> ${escapeHtml(data.industry || "—")}
                    </p>
                  </td>
                </tr>
              </table>
            </td>
          </tr>

          <!-- Message -->
          <tr>
            <td class="pad pad-bottom" style="padding: 0 40px 32px 40px;">
              <div class="email-message-box" style="background: #F4F8F5; border-radius: 8px; padding: 18px 20px; border-left: 4px solid #1F6F50;">
                <p class="email-small" style="margin: 0 0 8px 0; color: #0B3D2E; font-size: 14px; font-weight: 700;">Your message</p>
                <p class="email-p msg-body" style="margin: 0; color: #374151; font-size: 15px; line-height: 1.7; white-space: pre-wrap;">${escapeHtml(data.message)}</p>
              </div>
            </td>
          </tr>

          <!-- Contact -->
          <tr>
            <td class="pad pad-bottom" style="padding: 0 40px 28px 40px;">
              <div class="email-contact-box" style="background: #ffffff; border: 1px solid #e5e7eb; border-radius: 10px; padding: 16px 18px;">
                <p class="email-small" style="margin: 0 0 10px 0; color: #0B3D2E; font-size: 14px; font-weight: 700;">
                  or contact us at:
                </p>
                <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="border-collapse: collapse;">
                  <tr>
                    <td style="padding: 6px 0 0 0; color: #374151; font-size: 14px; line-height: 1.6;">
                      <span style="display: inline-block; width: 22px; color: #1F6F50;">&#x2709;</span>
                      <a href="mailto:info@greenheart.group" style="color: #1F6F50; text-decoration: none; font-weight: 600;">info@greenheart.group</a>
                    </td>
                  </tr>
                </table>
              </div>
            </td>
          </tr>

          <!-- Footer -->
          <tr>
            <td class="pad" style="padding: 20px 40px; background: #f9fafb; border-top: 1px solid #e5e7eb;">
              <p class="email-caption" style="margin: 0; color: #6b7280; font-size: 12px;">
                Green Heart Environmental & HSE Consultancy · Guyana LTD
              </p>
            </td>
          </tr>
          <tr>
            <td style="height: 10px; line-height: 10px; font-size: 10px;">&nbsp;</td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>
  `.trim();
}

export async function handler(event: { httpMethod: string; body?: string }) {
  if (event.httpMethod !== "POST") {
    return { statusCode: 405, body: JSON.stringify({ ok: false, error: "Method not allowed" }) };
  }

  let data: FormPayload;
  try {
    data = JSON.parse(event.body || "{}");
  } catch {
    return { statusCode: 400, body: JSON.stringify({ ok: false, error: "Invalid JSON" }) };
  }

  const { fullName, companyName, email, message } = data;
  if (!fullName?.trim() || !companyName?.trim() || !email?.trim() || !message?.trim()) {
    return {
      statusCode: 400,
      body: JSON.stringify({ ok: false, error: "Missing required fields: fullName, companyName, email, message" }),
    };
  }

  if (!process.env.RESEND_API_KEY) {
    return { statusCode: 500, body: JSON.stringify({ ok: false, error: "Email service not configured" }) };
  }

  let emailSent = false;
  let confirmationSent = false;
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: RECIPIENT_EMAIL,
      replyTo: email,
      subject: `Green Heart Inquiry — ${companyName}`,
      html: buildEmailHtml(data),
      text: buildEmailText(data),
    });
    if (!error) emailSent = true;
  } catch (err) {
    console.error("Email send failed:", err);
  }

  // Best-effort confirmation email to the submitter.
  // If it fails (e.g. Resend restrictions), we still want the form submission to succeed.
  try {
    const { error } = await resend.emails.send({
      from: FROM_EMAIL,
      to: email,
      subject: "We received your inquiry — Green Heart",
      html: buildConfirmationHtml(data),
      text: buildConfirmationText(data),
    });
    if (!error) confirmationSent = true;
  } catch (err) {
    console.error("Confirmation email send failed:", err);
  }

  return {
    statusCode: 200,
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ ok: true, emailSent, confirmationSent }),
  };
}
