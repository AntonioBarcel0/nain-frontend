import './Pages.css'
import sanCamiloLogo from '../assets/san_camilo.png'
import diocesisJaenLogo from '../assets/diocesis_jaen.jpg'

function QuienesSomos() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Quiénes Somos</h1>
        </div>
      </div>
      
      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="section-subtitle">¿Por qué surge el Centro de Escucha Naín?</h2>
            <p>
              En nuestra sociedad, en muchas ocasiones, las personas no somos capaces de escuchar 
              a los que tenemos al lado. Siempre tenemos prisa o no queremos oír los sufrimientos 
              de los demás. También ocurre que no queremos contar penas para no cansar o agobiar 
              a los cercanos.
            </p>
            <p>
              La Pastoral de la Salud de la Diócesis de Jaén siente que debemos acompañar a estas 
              personas. En toda España se están creando centros de escucha que están atendiendo a 
              gran cantidad de personas que, de otra manera, vivirían su duelo en soledad.
            </p>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">Nuestro Equipo de Voluntarios</h2>
            <p>
              Somos un equipo de 5 voluntarios de Úbeda: <strong>Expi, Pepe, Rebeca, Joaquín Rafael y Soledad</strong>. 
              Pertenecemos a la Diócesis de Jaén, a la Pastoral de la Salud y dentro de esta pastoral 
              al Grupo de Acompañamiento del Duelo. Pertenecemos a la Red de Centros de Escucha San Camilo Red CESCUS.
            </p>
            <p>
              Somos personas con una vocación de ayuda y nuestro papel es el de ser acompañantes de 
              aquellas personas que sufren en soledad o tienen desesperanza tras la pérdida de un ser querido.
            </p>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">Formación Especializada</h2>
            <p>
              Hemos recibido formación específica del <strong>Centro de Humanización de San Camilo</strong> y 
              de profesionales expertos en duelo de la Universidad de Huelva. La formación incluye:
            </p>
            <ul>
              <li>Habilidades de comunicación con ejercicios prácticos de role playing</li>
              <li>Manejo de emociones</li>
              <li>Respeto a la dignidad y autonomía de la persona</li>
              <li>Trabajo en equipo entre voluntarios</li>
              <li>Importancia del autocuidado</li>
            </ul>
          </div>
          
          <div className="card">
            <h2 className="section-subtitle">En Red Con</h2>
            <div className="network-list">
              <div className="network-item">
                <img src={diocesisJaenLogo} alt="Logo Diocesis Jaen" style={{width: '350px', marginBottom: '10px'}} />
                <h3 style={{fontSize: '40px'}}>Diócesis de Jaén</h3>
              </div>
              <div className="network-item">
                <img src={sanCamiloLogo} alt="Logo San Camilo" style={{width: '350px', marginBottom: '10px'}} />
                <h3 style={{fontSize: '40px'}}>Red de Centros de Escucha San Camilo (Red CESCUS)</h3>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}

export default QuienesSomos
