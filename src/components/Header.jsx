import { useState } from 'react'
import { Link } from 'react-router-dom'
import { FaBars, FaTimes } from 'react-icons/fa'
import './Header.css'
import diocesisLogo from '../assets/xxxx1.png'
import sanCamiloLogo from '../assets/xxxx2.png'

function Header() {
  const [menuOpen, setMenuOpen] = useState(false)
  const closeMenu = () => setMenuOpen(false)

  return (
    <header className="header">
      <div className="container">
        <div className="header-content">
          <Link to="/" className="logo" onClick={closeMenu}>
            <div className="logo-images">
              <img src={diocesisLogo} alt="Diócesis de Jaén" className="logo-img" />
              <img src={sanCamiloLogo} alt="San Camilo" className="logo-img" />
            </div>
            <div className="logo-text">
              <h1>Centro de Escucha <span>NAÍN</span></h1>
              <p className="tagline">Diócesis de Jaén • Red de Centros de Escucha San Camilo</p>
            </div>
          </Link>

          <button
            type="button"
            className="menu-toggle"
            onClick={() => setMenuOpen(open => !open)}
            aria-label={menuOpen ? 'Cerrar menú' : 'Abrir menú'}
            aria-expanded={menuOpen}
          >
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>

          <nav className={`nav ${menuOpen ? 'nav-open' : ''}`}>
            <Link to="/" onClick={closeMenu}>Inicio</Link>
            <Link to="/quienes-somos" onClick={closeMenu}>Quiénes Somos</Link>
            <Link to="/que-ofrecemos" onClick={closeMenu}>Qué Ofrecemos</Link>
            <Link to="/como-funciona" onClick={closeMenu}>Cómo Funciona</Link>
            <Link to="/contacto" className="btn-nav" onClick={closeMenu}>Contacto</Link>
          </nav>
        </div>
      </div>
    </header>
  )
}

export default Header

