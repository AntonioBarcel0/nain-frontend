import { FaGift, FaLock, FaGlobe, FaClock, FaExclamationTriangle, FaHeartBroken, FaSadTear, FaHospital, FaWind } from 'react-icons/fa'
import './Pages.css'

function QueOfrecemos() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Qué Ofrecemos</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="section-subtitle">Nuestro Servicio Principal: La Escucha</h2>
            <p>
              Se ofrece principalmente el <strong>ser escuchado</strong>. La escucha activa, 
              el validar los sentimientos y ofrecerte como un espejo para que la persona que 
              acude a nosotros pueda ver su realidad, su situación, su problema, su duelo 
              desde otra óptica es la ayuda que se ofrece en el centro.
            </p>
            <p>
              Básicamente lo "único" que hacemos es <strong>escuchar</strong>, permitir a la 
              persona hablar, y en ese "hablar" se libera, expresa sus necesidades, encuentra 
              soluciones. No ofrecemos terapia psicológica, no ofrecemos soluciones nosotros, 
              solo somos un espejo desde donde le devolvemos a la persona aquello que nos cuenta 
              y ella lo ve desde otra perspectiva.
            </p>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">Características del Servicio</h2>
            <div className="features-grid">
              <div className="feature">
                <span className="feature-icon"><FaGift /></span>
                <h3>Gratuito</h3>
                <p>Servicio totalmente gratuito. No tiene ningún coste para las personas atendidas.</p>
              </div>
              <div className="feature">
                <span className="feature-icon"><FaLock /></span>
                <h3>Confidencial</h3>
                <p>Todo lo compartido es estrictamente confidencial. Se firma consentimiento informado.</p>
              </div>
              <div className="feature">
                <span className="feature-icon"><FaGlobe /></span>
                <h3>Aconfesional</h3>
                <p>Abierto a cualquier persona independientemente de sus creencias religiosas.</p>
              </div>
              <div className="feature">
                <span className="feature-icon"><FaClock /></span>
                <h3>Encuentros Semanales</h3>
                <p>Encuentros de aproximadamente una hora de duración, un día a la semana.</p>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">¿Qué NO es el Centro de Escucha Naín?</h2>
            <div className="alert-box">
              <p><strong><FaExclamationTriangle /> Importante:</strong></p>
              <ul>
                <li>No es un centro de terapias psicológicas</li>
                <li>No sustituimos a profesionales de la salud mental</li>
                <li>No ofrecemos soluciones o consejos directos</li>
              </ul>
              <p>
                Nuestro papel es complementario. Si detectamos necesidad de apoyo profesional, 
                orientamos a la persona hacia los servicios apropiados.
              </p>
            </div>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">Áreas de Acompañamiento</h2>
            <div className="areas-list">
              <div className="area-item">
                <h3><FaHeartBroken /> Duelo por Pérdida</h3>
                <p>Acompañamiento en el duelo tras la pérdida de un ser querido. Es nuestra área principal de atención.</p>
              </div>
              <div className="area-item">
                <h3><FaSadTear /> Soledad</h3>
                <p>Acompañamiento a personas que se sienten solas y necesitan ser escuchadas.</p>
              </div>
              <div className="area-item">
                <h3><FaHospital /> Enfermedad</h3>
                <p>Apoyo emocional durante procesos de enfermedad propia o de familiares.</p>
              </div>
              <div className="area-item">
                <h3><FaWind /> Crisis Vital</h3>
                <p>Acompañamiento en momentos de crisis personal, cambios importantes o situaciones conflictivas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QueOfrecemos
