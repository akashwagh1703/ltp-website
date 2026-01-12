import { useState, useEffect } from 'react'
import { motion } from 'framer-motion'
import './App.css'

function App() {
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50)
    window.addEventListener('scroll', handleScroll)
    return () => window.removeEventListener('scroll', handleScroll)
  }, [])

  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  return (
    <div className="app">
      {/* Navigation */}
      <motion.nav 
        className={`navbar ${scrolled ? 'scrolled' : ''}`}
        initial={{ y: -100 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <div className="container">
          <div className="nav-content">
            <div className="logo">
              <i className='bx bxs-cricket-ball'></i>
              <span>Let's Turf Play</span>
            </div>
            <div className="nav-links">
              <a href="#problem">Problem</a>
              <a href="#solution">Solution</a>
              <a href="#features">Features</a>
              <a href="#how-it-works">How It Works</a>
              <a href="#contact" className="btn-primary">Get Started</a>
            </div>
          </div>
        </div>
      </motion.nav>

      {/* Hero Section */}
      <section className="hero">
        <div className="hero-bg"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <i className='bx bx-trending-up'></i>
              <span>Revolutionizing Turf Management</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp}>
              Transform Your Turf Business with
              <span className="gradient-text"> Smart Technology</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Say goodbye to manual booking chaos. Empower your turf with automated scheduling, 
              real-time analytics, and seamless payment management.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <a href="#solution" className="btn-primary btn-large">
                <span>Discover Solution</span>
                <i className='bx bx-right-arrow-alt'></i>
              </a>
              <a href="#how-it-works" className="btn-secondary btn-large">
                <i className='bx bx-play-circle'></i>
                <span>See How It Works</span>
              </a>
            </motion.div>

            <motion.div className="hero-stats" variants={fadeInUp}>
              <div className="stat">
                <i className='bx bxs-user-check'></i>
                <div>
                  <h3>500+</h3>
                  <p>Turf Owners</p>
                </div>
              </div>
              <div className="stat">
                <i className='bx bxs-calendar-check'></i>
                <div>
                  <h3>10K+</h3>
                  <p>Bookings/Month</p>
                </div>
              </div>
              <div className="stat">
                <i className='bx bxs-star'></i>
                <div>
                  <h3>4.8/5</h3>
                  <p>User Rating</p>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.3 }}
          >
            <div className="phone-mockup">
              <div className="phone-frame">
                <div className="phone-screen">
                  <div className="app-preview">
                    <div className="app-header">
                      <div className="app-time">9:41</div>
                      <div className="app-icons">
                        <i className='bx bx-wifi'></i>
                        <i className='bx bx-battery'></i>
                      </div>
                    </div>
                    <div className="app-content">
                      <div className="dashboard-card">
                        <i className='bx bxs-dashboard'></i>
                        <h4>Today's Bookings</h4>
                        <h2>24</h2>
                      </div>
                      <div className="dashboard-card">
                        <i className='bx bxs-wallet'></i>
                        <h4>Revenue</h4>
                        <h2>₹12,450</h2>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Problem Section */}
      <section id="problem" className="problem-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">The Challenge</span>
            <h2>The Struggles of <span className="gradient-text">Traditional Turf Management</span></h2>
            <p>Turf owners face daily operational nightmares that cost time, money, and customers</p>
          </motion.div>

          <motion.div 
            className="problems-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bxs-phone-call'></i>
              </div>
              <h3>Manual Booking Chaos</h3>
              <p>Endless phone calls, WhatsApp messages, and manual registers lead to double bookings and missed opportunities.</p>
              <div className="problem-impact">
                <i className='bx bx-trending-down'></i>
                <span>30% Revenue Loss</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bxs-error-circle'></i>
              </div>
              <h3>Payment Tracking Nightmare</h3>
              <p>Cash payments, pending dues, and manual ledgers make financial management a daily headache.</p>
              <div className="problem-impact">
                <i className='bx bx-trending-down'></i>
                <span>40% Payment Delays</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bxs-time-five'></i>
              </div>
              <h3>No Real-Time Visibility</h3>
              <p>Unable to track bookings, revenue, or slot availability in real-time. Always reactive, never proactive.</p>
              <div className="problem-impact">
                <i className='bx bx-trending-down'></i>
                <span>4+ Hours Daily Wasted</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bxs-user-x'></i>
              </div>
              <h3>Poor Customer Experience</h3>
              <p>Players struggle to check availability, book slots, or make payments, leading to frustration and churn.</p>
              <div className="problem-impact">
                <i className='bx bx-trending-down'></i>
                <span>50% Customer Drop-off</span>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Solution Section */}
      <section id="solution" className="solution-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">The Solution</span>
            <h2>Introducing <span className="gradient-text">LTP Turf Owner App</span></h2>
            <p>Your all-in-one digital assistant for effortless turf management</p>
          </motion.div>

          <motion.div 
            className="solution-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="solution-visual" variants={fadeInUp}>
              <div className="solution-image">
                <div className="floating-card card-1">
                  <i className='bx bxs-calendar-check'></i>
                  <span>Auto Booking</span>
                </div>
                <div className="floating-card card-2">
                  <i className='bx bxs-wallet'></i>
                  <span>Instant Payments</span>
                </div>
                <div className="floating-card card-3">
                  <i className='bx bxs-bar-chart-alt-2'></i>
                  <span>Live Analytics</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="solution-text" variants={fadeInUp}>
              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bxs-zap'></i>
                </div>
                <div>
                  <h3>Automated Booking System</h3>
                  <p>Players book directly through the app. No more phone calls, no more manual entries. Real-time slot updates prevent double bookings.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bxs-credit-card'></i>
                </div>
                <div>
                  <h3>Seamless Payment Management</h3>
                  <p>Accept online payments, track cash bookings, and manage payouts automatically. Every transaction recorded and reconciled.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bxs-dashboard'></i>
                </div>
                <div>
                  <h3>Real-Time Dashboard</h3>
                  <p>Monitor bookings, revenue, and performance metrics instantly. Make data-driven decisions to grow your business.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bxs-mobile'></i>
                </div>
                <div>
                  <h3>Mobile-First Design</h3>
                  <p>Manage your turf from anywhere, anytime. Simple, intuitive interface designed for busy turf owners.</p>
                </div>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="features-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">Powerful Features</span>
            <h2>Everything You Need to <span className="gradient-text">Scale Your Business</span></h2>
          </motion.div>

          <motion.div 
            className="features-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-calendar-event'></i>
              </div>
              <h3>Smart Scheduling</h3>
              <p>Dynamic slot management with customizable pricing for peak and off-peak hours</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-bell-ring'></i>
              </div>
              <h3>Instant Notifications</h3>
              <p>Get real-time alerts for new bookings, cancellations, and payment confirmations</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-bar-chart-square'></i>
              </div>
              <h3>Revenue Analytics</h3>
              <p>Track daily, weekly, and monthly revenue with detailed booking reports</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-user-detail'></i>
              </div>
              <h3>Customer Management</h3>
              <p>Build customer database, track repeat bookings, and offer loyalty rewards</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-x-circle'></i>
              </div>
              <h3>Easy Cancellations</h3>
              <p>Handle cancellations and refunds automatically with configurable policies</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bxs-wallet-alt'></i>
              </div>
              <h3>Payout Management</h3>
              <p>Automated payout calculations with transparent commission tracking</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* How It Works Section */}
      <section id="how-it-works" className="how-it-works-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">Simple Process</span>
            <h2>Get Started in <span className="gradient-text">3 Easy Steps</span></h2>
          </motion.div>

          <motion.div 
            className="steps-container"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="step" variants={fadeInUp}>
              <div className="step-number">01</div>
              <div className="step-icon">
                <i className='bx bxs-download'></i>
              </div>
              <h3>Download & Register</h3>
              <p>Download the LTP Turf Owner app, complete your profile, and add your turf details in minutes</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div className="step" variants={fadeInUp}>
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className='bx bxs-cog'></i>
              </div>
              <h3>Configure Your Turf</h3>
              <p>Set up your slots, pricing, amenities, and availability. Customize everything to match your business</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div className="step" variants={fadeInUp}>
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className='bx bxs-rocket'></i>
              </div>
              <h3>Go Live & Grow</h3>
              <p>Start accepting bookings instantly. Monitor performance, optimize pricing, and scale your revenue</p>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="benefits-section">
        <div className="container">
          <motion.div 
            className="benefits-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="benefits-text" variants={fadeInUp}>
              <span className="section-badge">Impact</span>
              <h2>Transform Your Business <span className="gradient-text">Overnight</span></h2>
              <p>Join hundreds of turf owners who have revolutionized their operations</p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <i className='bx bxs-check-circle'></i>
                  <div>
                    <h4>3x More Bookings</h4>
                    <p>Automated system captures every booking opportunity</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bxs-check-circle'></i>
                  <div>
                    <h4>Save 4+ Hours Daily</h4>
                    <p>Eliminate manual work and focus on growth</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bxs-check-circle'></i>
                  <div>
                    <h4>100% Payment Tracking</h4>
                    <p>Never lose track of a single rupee</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bxs-check-circle'></i>
                  <div>
                    <h4>Zero Double Bookings</h4>
                    <p>Real-time sync prevents conflicts</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="benefits-stats" variants={fadeInUp}>
              <div className="stat-card">
                <i className='bx bxs-trending-up'></i>
                <h3>250%</h3>
                <p>Average Revenue Increase</p>
              </div>
              <div className="stat-card">
                <i className='bx bxs-time'></i>
                <h3>4.5 hrs</h3>
                <p>Time Saved Daily</p>
              </div>
              <div className="stat-card">
                <i className='bx bxs-happy'></i>
                <h3>95%</h3>
                <p>Customer Satisfaction</p>
              </div>
              <div className="stat-card">
                <i className='bx bxs-star'></i>
                <h3>4.8/5</h3>
                <p>App Rating</p>
              </div>
            </motion.div>
          </motion.div>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Transform Your <span className="gradient-text">Turf Business?</span></h2>
            <p>Join the digital revolution and take your turf management to the next level</p>
            
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                <i className='bx bxl-play-store'></i>
                <div>
                  <small>Download on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href="#" className="btn-secondary btn-large">
                <i className='bx bx-phone'></i>
                <div>
                  <small>Contact Us</small>
                  <strong>Get Demo</strong>
                </div>
              </a>
            </div>

            <div className="cta-info">
              <div className="info-item">
                <i className='bx bxs-phone'></i>
                <span>+91 98765 43210</span>
              </div>
              <div className="info-item">
                <i className='bx bxs-envelope'></i>
                <span>support@playltp.in</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-brand">
              <div className="logo">
                <i className='bx bxs-cricket-ball'></i>
                <span>Let's Turf Play</span>
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
                <a href="#features">Features</a>
                <a href="#how-it-works">How It Works</a>
                <a href="#">Pricing</a>
                <a href="#">FAQ</a>
              </div>

              <div className="footer-column">
                <h4>Company</h4>
                <a href="#">About Us</a>
                <a href="#">Careers</a>
                <a href="#">Blog</a>
                <a href="#">Contact</a>
              </div>

              <div className="footer-column">
                <h4>Support</h4>
                <a href="#">Help Center</a>
                <a href="#">Terms of Service</a>
                <a href="#">Privacy Policy</a>
                <a href="#">Status</a>
              </div>
            </div>
          </div>

          <div className="footer-bottom">
            <p>&copy; 2024 Let's Turf Play. All rights reserved.</p>
            <p>Made with <i className='bx bxs-heart'></i> in India</p>
          </div>
        </div>
      </footer>
    </div>
  )
}

export default App
