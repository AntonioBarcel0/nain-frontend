import { Link } from 'react-router-dom'
import { FaHeartBroken, FaHandshake, FaHospital, FaSeedling, FaCheck } from 'react-icons/fa'
import Hero from '../components/Hero'
import './Home.css'

function Home() {
  return (
    <div className="home">
      <Hero />
      
      <section className="section">
        <div className="container">
          <h2 className="section-title">¿Qué es el Centro de Escucha Naín?</h2>
          <div className="card">
            <p style={{fontSize: '1.6rem', textAlign: 'center', marginBottom: '20px'}}>
              Un lugar donde se <strong>escucha</strong> y se <strong>acompaña</strong> a personas 
              en situaciones de duelo por la pérdida de un ser querido, soledad, enfermedad o crisis vital.
            </p>
          </div>
          
          <h2 className="section-subtitle">¿Cuándo acudir a nuestro Centro?</h2>
          <div className="reasons-grid">
            <div className="reason-card">
              <div className="reason-icon"><FaHeartBroken /></div>
              <h3>Duelo</h3>
              <p>Acompañamiento tras la pérdida de un ser querido</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon"><FaHandshake /></div>
              <h3>Soledad</h3>
              <p>Un espacio donde ser escuchado sin juicios</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon"><FaHospital /></div>
              <h3>Enfermedad</h3>
              <p>Apoyo en momentos de fragilidad</p>
            </div>
            <div className="reason-card">
              <div className="reason-icon"><FaSeedling /></div>
              <h3>Crisis Vital</h3>
              <p>Escucha en situaciones difíciles</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section bg-accent">
        <div className="container">
          <h2 className="section-title">Nuestros Valores</h2>
          <div className="values-grid">
            <div className="value-item">
              <h3><FaCheck /> Gratuito</h3>
              <p>Servicio totalmente gratuito</p>
            </div>
            <div className="value-item">
              <h3><FaCheck /> Confidencial</h3>
              <p>Total privacidad y respeto</p>
            </div>
            <div className="value-item">
              <h3><FaCheck /> Aconfesional</h3>
              <p>Abierto a todas las personas</p>
            </div>
            <div className="value-item">
              <h3><FaCheck /> Profesional</h3>
              <p>Voluntarios formados en escucha</p>
            </div>
          </div>
        </div>
      </section>
      
      <section className="section">
        <div className="container">
          <div className="cta-box">
            <h2>¿Necesitas hablar con alguien?</h2>
            <p>Estamos aquí para escucharte. El primer paso es contactarnos.</p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-large">Solicita una cita</Link>
              <a href="tel:671290373" className="btn btn-large btn-secondary">Llámanos: 671 29 03 73</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Home
