import { Link } from 'react-router-dom'
import equipoImg from '../assets/UMI-ubeda.jpeg'
import './Hero.css'

function Hero() {
  return (
    <section className="hero">
      <div className="hero-overlay">
        <div className="container">
          <div className="hero-wrapper">
            <div className="hero-content">
              <h1 className="hero-title">El duelo es la otra cara del amor</h1>
              <p className="hero-subtitle">
                Un espacio de escucha y acompañamiento para quienes lo necesiten
              </p>
              <div className="hero-buttons">
                <Link to="/contacto" className="btn btn-large">Contacta con nosotros</Link>
                <a href="tel:671290373" className="btn btn-large btn-secondary">671 29 03 73</a>
              </div>
            </div>
            <div className="hero-image-container">
              <img src={equipoImg} alt="Equipo Centro de Escucha San Camilo" className="hero-image" />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
