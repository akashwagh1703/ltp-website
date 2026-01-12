import { BrowserRouter, Routes, Route, Link, useLocation } from 'react-router-dom'
import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import Home from './Home'
import PrivacyPolicy from './pages/PrivacyPolicy'
import TermsOfService from './pages/TermsOfService'
import RefundPolicy from './pages/RefundPolicy'
import AboutUs from './pages/AboutUs'
import ContactUs from './pages/ContactUs'
import FAQ from './pages/FAQ'
import './App.css'

function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const location = useLocation()

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  return (
    <motion.nav 
      className={`navbar ${scrolled ? 'scrolled' : ''}`}
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
    >
      <div className="container">
        <div className="nav-content">
          <Link to="/" className="logo">
            <i className='bx bxs-cricket-ball'></i>
            <span>Let's Play Turf</span>
          </Link>
          <div className="nav-links">
            <Link to="/#problem">Problem</Link>
            <Link to="/#solution">Solution</Link>
            <Link to="/#features">Features</Link>
            <Link to="/faq">FAQ</Link>
            <Link to="/about">About</Link>
            <Link to="/contact" className="btn-primary">Contact Us</Link>
          </div>
        </div>
      </div>
    </motion.nav>
  )
}

function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <div className="footer-content">
          <div className="footer-brand">
            <div className="logo">
              <i className='bx bxs-cricket-ball'></i>
              <span>Let's Play Turf</span>
            </div>
            <p>Revolutionizing turf management with smart technology</p>
            <div className="social-links">
              <a href="#"><i className='bx bxl-facebook'></i></a>
              <a href="#"><i className='bx bxl-instagram'></i></a>
              <a href="#"><i className='bx bxl-twitter'></i></a>
              <a href="#"><i className='bx bxl-linkedin'></i></a>
            </div>
          </div>

          <div className="footer-links">
            <div className="footer-column">
              <h4>Product</h4>
              <Link to="/#features">Features</Link>
              <Link to="/faq">FAQ</Link>
              <Link to="/#how-it-works">How It Works</Link>
            </div>

            <div className="footer-column">
              <h4>Company</h4>
              <Link to="/about">About Us</Link>
              <Link to="/contact">Contact</Link>
            </div>

            <div className="footer-column">
              <h4>Legal</h4>
              <Link to="/privacy-policy">Privacy Policy</Link>
              <Link to="/terms-of-service">Terms of Service</Link>
              <Link to="/refund-policy">Refund Policy</Link>
            </div>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; 2024 Let's Turf Play. All rights reserved.</p>
          <p>Made with <i className='bx bxs-heart'></i> in India</p>
        </div>
      </div>
    </footer>
  )
}

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

function App() {
  return (
    <BrowserRouter>
      <ScrollToTop />
      <div className="app">
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/privacy-policy" element={<PrivacyPolicy />} />
          <Route path="/terms-of-service" element={<TermsOfService />} />
          <Route path="/refund-policy" element={<RefundPolicy />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faq" element={<FAQ />} />
        </Routes>
        <Footer />
      </div>
    </BrowserRouter>
  )
}

export default App
