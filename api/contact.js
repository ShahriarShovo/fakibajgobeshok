import nodemailer from 'nodemailer'

const DEFAULT_ZOHO_HOST = 'smtppro.zoho.com'
const CONTACT_TO_EMAIL = process.env.MAIL_TO || process.env.CONTACT_TO_EMAIL || 'contact@fakibajgobeshok.org'
const SMTP_HOST = process.env.SMTP_HOST || DEFAULT_ZOHO_HOST
const SMTP_PORT = Number(process.env.SMTP_PORT || 465)
const SMTP_SECURE = parseBoolean(process.env.SMTP_SECURE, SMTP_PORT === 465)
const SMTP_USER = process.env.SMTP_USER
const SMTP_PASS = process.env.SMTP_PASS
const MAIL_FROM = process.env.MAIL_FROM || process.env.CONTACT_FROM_EMAIL || SMTP_USER

function parseBoolean(value, fallback) {
  if (value === undefined) {
    return fallback
  }

  return ['true', '1', 'yes'].includes(String(value).toLowerCase())
}

function isValidEmail(email) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
}

function escapeHtml(value) {
  return String(value)
    .replaceAll('&', '&amp;')
    .replaceAll('<', '&lt;')
    .replaceAll('>', '&gt;')
    .replaceAll('"', '&quot;')
    .replaceAll("'", '&#039;')
}

function normalizePayload(body) {
  return {
    name: String(body?.name || '').trim(),
    email: String(body?.email || '').trim().toLowerCase(),
    subject: String(body?.subject || '').trim(),
    message: String(body?.message || '').trim(),
    website: String(body?.website || '').trim(),
  }
}

async function readJsonBody(req) {
  if (req.body && typeof req.body === 'object') {
    return req.body
  }

  if (typeof req.body === 'string') {
    return JSON.parse(req.body || '{}')
  }

  const chunks = []

  for await (const chunk of req) {
    chunks.push(chunk)
  }

  const rawBody = Buffer.concat(chunks).toString('utf8')
  return JSON.parse(rawBody || '{}')
}

function createTransporter() {
  return nodemailer.createTransport({
    host: SMTP_HOST,
    port: SMTP_PORT,
    secure: SMTP_SECURE,
    requireTLS: !SMTP_SECURE,
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 20000,
  })
}

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Method not allowed.' })
  }

  if (!SMTP_USER || !SMTP_PASS || !MAIL_FROM || !Number.isInteger(SMTP_PORT)) {
    return res.status(500).json({ message: 'Mail service is not configured yet.' })
  }

  let payload

  try {
    payload = normalizePayload(await readJsonBody(req))
  } catch {
    return res.status(400).json({ message: 'Please send a valid contact form.' })
  }

  if (payload.website) {
    return res.status(200).json({ message: 'Message sent.' })
  }

  if (!payload.name || payload.name.length > 120) {
    return res.status(400).json({ message: 'Please provide a valid name.' })
  }

  if (!isValidEmail(payload.email) || payload.email.length > 160) {
    return res.status(400).json({ message: 'Please provide a valid email address.' })
  }

  if (!payload.subject || payload.subject.length > 160) {
    return res.status(400).json({ message: 'Please provide a valid subject.' })
  }

  if (payload.message.length < 10 || payload.message.length > 4000) {
    return res.status(400).json({ message: 'Please write a message between 10 and 4000 characters.' })
  }

  const safeName = escapeHtml(payload.name)
  const safeEmail = escapeHtml(payload.email)
  const safeSubject = escapeHtml(payload.subject)
  const safeMessage = escapeHtml(payload.message).replaceAll('\n', '<br />')

  try {
    const transporter = createTransporter()

    await transporter.sendMail({
      from: MAIL_FROM,
      to: CONTACT_TO_EMAIL,
      subject: `Website contact: ${payload.subject}`,
      html: `
        <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
          <h2 style="margin: 0 0 16px;">New website contact message</h2>
          <p><strong>Name:</strong> ${safeName}</p>
          <p><strong>Email:</strong> ${safeEmail}</p>
          <p><strong>Subject:</strong> ${safeSubject}</p>
          <hr style="border: 0; border-top: 1px solid #e2e8f0; margin: 20px 0;" />
          <p>${safeMessage}</p>
        </div>
      `,
      text: [
        'New website contact message',
        '',
        `Name: ${payload.name}`,
        `Email: ${payload.email}`,
        `Subject: ${payload.subject}`,
        '',
        payload.message,
      ].join('\n'),
    })

    return res.status(200).json({ message: 'Message sent.' })
  } catch (error) {
    console.error('Contact mail failed:', error)
    return res.status(500).json({ message: 'Message could not be sent. Please try again later.' })
  }
}
