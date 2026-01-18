import { motion } from 'framer-motion'
import { useState } from 'react'
import { APP_CONFIG } from '../constants/config'
import './Page.css'

// Success Modal Component
const SuccessModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content success-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-icon">
          <i className='bx bx-check-circle'></i>
        </div>
        <h3>Application Submitted!</h3>
        <p>{message}</p>
        <button className="btn-primary" onClick={onClose}>
          Continue
        </button>
      </motion.div>
    </div>
  )
}

// Error Modal Component
const ErrorModal = ({ isOpen, onClose, message }) => {
  if (!isOpen) return null
  
  return (
    <div className="modal-overlay" onClick={onClose}>
      <motion.div 
        className="modal-content error-modal"
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1, opacity: 1 }}
        onClick={(e) => e.stopPropagation()}
      >
        <div className="modal-icon">
          <i className='bx bx-error-circle'></i>
        </div>
        <h3>Submission Failed</h3>
        <p>{message}</p>
        <button className="btn-primary" onClick={onClose}>
          Try Again
        </button>
      </motion.div>
    </div>
  )
}

function ApplyOwner() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    address: ''
  })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [showSuccessModal, setShowSuccessModal] = useState(false)
  const [showErrorModal, setShowErrorModal] = useState(false)
  const [modalMessage, setModalMessage] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setIsSubmitting(true)
    
    try {
      const response = await fetch('https://api.playltp.in/api/v1/public/owner-applications', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          full_name: formData.fullName,
          email: formData.email,
          phone: formData.phone,
          address: formData.address
        })
      })
      
      const data = await response.json()
      
      if (response.ok) {
        setModalMessage(data.message || 'Your application has been submitted successfully! We will review it and contact you within 24 hours.')
        setShowSuccessModal(true)
        setFormData({ fullName: '', email: '', phone: '', address: '' })
      } else {
        setModalMessage(data.message || 'Something went wrong. Please try again.')
        setShowErrorModal(true)
      }
    } catch (error) {
      setModalMessage('Network error. Please check your connection and try again.')
      setShowErrorModal(true)
    } finally {
      setIsSubmitting(false)
    }
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
            <h1>Apply for <span className="gradient-text">LTP Owner App</span></h1>
            <p>Join hundreds of turf owners who have digitized their business</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="apply-content">
          <motion.div 
            className="apply-info"
            initial={{ opacity: 0, x: -30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
          >
            <h2>Why Apply?</h2>
            <div className="benefits-list">
              <div className="benefit-item">
                <i className='bx bx-check-circle'></i>
                <span>Free app access for life</span>
              </div>
              <div className="benefit-item">
                <i className='bx bx-check-circle'></i>
                <span>Digital booking management</span>
              </div>
              <div className="benefit-item">
                <i className='bx bx-check-circle'></i>
                <span>Automatic revenue calculation</span>
              </div>
              <div className="benefit-item">
                <i className='bx bx-check-circle'></i>
                <span>24/7 customer support</span>
              </div>
            </div>

            <div className="contact-info">
              <h3>Need Help?</h3>
              <p>Call us at <strong>{APP_CONFIG.CONTACT.PHONE}</strong></p>
              <p>Email: <strong>{APP_CONFIG.CONTACT.EMAIL}</strong></p>
            </div>
          </motion.div>

          <motion.div 
            className="apply-form-container"
            initial={{ opacity: 0, x: 30 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <form className="apply-form" onSubmit={handleSubmit}>
              <h2>Application Form</h2>
              <p>Fill out the form below to get started with LTP Owner App</p>
              
              <div className="form-group">
                <label>Full Name of Owner *</label>
                <input
                  type="text"
                  name="fullName"
                  value={formData.fullName}
                  onChange={handleChange}
                  required
                  placeholder="Enter your full name"
                />
              </div>

              <div className="form-group">
                <label>Email Address *</label>
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
                <label>Phone Number *</label>
                <input
                  type="tel"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  required
                  placeholder="+91 98765 43210"
                  maxLength="10"
                />
              </div>

              <div className="form-group">
                <label>Turf Address *</label>
                <textarea
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                  rows="4"
                  placeholder="Enter complete address of your turf including city, state, pincode"
                ></textarea>
              </div>

              <button 
                type="submit" 
                className="btn-primary btn-large"
                disabled={isSubmitting}
              >
                {isSubmitting ? (
                  <>
                    <i className='bx bx-loader-alt bx-spin'></i>
                    <span>Submitting...</span>
                  </>
                ) : (
                  <>
                    <span>Submit Application</span>
                    <i className='bx bx-send'></i>
                  </>
                )}
              </button>

              <p className="form-note">
                * All fields are required. We'll review your application and contact you within 24 hours.
              </p>
            </form>
          </motion.div>
        </div>
      </div>
      
      <SuccessModal 
        isOpen={showSuccessModal} 
        onClose={() => setShowSuccessModal(false)}
        message={modalMessage}
      />
      
      <ErrorModal 
        isOpen={showErrorModal} 
        onClose={() => setShowErrorModal(false)}
        message={modalMessage}
      />
    </div>
  )
}

export default ApplyOwner