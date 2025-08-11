import React from 'react'
import './CSS/FAQ-luxury.css'

const FAQ = () => {
  return (
    <div className="luxury-page-container">
      <div className="luxury-page-wrapper">
        <div className="luxury-page-header">
          <h1>Frequently Asked Questions</h1>
          <p>Find answers to common questions about our luxury services</p>
        </div>

        <div className="luxury-content-section">
          <div className="luxury-content-card">
            <h2>Frequently Asked Questions</h2>
            <p>
              Find answers to common questions about our luxury services and products.
            </p>

            <div className="luxury-faq-grid">
              <div className="luxury-faq-item">
                <h3>How do I place an order?</h3>
                <p>
                  Placing an order is simple. Browse our luxury collections, add items to your cart, and proceed to checkout. 
                  You'll need to provide your shipping and payment information to complete your purchase.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>What payment methods do you accept?</h3>
                <p>
                  We accept all major credit cards, PayPal, and other secure payment methods. All transactions are encrypted and secure.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>How long does shipping take?</h3>
                <p>
                  Standard shipping takes 3-5 business days. Express shipping options are available for faster delivery.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>What is your return policy?</h3>
                <p>
                  We offer a 30-day return policy for most items. Please refer to our return policy for full details.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>How do I track my order?</h3>
                <p>
                  Once your order is shipped, you will receive a tracking number via email. You can use this to track your package.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>Do you offer international shipping?</h3>
                <p>
                  Yes, we ship internationally. Shipping costs and delivery times vary by destination.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>How can I contact customer support?</h3>
                <p>
                  You can contact our customer support team via email, phone, or live chat. We're here to help 24/7.
                </p>
              </div>

              <div className="luxury-faq-item">
                <h3>What is your privacy policy?</h3>
                <p>
                  We take your privacy seriously. Please refer to our Privacy Policy for full details on how we protect your information.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default FAQ
