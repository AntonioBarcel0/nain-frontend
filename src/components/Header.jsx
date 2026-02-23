import { Link } from 'react-router-dom'
import './Header.css'
import diocesisLogo from '../assets/diocesis_jaen.jpg'
import sanCamiloLogo from '../assets/san_camilo.png'

function Header() {
  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo">
            <div className="logo-images">
              <img src={diocesisLogo} alt="Diócesis de Jaén" className="logo-img" />
              <img src={sanCamiloLogo} alt="San Camilo" className="logo-img" />
            </div>
            <div className="logo-text">
              <h1>Centro de Escucha <span>NAÍN</span></h1>
              <p className="tagline">Diócesis de Jaén • Red de Centros de Escucha San Camilo</p>
            </div>
          </Link>
          <nav className="nav">
            <Link to="/">Inicio</Link>
            <Link to="/quienes-somos">Quiénes Somos</Link>
            <Link to="/que-ofrecemos">Qué Ofrecemos</Link>
            <Link to="/como-funciona">Cómo Funciona</Link>
            <Link to="/contacto" className="btn-nav">Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

