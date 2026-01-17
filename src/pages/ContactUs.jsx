import { motion } from 'framer-motion'
import './Page.css'

function ContactUs() {
  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Contact <span className="gradient-text">Us</span></h1>
            <p>We're here to help. Reach out anytime!</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="contact-grid">
          <div className="contact-info">
            <h2>Get in Touch</h2>
            <p>Have questions? We'd love to hear from you. Contact us through any of the methods below.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxs-phone'></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 7020527719</p>
                  <p>Mon-Sat, 9 AM - 9 PM IST</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxs-envelope'></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>letsturfplay@gmail.com</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxl-whatsapp'></i>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+91 7020527719</p>
                  <p>Quick support</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs