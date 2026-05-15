import { NextResponse } from "next/server"
import { sendSubmissionEmail, type EmailSubmissionPayload } from "@/lib/email-submissions"

export const runtime = "nodejs"

export async function POST(request: Request) {
  let payload: EmailSubmissionPayload

  try {
    payload = await request.json()
  } catch {
    return NextResponse.json({ error: "Invalid request payload." }, { status: 400 })
  }

  const fullName = [payload.firstName, payload.lastName].filter(Boolean).join(" ").trim()
  const subject = fullName ? `New Contact Message - ${fullName}` : "New Contact Message"

  try {
    await sendSubmissionEmail({
      heading: "New Contact Message",
      intro: "A new contact message was submitted.",
      payload,
      subject,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    const message = error instanceof Error ? error.message : "Failed to send contact email."

    return NextResponse.json({ error: message }, { status: 500 })
  }
}
