import { motion } from 'framer-motion'
import { useState } from 'react'
import './Page.css'

function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  const faqs = [
    {
      category: "Getting Started",
      questions: [
        {
          q: "How do I register as a turf owner?",
          a: "Download the LTP Turf Owner app from Google Play Store, complete your profile, add your turf details, and submit for verification. Approval typically takes 24-48 hours."
        },
        {
          q: "Is there any registration fee?",
          a: "No, registration is completely free. We only charge a small commission on successful bookings."
        },
        {
          q: "What documents do I need?",
          a: "You'll need business registration proof, PAN card, bank account details, and turf ownership/lease documents."
        }
      ]
    },
    {
      category: "Pricing & Payments",
      questions: [
        {
          q: "What is the commission rate?",
          a: "Default commission is 10% per booking, but this can be customized based on your subscription plan and booking volume."
        },
        {
          q: "When do I receive payments?",
          a: "Payouts are processed weekly or monthly based on your preference. Funds are transferred directly to your registered bank account."
        },
        {
          q: "Are there any hidden charges?",
          a: "No hidden charges. Only the agreed commission percentage is deducted from each booking."
        },
        {
          q: "Can I accept cash payments?",
          a: "Yes, you can create offline bookings for cash payments. These are also tracked in the system."
        }
      ]
    },
    {
      category: "Bookings & Management",
      questions: [
        {
          q: "How do bookings work?",
          a: "Players book slots through the app. You receive instant notifications and can manage all bookings from your dashboard."
        },
        {
          q: "Can I block certain time slots?",
          a: "Yes, you have full control to block slots for maintenance, events, or personal use."
        },
        {
          q: "What if I need to cancel a booking?",
          a: "You can cancel bookings, but frequent cancellations may affect your rating. Players receive full refunds for owner cancellations."
        },
        {
          q: "Can I set different prices for different times?",
          a: "Yes, dynamic pricing allows you to set different rates for peak hours, weekends, and special occasions."
        }
      ]
    },
    {
      category: "Technical Support",
      questions: [
        {
          q: "What if the app doesn't work?",
          a: "Contact our 24/7 support team via phone, email, or in-app chat. We'll resolve issues immediately."
        },
        {
          q: "Do I need internet connection?",
          a: "Yes, internet is required for real-time updates. However, you can view cached data offline."
        },
        {
          q: "Is my data secure?",
          a: "Absolutely. We use bank-level encryption and comply with all data protection regulations."
        },
        {
          q: "Can I use it on multiple devices?",
          a: "Yes, you can log in from multiple devices with the same account."
        }
      ]
    },
    {
      category: "Features",
      questions: [
        {
          q: "Can I see booking analytics?",
          a: "Yes, comprehensive analytics show revenue trends, peak hours, customer behavior, and more."
        },
        {
          q: "Do you provide customer support?",
          a: "Yes, dedicated support for both turf owners and players via phone, email, and chat."
        },
        {
          q: "Can I offer discounts or coupons?",
          a: "Yes, you can create promotional offers and discount codes to attract more bookings."
        },
        {
          q: "Is there a subscription fee?",
          a: "Basic features are free. Premium features are available with subscription plans."
        }
      ]
    }
  ]

  return (
    <div className="page">
      <div className="page-hero">
        <div className="container">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1>Frequently Asked <span className="gradient-text">Questions</span></h1>
            <p>Everything you need to know about LTP</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="faq-content">
          {faqs.map((category, catIndex) => (
            <div key={catIndex} className="faq-category">
              <h2>{category.category}</h2>
              <div className="faq-list">
                {category.questions.map((faq, qIndex) => {
                  const index = `${catIndex}-${qIndex}`
                  const isOpen = openIndex === index
                  
                  return (
                    <div key={qIndex} className={`faq-item ${isOpen ? 'open' : ''}`}>
                      <div 
                        className="faq-question"
                        onClick={() => setOpenIndex(isOpen ? null : index)}
                      >
                        <h3>{faq.q}</h3>
                        <i className={`bx ${isOpen ? 'bx-minus' : 'bx-plus'}`}></i>
                      </div>
                      {isOpen && (
                        <motion.div
                          className="faq-answer"
                          initial={{ height: 0, opacity: 0 }}
                          animate={{ height: 'auto', opacity: 1 }}
                          exit={{ height: 0, opacity: 0 }}
                        >
                          <p>{faq.a}</p>
                        </motion.div>
                      )}
                    </div>
                  )
                })}
              </div>
            </div>
          ))}
        </div>

        <div className="faq-cta">
          <h2>Still have questions?</h2>
          <p>Can't find the answer you're looking for? Our support team is here to help.</p>
          <a href="/contact" className="btn-primary">Contact Support</a>
        </div>
      </div>
    </div>
  )
}

export default FAQ
