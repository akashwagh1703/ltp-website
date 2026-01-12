import { motion } from 'framer-motion'
import { useState } from 'react'
import './Page.css'

function ContactUs() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  })

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    alert('Thank you! We will contact you soon.')
    setFormData({ name: '', email: '', phone: '', subject: '', message: '' })
  }

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
  }

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
            <p>Have questions? We'd love to hear from you. Send us a message and we'll respond as soon as possible.</p>

            <div className="contact-methods">
              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxs-phone'></i>
                </div>
                <div>
                  <h3>Phone</h3>
                  <p>+91 98765 43210</p>
                  <p>Mon-Sat, 9 AM - 9 PM IST</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxs-envelope'></i>
                </div>
                <div>
                  <h3>Email</h3>
                  <p>support@playltp.in</p>
                  <p>We'll respond within 24 hours</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxs-map'></i>
                </div>
                <div>
                  <h3>Office</h3>
                  <p>Bangalore, Karnataka</p>
                  <p>India - 560001</p>
                </div>
              </div>

              <div className="contact-method">
                <div className="method-icon">
                  <i className='bx bxl-whatsapp'></i>
                </div>
                <div>
                  <h3>WhatsApp</h3>
                  <p>+91 98765 43210</p>
                  <p>Quick support</p>
                </div>
              </div>
            </div>

            <div className="social-section">
              <h3>Follow Us</h3>
              <div className="social-links">
                <a href="#"><i className='bx bxl-facebook'></i></a>
                <a href="#"><i className='bx bxl-instagram'></i></a>
                <a href="#"><i className='bx bxl-twitter'></i></a>
                <a href="#"><i className='bx bxl-linkedin'></i></a>
                <a href="#"><i className='bx bxl-youtube'></i></a>
              </div>
            </div>
          </div>

          <div className="contact-form-container">
            <form className="contact-form" onSubmit={handleSubmit}>
              <h2>Send us a Message</h2>
              
              <div className="form-group">
                <label>Name *</label>
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  placeholder="Your name"
                />
              </div>

              <div className="form-group">
                <label>Email *</label>
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  placeholder="your@email.com"
                />
              </div>

              <div className="form-group">
                <label>Phone *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                />
              </div>

              <div className="form-group">
                <label>Subject *</label>
                <select
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                >
                  <option value="">Select a subject</option>
                  <option value="general">General Inquiry</option>
                  <option value="owner">Turf Owner Registration</option>
                  <option value="support">Technical Support</option>
                  <option value="partnership">Partnership</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>

              <div className="form-group">
                <label>Message *</label>
                <textarea
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows="5"
                  placeholder="Tell us how we can help..."
                ></textarea>
              </div>

              <button type="submit" className="btn-primary btn-large">
                <span>Send Message</span>
                <i className='bx bx-send'></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
