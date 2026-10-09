import './Pages.css'

function Privacidad() {
  return (
    <div className="page">
      <div className="page-header">
        <div className="container">
          <h1>Política de Privacidad</h1>
        </div>
      </div>

      <section className="section">
        <div className="container">
          <div className="card">
            <h2 className="section-subtitle">Responsable del tratamiento</h2>
            <p>
              <strong>Centro de Escucha Naín</strong>, perteneciente a la Pastoral de la Salud de la
              Diócesis de Jaén. Úbeda (Jaén).
            </p>
            <p>
              Email de contacto: <a href="mailto:centrodeescuchanain@gmail.com">centrodeescuchanain@gmail.com</a><br />
              Teléfono: <a href="tel:671290373">671 29 03 73</a>
            </p>
          </div>

          <div className="card">
            <h2 className="section-subtitle">Qué datos tratamos y para qué</h2>
            <p>
              A través del formulario de contacto recogemos tu <strong>nombre</strong>, tu <strong>teléfono</strong> y,
              si decides facilitarlos, tu <strong>email</strong> y el <strong>mensaje</strong> que nos escribas.
            </p>
            <p>
              Utilizamos estos datos únicamente para ponernos en contacto contigo, responder a tu
              consulta y, si lo deseas, concertar una cita. No los usamos para enviarte publicidad
              ni elaboramos perfiles.
            </p>
            <p>
              Te pedimos que en el mensaje no incluyas más información personal de la necesaria.
              Lo que quieras compartir sobre tu situación podrás contárnoslo en persona.
            </p>
          </div>

          <div className="card">
            <h2 className="section-subtitle">Base legal</h2>
            <p>
              El tratamiento se basa en tu <strong>consentimiento</strong>, que nos das al marcar la casilla
              del formulario antes de enviarlo (art. 6.1.a del Reglamento General de Protección de
              Datos). Puedes retirarlo en cualquier momento escribiéndonos.
            </p>
          </div>

          <div className="card">
            <h2 className="section-subtitle">Cuánto tiempo conservamos tus datos</h2>
            <p>
              Conservamos tus datos solo durante el tiempo necesario para atender tu solicitud.
              Después se eliminan, salvo que sigamos en contacto contigo o nos pidas lo contrario.
            </p>
          </div>

          <div className="card">
            <h2 className="section-subtitle">Con quién se comparten</h2>
            <p>
              No cedemos tus datos a terceros. Para que la web y el correo funcionen utilizamos
              proveedores tecnológicos que actúan como encargados del tratamiento:
            </p>
            <ul>
              <li><strong>Vercel Inc.</strong>: alojamiento de la web y envío del formulario.</li>
              <li><strong>Google (Gmail)</strong>: recepción de los mensajes en nuestra cuenta de correo.</li>
            </ul>
            <p>
              Estos proveedores pueden tratar datos fuera del Espacio Económico Europeo. Están
              adheridos al Marco de Privacidad de Datos UE-EE. UU. y aplican las garantías previstas
              en la normativa europea.
            </p>
          </div>

          <div className="card">
            <h2 className="section-subtitle">Tus derechos</h2>
            <p>
              Puedes ejercer tus derechos de acceso, rectificación, supresión, oposición, limitación
              del tratamiento y portabilidad escribiendo a{' '}
              <a href="mailto:centrodeescuchanain@gmail.com">centrodeescuchanain@gmail.com</a>.
            </p>
            <p>
              Si consideras que no hemos tratado tus datos correctamente, puedes presentar una
              reclamación ante la <strong>Agencia Española de Protección de Datos</strong>{' '}
              (<a href="https://www.aepd.es" target="_blank" rel="noopener noreferrer">www.aepd.es</a>).
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}

export default Privacidad
