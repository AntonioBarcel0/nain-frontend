import { useState } from 'react'
import { FaPhone, FaEnvelope, FaInstagram, FaMapMarkerAlt, FaClock } from 'react-icons/fa'
import axios from 'axios'
import './Pages.css'

function Contacto() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    telefono: '',
    mensaje: ''
  })
  
  const [status, setStatus] = useState({ type: '', message: '' })
  const [loading, setLoading] = useState(false)
  
  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }
  
  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setStatus({ type: '', message: '' })
    
    try {
      const response = await axios.post('/api/contact', formData)
      setStatus({ type: 'success', message: response.data.message })
      setFormData({ nombre: '', email: '', telefono: '', mensaje: '' })
    } catch (error) {
      setStatus({ 
        type: 'error', 
        message: 'Error al enviar el mensaje. Por favor, inténtalo de nuevo o llámanos directamente.' 
      })
    } finally {
      setLoading(false)
    }
  }
  
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Contacto</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="contact-grid">
            <div className="contact-info-box">
              <h2>¿Cómo contactarnos?</h2>
              <p>Puedes comunicarte con nosotros de varias formas:</p>
              
              <div className="contact-method">
                <h3><FaPhone /> Por Teléfono</h3>
                <a href="tel:671290373" className="contact-link">671 29 03 73</a>
                <p>Es la forma más directa. Llámanos y agendaremos tu cita.</p>
              </div>
              
              <div className="contact-method">
                <h3><FaEnvelope /> Por Email</h3>
                <a href="mailto:centrodeescuchanain@gmail.com" className="contact-link">
                  centrodeescuchanain@gmail.com
                </a>
                <p>Envíanos un correo y te responderemos lo antes posible.</p>
              </div>
              
              <div className="contact-method">
                <h3><FaInstagram /> Por Instagram</h3>
                <a href="https://instagram.com/centrodeescuchanain" target="_blank" rel="noopener noreferrer" className="contact-link">
                  @centrodeescuchanain
                </a>
                <p>Síguenos y envíanos un mensaje directo.</p>
              </div>
              
              <div className="contact-method">
                <h3><FaMapMarkerAlt /> Ubicación</h3>
                <p><strong>Úbeda, Jaén</strong></p>
                <p>Al contactarnos te indicaremos la dirección exacta del centro.</p>
              </div>
              
              <div className="alert-box">
                <p><strong><FaClock /> Importante:</strong></p>
                <p>Es necesario <strong>pedir cita previa</strong>. No tenemos horario de atención sin cita debido a que compartimos el espacio.</p>
              </div>
            </div>
            
            <div className="contact-form-box">
              <h2>Formulario de Contacto</h2>
              <p>También puedes dejarnos tus datos y nos pondremos en contacto contigo:</p>
              
              <form onSubmit={handleSubmit} className="contact-form">
                <div className="form-group">
                  <label htmlFor="nombre">Nombre *</label>
                  <input
                    type="text"
                    id="nombre"
                    name="nombre"
                    value={formData.nombre}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="email">Email</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="telefono">Teléfono *</label>
                  <input
                    type="tel"
                    id="telefono"
                    name="telefono"
                    value={formData.telefono}
                    onChange={handleChange}
                    required
                  />
                </div>
                
                <div className="form-group">
                  <label htmlFor="mensaje">Mensaje</label>
                  <textarea
                    id="mensaje"
                    name="mensaje"
                    value={formData.mensaje}
                    onChange={handleChange}
                    rows="5"
                    placeholder="Cuéntanos brevemente cómo podemos ayudarte..."
                  ></textarea>
                </div>
                
                {status.message && (
                  <div className={`form-status ${status.type}`}>
                    {status.message}
                  </div>
                )}
                
                <button type="submit" className="btn btn-large" disabled={loading}>
                  {loading ? 'Enviando...' : 'Enviar mensaje'}
                </button>
                
                <p className="form-note">
                  * Campos obligatorios. Tus datos son tratados de forma confidencial.
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Contacto
