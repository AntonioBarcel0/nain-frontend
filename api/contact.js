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
    res.status(200).json({
      message: 'Mensaje enviado correctamente. Te contactaremos pronto.'
    })
  } catch (error) {
    console.error('Error al enviar email:', error)
    res.status(500).json({
      message: 'Error al enviar el mensaje. Por favor, llámanos directamente.'
    })
  }
}
