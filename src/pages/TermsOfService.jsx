import { motion } from 'framer-motion'
import './LegalPage.css'

function TermsOfService() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Terms of Service</h1>
            <p>Last updated: January 2024</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section>
            <h2>1. Acceptance of Terms</h2>
            <p>By accessing and using Let's Turf Play ("LTP"), you agree to be bound by these Terms of Service. If you disagree with any part, you may not use our services.</p>
          </section>

          <section>
            <h2>2. Service Description</h2>
            <p>LTP provides a platform connecting turf owners with players for booking sports facilities. We facilitate:</p>
            <ul>
              <li>Online booking management</li>
              <li>Payment processing</li>
              <li>Real-time availability updates</li>
              <li>Analytics and reporting</li>
            </ul>
          </section>

          <section>
            <h2>3. User Accounts</h2>
            <h3>Registration</h3>
            <ul>
              <li>You must provide accurate information</li>
              <li>You are responsible for account security</li>
              <li>One account per turf owner</li>
              <li>Must be 18+ years old</li>
            </ul>

            <h3>Account Termination</h3>
            <p>We may suspend or terminate accounts for violations of these terms.</p>
          </section>

          <section>
            <h2>4. Turf Owner Responsibilities</h2>
            <ul>
              <li>Provide accurate turf information</li>
              <li>Maintain turf quality and safety</li>
              <li>Honor confirmed bookings</li>
              <li>Respond to player inquiries promptly</li>
              <li>Comply with local laws and regulations</li>
            </ul>
          </section>

          <section>
            <h2>5. Payments and Fees</h2>
            <h3>Commission</h3>
            <p>LTP charges a commission on each booking (default 10%, customizable per owner).</p>

            <h3>Payouts</h3>
            <ul>
              <li>Processed weekly or monthly</li>
              <li>Transferred to registered bank account</li>
              <li>Subject to verification and compliance</li>
            </ul>

            <h3>Refunds</h3>
            <p>Cancellation and refund policies apply as per booking terms.</p>
          </section>

          <section>
            <h2>6. Cancellations</h2>
            <ul>
              <li>Players can cancel as per cancellation policy</li>
              <li>Owners must honor bookings or face penalties</li>
              <li>Force majeure exceptions apply</li>
            </ul>
          </section>

          <section>
            <h2>7. Prohibited Activities</h2>
            <ul>
              <li>Fraudulent bookings or payments</li>
              <li>Misrepresentation of turf facilities</li>
              <li>Harassment or abusive behavior</li>
              <li>Circumventing the platform for direct bookings</li>
              <li>Unauthorized use of intellectual property</li>
            </ul>
          </section>

          <section>
            <h2>8. Liability Limitations</h2>
            <p>LTP is not liable for:</p>
            <ul>
              <li>Injuries or accidents at turf facilities</li>
              <li>Disputes between owners and players</li>
              <li>Service interruptions or technical issues</li>
              <li>Loss of revenue or business</li>
            </ul>
          </section>

          <section>
            <h2>9. Intellectual Property</h2>
            <p>All content, trademarks, and intellectual property belong to LTP. You may not use without permission.</p>
          </section>

          <section>
            <h2>10. Changes to Terms</h2>
            <p>We may modify these terms at any time. Continued use constitutes acceptance of changes.</p>
          </section>

          <section>
            <h2>11. Governing Law</h2>
            <p>These terms are governed by the laws of India. Disputes will be resolved in Bangalore courts.</p>
          </section>

          <section>
            <h2>12. Contact</h2>
            <p>Email: legal@playltp.in</p>
            <p>Phone: +91 98765 43210</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default TermsOfService
