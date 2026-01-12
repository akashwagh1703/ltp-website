import { motion } from 'framer-motion'
import './LegalPage.css'

function PrivacyPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Privacy Policy</h1>
            <p>Last updated: January 2024</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section>
            <h2>1. Information We Collect</h2>
            <h3>Personal Information</h3>
            <ul>
              <li>Name, email, phone number</li>
              <li>Business details (turf name, address)</li>
              <li>Payment and banking information</li>
              <li>Profile and turf images</li>
            </ul>

            <h3>Automatically Collected</h3>
            <ul>
              <li>Device information and usage data</li>
              <li>Location data (with permission)</li>
              <li>Log data and analytics</li>
            </ul>
          </section>

          <section>
            <h2>2. How We Use Information</h2>
            <ul>
              <li>Provide and maintain services</li>
              <li>Process bookings and payments</li>
              <li>Send notifications and updates</li>
              <li>Improve app experience</li>
              <li>Prevent fraud and ensure security</li>
            </ul>
          </section>

          <section>
            <h2>3. Information Sharing</h2>
            <p>We share information with:</p>
            <ul>
              <li>Players (turf details and availability)</li>
              <li>Payment processors</li>
              <li>Service providers (hosting, analytics)</li>
              <li>Legal authorities (when required)</li>
            </ul>
            <p><strong>We do not sell your data.</strong></p>
          </section>

          <section>
            <h2>4. Your Rights</h2>
            <ul>
              <li>Access your data</li>
              <li>Correct inaccurate information</li>
              <li>Request data deletion</li>
              <li>Export your data</li>
              <li>Withdraw consent</li>
            </ul>
          </section>

          <section>
            <h2>5. Contact Us</h2>
            <p>Email: privacy@playltp.in</p>
            <p>Phone: +91 98765 43210</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default PrivacyPolicy
