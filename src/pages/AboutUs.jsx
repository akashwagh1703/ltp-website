import { motion } from 'framer-motion'
import './Page.css'

function AboutUs() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>About <span className="gradient-text">Let's Turf Play</span></h1>
            <p>Revolutionizing sports facility management in India</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="page-content">
          <section>
            <h2>Our Story</h2>
            <p>Let's Turf Play was born from a simple observation: turf owners were struggling with outdated, manual booking systems while players faced difficulty finding and booking quality sports facilities.</p>
            <p>Founded in 2024, we set out to bridge this gap with technology. Our mission is to empower turf owners with smart tools while making sports more accessible to everyone.</p>
          </section>

          <section>
            <h2>Our Mission</h2>
            <p>To digitize and streamline sports facility management across India, making it easier for turf owners to run their business and for players to enjoy their favorite sports.</p>
          </section>

          <section>
            <h2>Our Vision</h2>
            <p>To become India's largest sports facility booking platform, connecting millions of players with thousands of turfs, promoting fitness and sports culture nationwide.</p>
          </section>

          <section>
            <h2>What We Do</h2>
            <div className="features-list">
              <div className="feature-item">
                <i className='bx bxs-mobile'></i>
                <div>
                  <h3>For Turf Owners</h3>
                  <p>Complete business management solution with automated bookings, payment tracking, analytics, and customer management.</p>
                </div>
              </div>

              <div className="feature-item">
                <i className='bx bxs-user'></i>
                <div>
                  <h3>For Players</h3>
                  <p>Easy discovery and booking of nearby turfs with real-time availability, secure payments, and instant confirmations.</p>
                </div>
              </div>

              <div className="feature-item">
                <i className='bx bxs-bar-chart-alt-2'></i>
                <div>
                  <h3>Data-Driven Insights</h3>
                  <p>Powerful analytics help owners optimize pricing, understand customer behavior, and grow revenue.</p>
                </div>
              </div>
            </div>
          </section>

          <section>
            <h2>Our Values</h2>
            <div className="values-grid">
              <div className="value-card">
                <i className='bx bxs-bolt'></i>
                <h3>Innovation</h3>
                <p>Constantly improving with latest technology</p>
              </div>
              <div className="value-card">
                <i className='bx bxs-shield'></i>
                <h3>Trust</h3>
                <p>Secure, transparent, and reliable platform</p>
              </div>
              <div className="value-card">
                <i className='bx bxs-heart'></i>
                <h3>Customer First</h3>
                <p>Your success is our success</p>
              </div>
              <div className="value-card">
                <i className='bx bxs-group'></i>
                <h3>Community</h3>
                <p>Building a sports-loving ecosystem</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Our Impact</h2>
            <div className="stats-grid">
              <div className="stat-box">
                <h3>500+</h3>
                <p>Turf Owners</p>
              </div>
              <div className="stat-box">
                <h3>10,000+</h3>
                <p>Monthly Bookings</p>
              </div>
              <div className="stat-box">
                <h3>50,000+</h3>
                <p>Active Players</p>
              </div>
              <div className="stat-box">
                <h3>25+</h3>
                <p>Cities</p>
              </div>
            </div>
          </section>

          <section>
            <h2>Join Us</h2>
            <p>Whether you're a turf owner looking to modernize your business or a player seeking the perfect venue, Let's Turf Play is here to help.</p>
            <div className="cta-buttons">
              <a href="#contact" className="btn-primary">Get Started</a>
              <a href="#contact" className="btn-secondary">Contact Us</a>
            </div>
          </section>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
