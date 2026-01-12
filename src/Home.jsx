import { motion } from 'framer-motion'

function Home() {
  const fadeInUp = {
    hidden: { opacity: 0, y: 60 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } }
  }

  const staggerContainer = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.2 } }
  }

  return (
    <>
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-video-bg">
          <video autoPlay loop muted playsInline>
            <source src="https://cdn.pixabay.com/video/2022/05/31/119043-716339820_large.mp4" type="video/mp4" />
          </video>
        </div>
        <div className="hero-bg"></div>
        <div className="container">
          <motion.div 
            className="hero-content"
            initial="hidden"
            animate="visible"
            variants={staggerContainer}
          >
            <motion.div className="hero-badge" variants={fadeInUp}>
              <i className='bx bx-gift'></i>
              <span>100% Free - No Hidden Charges</span>
            </motion.div>
            
            <motion.h1 variants={fadeInUp}>
              Digitize Your Turf Business
              <span className="gradient-text"> Completely Free</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Stop wasting hours on manual registers and phone calls. Transform your turf management 
              from paper to digital - at zero cost.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <a href="#how-it-works" className="btn-primary btn-large">
                <span>See How It Works</span>
                <i className='bx bx-right-arrow-alt'></i>
              </a>
              <a href="#contact" className="btn-secondary btn-large">
                <i className='bx bxl-play-store'></i>
                <span>Download Free App</span>
              </a>
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
            <h2>How Turf Owners <span className="gradient-text">Work Today</span></h2>
            <p>Manual processes that consume your entire day and limit growth</p>
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
                <i className='bx bx-book-open'></i>
              </div>
              <h3>Manual Register Entry</h3>
              <p>Writing every booking in physical register, maintaining multiple notebooks, searching through pages to check availability.</p>
              <div className="problem-impact">
                <i className='bx bx-time'></i>
                <span>2-3 Hours Daily</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bx-phone-call'></i>
              </div>
              <h3>Endless Phone Calls</h3>
              <p>Answering 50+ calls daily for availability checks, taking bookings over phone, confirming via WhatsApp messages.</p>
              <div className="problem-impact">
                <i className='bx bx-time'></i>
                <span>3-4 Hours Daily</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bx-rupee'></i>
              </div>
              <h3>Cash & Payment Tracking</h3>
              <p>Recording cash payments in ledger, tracking pending dues, following up manually, reconciling at month-end.</p>
              <div className="problem-impact">
                <i className='bx bx-time'></i>
                <span>1-2 Hours Daily</span>
              </div>
            </motion.div>

            <motion.div className="problem-card" variants={fadeInUp}>
              <div className="problem-icon">
                <i className='bx bx-calculator'></i>
              </div>
              <h3>Manual Calculations</h3>
              <p>Counting cash daily, calculating revenue in Excel, preparing reports, no real-time visibility of business performance.</p>
              <div className="problem-impact">
                <i className='bx bx-time'></i>
                <span>1-2 Hours Daily</span>
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
            <span className="section-badge">Free Digital Solution</span>
            <h2>Go Digital with <span className="gradient-text">LTP Turf Owner App</span></h2>
            <p>Replace your register, calculator, and phone calls with one free mobile app</p>
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
                  <i className='bx bx-mobile-alt'></i>
                  <span>Digital Register</span>
                </div>
                <div className="floating-card card-2">
                  <i className='bx bx-check-circle'></i>
                  <span>Auto Booking</span>
                </div>
                <div className="floating-card card-3">
                  <i className='bx bx-line-chart'></i>
                  <span>Live Reports</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="solution-text" variants={fadeInUp}>
              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-book-bookmark'></i>
                </div>
                <div>
                  <h3>Digital Register</h3>
                  <p>Replace your physical register with a digital one. All bookings automatically recorded, searchable, and always accessible on your phone.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-phone-off'></i>
                </div>
                <div>
                  <h3>No More Phone Calls</h3>
                  <p>Players book directly through the app. You just receive notifications. No need to answer calls or send WhatsApp messages.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-wallet-alt'></i>
                </div>
                <div>
                  <h3>Automatic Payment Records</h3>
                  <p>Every payment (cash or online) automatically recorded. No manual ledger entries. View all transactions anytime.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-bar-chart-alt'></i>
                </div>
                <div>
                  <h3>Instant Reports</h3>
                  <p>See today's bookings, revenue, and performance instantly. No Excel, no calculations. Everything auto-updated in real-time.</p>
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
            <span className="section-badge">Free Features</span>
            <h2>Everything You Need <span className="gradient-text">Absolutely Free</span></h2>
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
                <i className='bx bx-book-content'></i>
              </div>
              <h3>Digital Booking Register</h3>
              <p>Replace physical register with digital one. All bookings auto-saved, searchable, never lost</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-bell'></i>
              </div>
              <h3>Instant Notifications</h3>
              <p>Get alerts for new bookings, cancellations. No need to constantly check register</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-receipt'></i>
              </div>
              <h3>Payment Tracking</h3>
              <p>Record cash and online payments. View all transactions in one place, no ledger needed</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-user-circle'></i>
              </div>
              <h3>Customer Database</h3>
              <p>Automatically save customer details. No need to ask for phone numbers repeatedly</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-calendar-x'></i>
              </div>
              <h3>Easy Cancellations</h3>
              <p>Handle cancellations with one tap. Slot automatically becomes available again</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-line-chart'></i>
              </div>
              <h3>Daily Reports</h3>
              <p>See today's bookings and revenue instantly. No Excel, no manual calculations</p>
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
            <span className="section-badge">Manual vs Automated</span>
            <h2>See How <span className="gradient-text">App Replaces Manual Work</span></h2>
            <p>Every manual task automated with a single tap</p>
          </motion.div>

          <motion.div 
            className="comparison-grid"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={staggerContainer}
          >
            <motion.div className="comparison-card" variants={fadeInUp}>
              <div className="comparison-header manual">
                <i className='bx bx-x-circle'></i>
                <h3>Manual Way</h3>
              </div>
              <div className="comparison-content">
                <div className="comparison-item">
                  <i className='bx bx-phone'></i>
                  <div>
                    <h4>Taking Bookings</h4>
                    <p>Answer 50+ calls daily, note details in register, check availability manually, confirm via WhatsApp</p>
                    <span className="time-badge">2-3 hours/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-book'></i>
                  <div>
                    <h4>Managing Slots</h4>
                    <p>Maintain physical register, cross-check for conflicts, update availability on WhatsApp status</p>
                    <span className="time-badge">1-2 hours/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-money'></i>
                  <div>
                    <h4>Payment Tracking</h4>
                    <p>Record cash in ledger, track pending payments, follow up manually, reconcile at month-end</p>
                    <span className="time-badge">1-2 hours/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-calculator'></i>
                  <div>
                    <h4>Revenue Reports</h4>
                    <p>Count cash, tally register entries, calculate totals in Excel, prepare monthly reports</p>
                    <span className="time-badge">3-4 hours/month</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-message'></i>
                  <div>
                    <h4>Customer Communication</h4>
                    <p>Send individual WhatsApp messages for confirmations, reminders, and cancellations</p>
                    <span className="time-badge">1 hour/day</span>
                  </div>
                </div>
              </div>
              <div className="comparison-footer">
                <div className="total-time">
                  <i className='bx bx-time'></i>
                  <span>Total: 5-8 hours daily</span>
                </div>
              </div>
            </motion.div>

            <motion.div className="comparison-card" variants={fadeInUp}>
              <div className="comparison-header automated">
                <i className='bx bx-check-circle'></i>
                <h3>With LTP App</h3>
              </div>
              <div className="comparison-content">
                <div className="comparison-item">
                  <i className='bx bx-mobile'></i>
                  <div>
                    <h4>Taking Bookings</h4>
                    <p>Players book directly in app, instant confirmation, automatic slot blocking, zero phone calls</p>
                    <span className="time-badge automated">0 minutes</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-calendar-check'></i>
                  <div>
                    <h4>Managing Slots</h4>
                    <p>Real-time availability updates, automatic conflict prevention, one-tap slot blocking</p>
                    <span className="time-badge automated">5 minutes/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-wallet'></i>
                  <div>
                    <h4>Payment Tracking</h4>
                    <p>Auto-recorded transactions, instant payment status, automated reminders, digital receipts</p>
                    <span className="time-badge automated">0 minutes</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-bar-chart-alt-2'></i>
                  <div>
                    <h4>Revenue Reports</h4>
                    <p>Live dashboard with daily/weekly/monthly reports, automatic calculations, export to Excel</p>
                    <span className="time-badge automated">1 minute</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-bell'></i>
                  <div>
                    <h4>Customer Communication</h4>
                    <p>Automated WhatsApp/SMS for confirmations, reminders, cancellations, and updates</p>
                    <span className="time-badge automated">0 minutes</span>
                  </div>
                </div>
              </div>
              <div className="comparison-footer">
                <div className="total-time automated">
                  <i className='bx bx-zap'></i>
                  <span>Total: 10-15 minutes daily</span>
                </div>
              </div>
            </motion.div>
          </motion.div>

          <motion.div 
            className="automation-benefits"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h3>What You Get Back</h3>
            <div className="benefits-row">
              <div className="benefit-box">
                <i className='bx bxs-time-five'></i>
                <h4>4-8 Hours Daily</h4>
                <p>Time saved for business growth</p>
              </div>
              <div className="benefit-box">
                <i className='bx bxs-error-alt'></i>
                <h4>Zero Errors</h4>
                <p>No double bookings or conflicts</p>
              </div>
              <div className="benefit-box">
                <i className='bx bxs-dollar-circle'></i>
                <h4>30% More Revenue</h4>
                <p>Capture every booking opportunity</p>
              </div>
              <div className="benefit-box">
                <i className='bx bxs-happy-heart-eyes'></i>
                <h4>Better Experience</h4>
                <p>Happy customers, repeat bookings</p>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Simple Steps Section */}
      <section className="steps-section">
        <div className="container">
          <motion.div 
            className="section-header"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <span className="section-badge">Get Started</span>
            <h2>Start in <span className="gradient-text">3 Simple Steps</span></h2>
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
              <h2>Save Time, Grow <span className="gradient-text">Your Business</span></h2>
              <p>Join hundreds of turf owners who went digital for free</p>

              <div className="benefits-list">
                <div className="benefit-item">
                  <i className='bx bx-time-five'></i>
                  <div>
                    <h4>Save 6-8 Hours Daily</h4>
                    <p>No more manual register entries and phone calls</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-error-alt'></i>
                  <div>
                    <h4>Zero Double Bookings</h4>
                    <p>Real-time updates prevent conflicts automatically</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-mobile-alt'></i>
                  <div>
                    <h4>Manage from Anywhere</h4>
                    <p>Check bookings and revenue from your phone</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-dollar-circle'></i>
                  <div>
                    <h4>100% Free Forever</h4>
                    <p>No subscription, no hidden charges, completely free</p>
                  </div>
                </div>
              </div>
            </motion.div>

            <motion.div className="benefits-stats" variants={fadeInUp}>
              <div className="stat-card">
                <i className='bx bx-time'></i>
                <h3>6-8 hrs</h3>
                <p>Time Saved Daily</p>
              </div>
              <div className="stat-card">
                <i className='bx bx-error-alt'></i>
                <h3>0</h3>
                <p>Double Bookings</p>
              </div>
              <div className="stat-card">
                <i className='bx bx-happy'></i>
                <h3>100%</h3>
                <p>Free Forever</p>
              </div>
              <div className="stat-card">
                <i className='bx bx-star'></i>
                <h3>4.8/5</h3>
                <p>User Rating</p>
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
            <h2>Ready to Go <span className="gradient-text">Digital for Free?</span></h2>
            <p>Stop wasting time on manual work. Download the free app and digitize your turf today</p>
            
            <div className="cta-buttons">
              <a href="#" className="btn-primary btn-large">
                <i className='bx bxl-play-store'></i>
                <div>
                  <small>Download Free on</small>
                  <strong>Google Play</strong>
                </div>
              </a>
              <a href="/contact" className="btn-secondary btn-large">
                <i className='bx bx-phone'></i>
                <div>
                  <small>Need Help?</small>
                  <strong>Contact Us</strong>
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
    </>
  )
}

export default Home
