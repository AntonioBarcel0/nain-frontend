import { Link } from 'react-router-dom'
import './Pages.css'

function ComoFunciona() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Cómo Funciona</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="section-subtitle">Proceso de Acompañamiento</h2>
            <div className="steps">
              <div className="step">
                <div className="step-number">1</div>
                <div className="step-content">
                  <h3>Contacto Inicial</h3>
                  <p>
                    Llámanos al <a href="tel:671290373"><strong>671 29 03 73</strong></a> o 
                    envíanos un email a <a href="mailto:centrodeescuchanain@gmail.com">centrodeescuchanain@gmail.com</a>.
                    También puedes usar nuestro formulario de contacto.
                  </p>
                  <p><strong>Es necesario pedir cita previa</strong> ya que compartimos espacio y no estamos de forma continua en el centro.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">2</div>
                <div className="step-content">
                  <h3>Primera Cita</h3>
                  <p>
                    En el primer encuentro se realiza una presentación básica de la persona y del centro. 
                    Se explica claramente qué ofrecemos y qué no ofrecemos.
                  </p>
                  <p>Se firma el <strong>consentimiento informado</strong> que garantiza la confidencialidad del proceso.</p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">3</div>
                <div className="step-content">
                  <h3>Sesiones de Escucha</h3>
                  <p>
                    El voluntario se presenta y anima a la persona a contar la razón por la que ha venido. 
                    Se respetan los tiempos de cada persona y se ofrecen las sesiones necesarias.
                  </p>
                  <p>
                    <strong>Duración:</strong> Aproximadamente 1 hora por sesión<br />
                    <strong>Frecuencia:</strong> Una vez por semana<br />
                    <strong>Número de sesiones:</strong> 20 sesiones, se individualizarán si se requiere
                  </p>
                </div>
              </div>
              
              <div className="step">
                <div className="step-number">4</div>
                <div className="step-content">
                  <h3>Acompañamiento Continuo</h3>
                  <p>
                    Se puede ir buscando información que pueda ser necesaria o simplemente dejar que fluya. 
                    Lo importante es que la persona se sienta escuchada, validada y acompañada en su proceso.
                  </p>
                </div>
              </div>
            </div>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">Preguntas Frecuentes</h2>
            <div className="faq">
              <div className="faq-item">
                <h3>¿Cuánto cuesta el servicio?</h3>
                <p>El servicio es totalmente <strong>gratuito</strong>. No tiene ningún coste.</p>
              </div>
              
              <div className="faq-item">
                <h3>¿Necesito ser católico o tener creencias religiosas?</h3>
                <p>
                  No. El Centro de Escucha es <strong>aconfesional</strong> y está abierto a cualquier persona 
                  independientemente de sus creencias religiosas.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>¿Es confidencial?</h3>
                <p>
                  Sí, todo es estrictamente <strong>confidencial</strong>. Se firma un consentimiento informado 
                  que garantiza la privacidad de todo lo compartido.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>¿Cuántas sesiones necesitaré?</h3>
                <p>
                  Se ofrecen <strong>20 sesiones</strong>, se individualizará según las necesidades de cada persona.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>¿Dónde se realizan los encuentros?</h3>
                <p>
                  Los encuentros se realizan en <strong>Úbeda, Jaén</strong>. Al contactar, te indicaremos 
                  la ubicación exacta del centro.
                </p>
              </div>
              
              <div className="faq-item">
                <h3>¿Puedo traer a un familiar o amigo?</h3>
                <p>
                  Los encuentros son <strong>individuales</strong> para garantizar un espacio seguro y confidencial. 
                  Sin embargo, si tienes alguna necesidad especial, coméntalo al contactar.
                </p>
              </div>
            </div>
          </div>
          
          <div className="cta-box">
            <h2>¿Listo para dar el primer paso?</h2>
            <p>No estás solo. Estamos aquí para escucharte.</p>
            <div className="cta-buttons">
              <Link to="/contacto" className="btn btn-large">Solicita tu cita</Link>
              <a href="tel:671290373" className="btn btn-large btn-secondary">671 29 03 73</a>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default ComoFunciona
