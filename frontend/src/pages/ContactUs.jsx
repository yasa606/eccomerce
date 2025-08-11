import React, { useState } from 'react'
import './CSS/ContactUs-luxury.css'

const ContactUs = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  })

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    })
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    // Handle form submission
    console.log('Form submitted:', formData)
    alert('Thank you for your message. We will get back to you soon!')
  }

  return (
    <div className="luxury-page-container">
      <div className="luxury-page-wrapper">
        <div className="luxury-page-header">
          <h1>Contact Us</h1>
          <p>Get in touch with our luxury concierge team</p>
        </div>

        <div className="luxury-contact-grid">
          <div className="luxury-contact-info">
            <div className="luxury-contact-card">
              <h2>Get In Touch</h2>
              <p>
                Our dedicated luxury concierge team is available to assist you with any inquiries, 
                styling advice, or personalized recommendations.
              </p>
              
              <div className="luxury-contact-methods">
                <div className="luxury-contact-method">
                  <h3>Phone</h3>
                  <p>+1 (555) 123-LUXE</p>
                  <p>Mon-Fri: 9AM-6PM EST</p>
                </div>
                
                <div className="luxury-contact-method">
                  <h3>Email</h3>
                  <p>concierge@luxury.com</p>
                  <p>Response within 24 hours</p>
                </div>
                
                <div className="luxury-contact-method">
                  <h3>Live Chat</h3>
                  <p>Available 24/7</p>
                  <p>Instant support</p>
                </div>
                
                <div className="luxury-contact-method">
                  <h3>Address</h3>
                  <p>123 Luxury Avenue</p>
                  <p>New York, NY 10001</p>
                </div>
              </div>
            </div>
          </div>

          <div className="luxury-contact-form">
            <div className="luxury-form-card">
              <h2>Send Us a Message</h2>
              <form onSubmit={handleSubmit}>
                <div className="luxury-form-group">
                  <label htmlFor="name">Full Name</label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    placeholder="Enter your full name"
                  />
                </div>

                <div className="luxury-form-group">
                  <label htmlFor="email">Email Address</label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    placeholder="Enter your email address"
                  />
                </div>

                <div className="luxury-form-group">
                  <label htmlFor="subject">Subject</label>
                  <select
                    id="subject"
                    name="subject"
                    value={formData.subject}
                    onChange={handleChange}
                    required
                  >
                    <option value="">Select a subject</option>
                    <option value="general">General Inquiry</option>
                    <option value="order">Order Support</option>
                    <option value="returns">Returns & Exchanges</option>
                    <option value="styling">Styling Advice</option>
                    <option value="partnership">Partnership</option>
                    <option value="other">Other</option>
                  </select>
                </div>

                <div className="luxury-form-group">
                  <label htmlFor="message">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows="6"
                    placeholder="Tell us how we can help you..."
                  />
                </div>

                <button type="submit" className="luxury-submit-btn">
                  Send Message
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ContactUs
