import nodemailer from 'nodemailer'

// Función serverless de Vercel: recibe el formulario de contacto y lo envía por Gmail

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: process.env.EMAIL_USER,
    pass: process.env.EMAIL_PASS
  },
  connectionTimeout: 10000,
  greetingTimeout: 10000,
  socketTimeout: 15000
})

// Escapar HTML para que los datos del formulario no se interpreten en el email
const escapeHtml = (value) => String(value)
  .replace(/&/g, '&amp;')
  .replace(/</g, '&lt;')
  .replace(/>/g, '&gt;')
  .replace(/"/g, '&quot;')
  .replace(/'/g, '&#39;')

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

// Límite de envíos por IP. Vive en la memoria de cada instancia de la función,
// así que es orientativo: frena ráfagas de un mismo origen, no ataques distribuidos.
const RATE_LIMIT_MAX = 5
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000
const submissions = new Map()

const isRateLimited = (ip) => {
  const now = Date.now()
  const recent = (submissions.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS)
  if (recent.length >= RATE_LIMIT_MAX) {
    submissions.set(ip, recent)
    return true
  }
  recent.push(now)
  submissions.set(ip, recent)
  return false
}

const MIN_FILL_TIME_MS = 3000
const SUCCESS_MESSAGE = 'Mensaje enviado correctamente. Te contactaremos pronto.'

export default async function handler(req, res) {
  if (req.method !== 'POST') {
    res.setHeader('Allow', 'POST')
    return res.status(405).json({ message: 'Método no permitido' })
  }

  const body = req.body || {}
  const nombre = String(body.nombre || '').trim()
  const email = String(body.email || '').trim()
  const telefono = String(body.telefono || '').trim()
  const mensaje = String(body.mensaje || '').trim()

  // Anti-spam: campo trampa relleno o formulario enviado demasiado rápido.
  // Se responde como si hubiera ido bien para no dar pistas al bot.
  if (body.website || !(Number(body.elapsed) >= MIN_FILL_TIME_MS)) {
    return res.status(200).json({ message: SUCCESS_MESSAGE })
  }

  if (!nombre || !telefono) {
    return res.status(400).json({
      message: 'Nombre y teléfono son obligatorios'
    })
  }

  if (nombre.length > 100 || email.length > 150 || telefono.length > 30 || mensaje.length > 3000) {
    return res.status(400).json({
      message: 'Alguno de los campos es demasiado largo'
    })
  }

  if (email && !EMAIL_REGEX.test(email)) {
    return res.status(400).json({
      message: 'El email no es válido'
    })
  }

  if (body.privacidad !== true) {
    return res.status(400).json({
      message: 'Debes aceptar la política de privacidad'
    })
  }

  const ip = String(req.headers?.['x-forwarded-for'] || '').split(',')[0].trim() || 'desconocida'
  if (isRateLimited(ip)) {
    return res.status(429).json({
      message: 'Has enviado demasiados mensajes. Por favor, inténtalo más tarde o llámanos directamente.'
    })
  }

  // Configurar email
  const mailOptions = {
    from: process.env.EMAIL_USER,
    to: process.env.EMAIL_TO,
    replyTo: email || undefined,
    subject: `Nuevo contacto de ${nombre.replace(/[\r\n]+/g, ' ')} - Centro Naín`,
    html: `
      <h2>Nuevo contacto desde la web</h2>
      <p><strong>Nombre:</strong> ${escapeHtml(nombre)}</p>
      <p><strong>Email:</strong> ${email ? escapeHtml(email) : 'No proporcionado'}</p>
      <p><strong>Teléfono:</strong> ${escapeHtml(telefono)}</p>
      <p><strong>Mensaje:</strong></p>
      <p>${mensaje ? escapeHtml(mensaje).replace(/\n/g, '<br>') : 'Sin mensaje'}</p>
    `
  }

  try {
    await transporter.sendMail(mailOptions)
    res.status(200).json({ message: SUCCESS_MESSAGE })
  } catch (error) {
    console.error('Error al enviar email:', error)
    res.status(500).json({
      message: 'Error al enviar el mensaje. Por favor, llámanos directamente.'
    })
  }
}
