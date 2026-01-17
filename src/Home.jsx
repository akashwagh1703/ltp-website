import { motion } from 'framer-motion'
import { APP_CONFIG } from './constants/config'

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
              Transform Your Turf Management
              <span className="gradient-text"> From Manual to Digital</span>
            </motion.h1>
            
            <motion.p className="hero-subtitle" variants={fadeInUp}>
              Stop wasting hours on manual registers and phone calls. Get the LTP Turf Owner App 
              and manage your turf business digitally - track bookings, calculate revenue, go paperless.
            </motion.p>
            
            <motion.div className="hero-buttons" variants={fadeInUp}>
              <a href="#how-it-works" className="btn-primary btn-large">
                <span>See How It Works</span>
                <i className='bx bx-right-arrow-alt'></i>
              </a>
              <a href="#download" className="btn-secondary btn-large">
                <i className='bx bxs-download'></i>
                <span>Download Owner App</span>
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
                  <img src="/dashbord.jpeg" alt="LTP Dashboard" className="dashboard-image" />
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
            <span className="section-badge">For Turf Owners</span>
            <h2>LTP Turf Owner App <span className="gradient-text">Features</span></h2>
            <p>Everything you need to manage your turf business digitally</p>
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
                  <i className='bx bx-mobile-alt'></i>
                </div>
                <div>
                  <h3>Login & Access Your Turf</h3>
                  <p>Login to the app with your credentials and see all your registered turfs in one dashboard. Switch between multiple turfs easily.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-calendar-plus'></i>
                </div>
                <div>
                  <h3>Create Offline Bookings</h3>
                  <p>When customers visit your turf, create bookings directly in the app. No more manual register entries or phone confirmations.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-calculator'></i>
                </div>
                <div>
                  <h3>Auto Revenue Calculation</h3>
                  <p>App automatically calculates your daily, weekly, and monthly revenue. See real-time earnings without manual calculations.</p>
                </div>
              </div>

              <div className="solution-feature">
                <div className="feature-icon">
                  <i className='bx bx-book-bookmark'></i>
                </div>
                <div>
                  <h3>Digital Register</h3>
                  <p>Replace your physical register completely. All bookings stored digitally, searchable, and always accessible on your phone.</p>
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
                <i className='bx bx-log-in'></i>
              </div>
              <h3>Secure Login System</h3>
              <p>Login with your credentials and access your turf dashboard securely from anywhere</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-store'></i>
              </div>
              <h3>Your Registered Turfs</h3>
              <p>View all your registered turfs in one place, switch between multiple locations easily</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-calendar-plus'></i>
              </div>
              <h3>Offline Booking Creation</h3>
              <p>Create bookings for walk-in customers directly in the app, no manual register needed</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-rupee'></i>
              </div>
              <h3>Revenue Calculation</h3>
              <p>Automatic calculation of daily, weekly, monthly revenue with detailed breakdowns</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-receipt'></i>
              </div>
              <h3>Payment Tracking</h3>
              <p>Track cash payments, advance amounts, and pending collections digitally</p>
            </motion.div>

            <motion.div className="feature-card" variants={fadeInUp}>
              <div className="feature-icon-large">
                <i className='bx bx-line-chart'></i>
              </div>
              <h3>Business Analytics</h3>
              <p>View booking trends, peak hours, customer patterns to grow your business</p>
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
                    <h4>Taking Walk-in Bookings</h4>
                    <p>Write customer details in register, check slot availability manually, calculate amount, collect payment, update register</p>
                    <span className="time-badge">5-10 minutes per booking</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-book'></i>
                  <div>
                    <h4>Managing Daily Register</h4>
                    <p>Maintain physical register, check previous entries, cross-check for conflicts, count pages for availability</p>
                    <span className="time-badge">1-2 hours/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-money'></i>
                  <div>
                    <h4>Revenue Calculation</h4>
                    <p>Count cash manually, add up register entries, calculate daily totals, prepare monthly reports in notebook</p>
                    <span className="time-badge">1-2 hours/day</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-calculator'></i>
                  <div>
                    <h4>Business Tracking</h4>
                    <p>No real-time visibility of business performance, rely on memory and manual calculations for insights</p>
                    <span className="time-badge">No insights</span>
                  </div>
                </div>
              </div>
              <div className="comparison-footer">
                <div className="total-time">
                  <i className='bx bx-time'></i>
                  <span>Total: 3-5 hours daily</span>
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
                    <h4>Creating Offline Bookings</h4>
                    <p>Login to app, select turf, create booking with customer details, automatic slot blocking and payment tracking</p>
                    <span className="time-badge automated">1-2 minutes per booking</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-calendar-check'></i>
                  <div>
                    <h4>Digital Register Access</h4>
                    <p>All bookings stored digitally, searchable by date/customer, real-time availability, accessible from phone</p>
                    <span className="time-badge automated">Instant access</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-wallet'></i>
                  <div>
                    <h4>Auto Revenue Calculation</h4>
                    <p>App automatically calculates daily, weekly, monthly revenue, shows payment breakdowns and pending amounts</p>
                    <span className="time-badge automated">Real-time updates</span>
                  </div>
                </div>

                <div className="comparison-item">
                  <i className='bx bx-bar-chart-alt-2'></i>
                  <div>
                    <h4>Business Dashboard</h4>
                    <p>Live dashboard shows today's bookings, revenue, peak hours, customer trends - all in real-time</p>
                    <span className="time-badge automated">Always available</span>
                  </div>
                </div>
              </div>
              <div className="comparison-footer">
                <div className="total-time automated">
                  <i className='bx bx-zap'></i>
                  <span>Total: 5-10 minutes daily</span>
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
                <h4>3-5 Hours Daily</h4>
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
              <h3>Download LTP Owner App</h3>
              <p>Download the LTP Turf Owner app from our Google Drive link and install it on your Android phone</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div className="step" variants={fadeInUp}>
              <div className="step-number">02</div>
              <div className="step-icon">
                <i className='bx bxs-user-plus'></i>
              </div>
              <h3>Register & Login</h3>
              <p>Create your account, register your turf details, and login to access your personalized dashboard</p>
            </motion.div>

            <div className="step-connector"></div>

            <motion.div className="step" variants={fadeInUp}>
              <div className="step-number">03</div>
              <div className="step-icon">
                <i className='bx bxs-mobile-vibration'></i>
              </div>
              <h3>Start Managing Digitally</h3>
              <p>Create offline bookings, track revenue, manage your turf business completely through the app</p>
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
                    <h4>Save 3-5 Hours Daily</h4>
                    <p>No more manual register entries and calculations</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-mobile-alt'></i>
                  <div>
                    <h4>Manage from Your Phone</h4>
                    <p>Login and access your turf data from anywhere</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-calculator'></i>
                  <div>
                    <h4>Auto Revenue Calculation</h4>
                    <p>Real-time revenue tracking without manual math</p>
                  </div>
                </div>
                <div className="benefit-item">
                  <i className='bx bx-book-bookmark'></i>
                  <div>
                    <h4>Digital Register</h4>
                    <p>Replace physical register with digital booking system</p>
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
      <section id="download" className="cta-section">
        <div className="container">
          <motion.div 
            className="cta-content"
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeInUp}
          >
            <h2>Ready to Go <span className="gradient-text">Digital?</span></h2>
            <p>Download the LTP Turf Owner App and transform your turf management from manual to digital</p>
            
            <div className="cta-buttons">
              <a href={APP_CONFIG.DOWNLOAD_LINK} target="_blank" rel="noopener noreferrer" className="btn-primary btn-large">
                <i className='bx bxs-download'></i>
                <div>
                  <small>Download APK</small>
                  <strong>LTP Owner App</strong>
                </div>
              </a>
              <a href={`tel:${APP_CONFIG.CONTACT.PHONE}`} className="btn-secondary btn-large">
                <i className='bx bx-phone'></i>
                <div>
                  <small>Call for Support</small>
                  <strong>{APP_CONFIG.CONTACT.PHONE}</strong>
                </div>
              </a>
            </div>

            <div className="cta-info">
              <div className="info-item">
                <i className='bx bxs-phone'></i>
                <span>{APP_CONFIG.CONTACT.PHONE}</span>
              </div>
              <div className="info-item">
                <i className='bx bxs-envelope'></i>
                <span>{APP_CONFIG.CONTACT.EMAIL}</span>
              </div>
              <div className="info-item">
                <i className='bx bxs-info-circle'></i>
                <span>For Turf Owners Only</span>
              </div>
            </div>
          </motion.div>
        </div>
      </section>
    </>
  )
}

export default Home
