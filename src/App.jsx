import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Home from './pages/Home'
import QuienesSomos from './pages/QuienesSomos'
import QueOfrecemos from './pages/QueOfrecemos'
import ComoFunciona from './pages/ComoFunciona'
import Contacto from './pages/Contacto'

function App() {
  return (
    <Router>
      <div className="app">
        <Header />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/quienes-somos" element={<QuienesSomos />} />
            <Route path="/que-ofrecemos" element={<QueOfrecemos />} />
            <Route path="/como-funciona" element={<ComoFunciona />} />
            <Route path="/contacto" element={<Contacto />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  )
}

export default App
