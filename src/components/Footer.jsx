import { FaPhone, FaEnvelope, FaInstagram } from 'react-icons/fa'
import './Footer.css'

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-section">
            <h3>Centro de Escucha NAÍN</h3>
            <p>Diócesis de Jaén - Pastoral de la Salud</p>
            <p>Úbeda, Jaén</p>
          </div>
          
          <div className="footer-section">
            <h3>Contacto</h3>
            <p><FaPhone /> <a href="tel:671290373">671 29 03 73</a></p>
            <p><FaEnvelope /> <a href="mailto:centrodeescuchanain@gmail.com">centrodeescuchanain@gmail.com</a></p>
            <p><FaInstagram /> <a href="https://instagram.com/centrodeescuchanain" target="_blank" rel="noopener noreferrer">@centrodeescuchanain</a></p>
          </div>
          
          <div className="footer-section">
            <h3>En Red con</h3>
            <p>Centro de Humanización de la Salud</p>
            <p>Red de Centros de Escucha</p>
            <p>Grupo de Acompañamiento del Duelo</p>
          </div>
          
          <div className="footer-section">
            <h3>Horario</h3>
            <p>Atención con cita previa</p>
            <p>Servicio gratuito y confidencial</p>
          </div>
        </div>
        
        <div className="footer-bottom">
          <p>&copy; 2026 Centro de Escucha Naín - Todos los derechos reservados</p>
        </div>
      </div>
    </footer>
  )
}

export default Footer
