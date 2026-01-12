import { motion } from 'framer-motion'
import './LegalPage.css'

function RefundPolicy() {
  return (
    <div className="legal-page">
      <div className="legal-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Refund & Cancellation Policy</h1>
            <p>Last updated: January 2024</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="legal-content">
          <section>
            <h2>1. Cancellation by Players</h2>
            
            <h3>More than 24 hours before booking</h3>
            <ul>
              <li>100% refund</li>
              <li>Processed within 5-7 business days</li>
            </ul>

            <h3>12-24 hours before booking</h3>
            <ul>
              <li>50% refund</li>
              <li>50% retained as cancellation fee</li>
            </ul>

            <h3>Less than 12 hours before booking</h3>
            <ul>
              <li>No refund</li>
              <li>Full amount retained</li>
            </ul>

            <h3>No-show</h3>
            <ul>
              <li>No refund</li>
              <li>Booking marked as completed</li>
            </ul>
          </section>

          <section>
            <h2>2. Cancellation by Turf Owners</h2>
            
            <h3>Any time before booking</h3>
            <ul>
              <li>Player receives 100% refund</li>
              <li>Owner may face penalties</li>
              <li>Repeated cancellations may result in account suspension</li>
            </ul>

            <h3>Force Majeure</h3>
            <p>In case of natural disasters, government orders, or unforeseen circumstances:</p>
            <ul>
              <li>100% refund to player</li>
              <li>No penalty to owner</li>
              <li>Proof required</li>
            </ul>
          </section>

          <section>
            <h2>3. Refund Process</h2>
            
            <h3>Online Payments</h3>
            <ul>
              <li>Refunded to original payment method</li>
              <li>Processing time: 5-7 business days</li>
              <li>Bank processing may take additional 2-3 days</li>
            </ul>

            <h3>Cash/Offline Payments</h3>
            <ul>
              <li>Refunded by turf owner directly</li>
              <li>Or credited to player wallet</li>
            </ul>
          </section>

          <section>
            <h2>4. Non-Refundable Scenarios</h2>
            <ul>
              <li>Player no-show</li>
              <li>Late cancellation (less than 12 hours)</li>
              <li>Violation of turf rules</li>
              <li>Damage to property</li>
              <li>Abusive behavior</li>
            </ul>
          </section>

          <section>
            <h2>5. Partial Refunds</h2>
            <p>In case of:</p>
            <ul>
              <li>Facility issues (partial refund based on impact)</li>
              <li>Weather conditions (at owner's discretion)</li>
              <li>Service quality issues (case-by-case basis)</li>
            </ul>
          </section>

          <section>
            <h2>6. Dispute Resolution</h2>
            <p>For refund disputes:</p>
            <ul>
              <li>Contact support within 48 hours</li>
              <li>Provide booking details and evidence</li>
              <li>LTP will mediate and make final decision</li>
              <li>Decision is binding on both parties</li>
            </ul>
          </section>

          <section>
            <h2>7. Subscription Refunds</h2>
            <p>For turf owner subscriptions:</p>
            <ul>
              <li>No refund after activation</li>
              <li>Can cancel before next renewal</li>
              <li>Pro-rated refunds not available</li>
            </ul>
          </section>

          <section>
            <h2>8. Contact for Refunds</h2>
            <p>Email: refunds@playltp.in</p>
            <p>Phone: +91 98765 43210</p>
            <p>Support hours: 9 AM - 9 PM IST</p>
          </section>
        </div>
      </div>
    </div>
  )
}

export default RefundPolicy
