import { motion } from 'framer-motion'
import './Page.css'

function Pricing() {
  const plans = [
    {
      name: "Free",
      price: "₹0",
      period: "forever",
      description: "Perfect for getting started",
      features: [
        "Up to 50 bookings/month",
        "Basic dashboard",
        "Online & offline bookings",
        "Payment tracking",
        "Email support",
        "10% commission"
      ],
      cta: "Get Started",
      popular: false
    },
    {
      name: "Pro",
      price: "₹999",
      period: "/month",
      description: "For growing turf businesses",
      features: [
        "Unlimited bookings",
        "Advanced analytics",
        "Dynamic pricing",
        "Customer management",
        "Priority support",
        "8% commission",
        "Custom branding",
        "Marketing tools"
      ],
      cta: "Start Free Trial",
      popular: true
    },
    {
      name: "Enterprise",
      price: "Custom",
      period: "",
      description: "For multiple turfs",
      features: [
        "Everything in Pro",
        "Multi-location management",
        "Dedicated account manager",
        "Custom integrations",
        "24/7 phone support",
        "5% commission",
        "White-label solution",
        "API access"
      ],
      cta: "Contact Sales",
      popular: false
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
            <h1>Simple, Transparent <span className="gradient-text">Pricing</span></h1>
            <p>Choose the plan that fits your business needs</p>
          </motion.div>
        </div>
      </div>

      <div className="container">
        <div className="pricing-grid">
          {plans.map((plan, index) => (
            <motion.div
              key={index}
              className={`pricing-card ${plan.popular ? 'popular' : ''}`}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
            >
              {plan.popular && <div className="popular-badge">Most Popular</div>}
              
              <h3>{plan.name}</h3>
              <div className="price">
                <span className="amount">{plan.price}</span>
                <span className="period">{plan.period}</span>
              </div>
              <p className="plan-description">{plan.description}</p>

              <ul className="features-list">
                {plan.features.map((feature, i) => (
                  <li key={i}>
                    <i className='bx bx-check'></i>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>

              <a href="#contact" className={plan.popular ? 'btn-primary btn-large' : 'btn-secondary btn-large'}>
                {plan.cta}
              </a>
            </motion.div>
          ))}
        </div>

        <div className="pricing-faq">
          <h2>Pricing FAQs</h2>
          
          <div className="faq-grid">
            <div className="faq-box">
              <i className='bx bx-help-circle'></i>
              <h3>What is commission?</h3>
              <p>Commission is a small percentage deducted from each booking. Lower plans have higher commission rates.</p>
            </div>

            <div className="faq-box">
              <i className='bx bx-help-circle'></i>
              <h3>Can I change plans?</h3>
              <p>Yes, you can upgrade or downgrade anytime. Changes take effect from next billing cycle.</p>
            </div>

            <div className="faq-box">
              <i className='bx bx-help-circle'></i>
              <h3>Is there a contract?</h3>
              <p>No long-term contracts. Pay monthly and cancel anytime without penalties.</p>
            </div>

            <div className="faq-box">
              <i className='bx bx-help-circle'></i>
              <h3>What payment methods?</h3>
              <p>We accept credit/debit cards, UPI, net banking, and digital wallets.</p>
            </div>
          </div>
        </div>

        <div className="pricing-cta">
          <h2>Not sure which plan is right for you?</h2>
          <p>Our team can help you choose the perfect plan for your business</p>
          <a href="/contact" className="btn-primary btn-large">Talk to Sales</a>
        </div>
      </div>
    </div>
  )
}

export default Pricing
