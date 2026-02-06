import { NextResponse } from "next/server"
import nodemailer from "nodemailer"

type QuotePayload = Record<string, string | string[]>

function formatFieldLabel(field: string): string {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase())
}

function formatValue(value: string | string[]): string {
  if (Array.isArray(value)) {
    return value.join(", ")
  }

  return value
}

export async function POST(request: Request) {
  let payload: QuotePayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const smtpHost = process.env.GMAIL_SMTP
  const smtpLogin = process.env.GMAIL_LOGIN
  const smtpPassword = process.env.GMAIL_PW
  const fromAddress = process.env.GMAIL_FROM
  const fromName = process.env.GMAIL_FROM_NAME
  const toAddress = process.env.GMAIL_TO

  const missingVars = [
    !smtpHost && "GMAIL_SMTP",
    !smtpLogin && "GMAIL_LOGIN",
    !smtpPassword && "GMAIL_PW",
    !fromAddress && "GMAIL_FROM",
    !toAddress && "GMAIL_TO",
  ].filter(Boolean)

  if (missingVars.length > 0) {
    return NextResponse.json(
      { error: `Missing required email configuration: ${missingVars.join(", ")}` },
      { status: 500 },
    )
  }

  const transporter = nodemailer.createTransport({
    host: smtpHost,
    port: 465,
    secure: true,
    auth: {
      user: smtpLogin,
      pass: smtpPassword,
    },
  })

  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim()
  const subject = fullName ? `New Quote Request - ${fullName}` : "New Quote Request"

  const fieldLines = Object.entries(payload)
    .map(([field, value]) => `${formatFieldLabel(field)}: ${formatValue(value)}`)
    .join("\n")

  const textBody = `A new quote request was submitted.\n\n${fieldLines}`
  const htmlBody = Object.entries(payload)
    .map(([field, value]) => {
      const label = formatFieldLabel(field)
      const formatted = formatValue(value)
      return `<tr><td style="padding:6px 10px;font-weight:600;vertical-align:top;">${label}</td><td style="padding:6px 10px;">${formatted}</td></tr>`
    })
    .join("")

  try {
    await transporter.sendMail({
      from: fromName ? `"${fromName}" <${fromAddress}>` : fromAddress,
      to: toAddress,
      replyTo: typeof payload.email === "string" ? payload.email : undefined,
      subject,
      text: textBody,
      html: `
        <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1f2937;">
          <h2 style="margin:0 0 16px;">New Quote Request</h2>
          <table style="border-collapse:collapse;">${htmlBody}</table>
        </div>
      `,
    })

    return NextResponse.json({ ok: true })
  } catch {
    return NextResponse.json({ error: "Failed to send quote email." }, { status: 500 })
  }
}
