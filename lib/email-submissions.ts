import { SESv2Client, SendEmailCommand } from "@aws-sdk/client-sesv2"

export type EmailSubmissionPayload = Record<string, string | string[]>

type SubmissionEmail = {
  heading: string
  intro: string
  payload: EmailSubmissionPayload
  subject: string
}

const awsRegion = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION
const sesClient = new SESv2Client({ region: awsRegion })

function escapeHtml(value: string): string {
  return value
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#39;")
}

export function formatFieldLabel(field: string): string {
  return field
    .replace(/([A-Z])/g, " $1")
    .replace(/[-_]/g, " ")
    .replace(/\s+/g, " ")
    .trim()
    .replace(/^./, (char) => char.toUpperCase())
}

export function formatValue(value: string | string[]): string {
  if (Array.isArray(value)) {
    return value.join(", ")
  }

  return value
}

function getSubmitterEmail(payload: EmailSubmissionPayload): string | undefined {
  return typeof payload.email === "string" && payload.email.trim() ? payload.email.trim() : undefined
}

function getRequiredEmailConfig() {
  const appUrl = process.env.APP_URL
  const fromAddress = process.env.SES_FROM_EMAIL
  const fromName = process.env.SES_FROM_NAME
  const replyToEmail = process.env.SES_REPLY_TO_EMAIL
  const region = process.env.AWS_REGION ?? process.env.AWS_DEFAULT_REGION

  const missingVars = [
    !appUrl && "APP_URL",
    !region && "AWS_REGION",
    !fromAddress && "SES_FROM_EMAIL",
    !fromName && "SES_FROM_NAME",
    !replyToEmail && "SES_REPLY_TO_EMAIL",
  ].filter(Boolean)

  return {
    appUrl,
    fromAddress,
    fromName,
    missingVars,
    replyToEmail,
  }
}

export async function sendSubmissionEmail({ heading, intro, payload, subject }: SubmissionEmail) {
  const { appUrl, fromAddress, fromName, missingVars, replyToEmail } = getRequiredEmailConfig()

  if (missingVars.length > 0) {
    throw new Error(`Missing required email configuration: ${missingVars.join(", ")}`)
  }

  const fieldLines = Object.entries(payload)
    .map(([field, value]) => `${formatFieldLabel(field)}: ${formatValue(value)}`)
    .join("\n")

  const htmlBody = Object.entries(payload)
    .map(([field, value]) => {
      const label = escapeHtml(formatFieldLabel(field))
      const formatted = escapeHtml(formatValue(value))
      return `<tr><td style="padding:6px 10px;font-weight:600;vertical-align:top;">${label}</td><td style="padding:6px 10px;">${formatted}</td></tr>`
    })
    .join("")

  const submitterEmail = getSubmitterEmail(payload)
  const replyToAddresses = [submitterEmail, replyToEmail].filter(Boolean) as string[]

  await sesClient.send(
    new SendEmailCommand({
      FromEmailAddress: `"${fromName}" <${fromAddress}>`,
      Destination: {
        ToAddresses: [replyToEmail!],
      },
      ReplyToAddresses: replyToAddresses,
      Content: {
        Simple: {
          Subject: {
            Charset: "UTF-8",
            Data: subject,
          },
          Body: {
            Text: {
              Charset: "UTF-8",
              Data: `${intro}\n\n${fieldLines}\n\nSubmitted from: ${appUrl}`,
            },
            Html: {
              Charset: "UTF-8",
              Data: `
                <div style="font-family:Arial,sans-serif;line-height:1.5;color:#1f2937;">
                  <h2 style="margin:0 0 16px;">${escapeHtml(heading)}</h2>
                  <table style="border-collapse:collapse;">${htmlBody}</table>
                  <p style="margin:16px 0 0;color:#4b5563;">Submitted from: <a href="${escapeHtml(appUrl!)}">${escapeHtml(appUrl!)}</a></p>
                </div>
              `,
            },
          },
        },
      },
    }),
  )
}
