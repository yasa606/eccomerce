import React, { useState } from 'react';
import './NewsLetter-luxury-fixed.css';

const NewsLetter = () => {
  const [email, setEmail] = useState('');
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');
  const [error, setError] = useState('');

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    if (!email || !email.includes('@')) {
      setError('Please enter a valid email address');
      return;
    }

    setLoading(true);
    setError('');
    setMessage('');

    try {
      const response = await fetch('http://localhost:5000/api/newsletter/subscribe', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email }),
      });

      const data = await response.json();

      if (response.ok) {
        setMessage(data.message || 'Successfully subscribed to newsletter!');
        setEmail('');
        // Clear message after 5 seconds
        setTimeout(() => setMessage(''), 5000);
      } else {
        setError(data.error || 'Failed to subscribe. Please try again.');
      }
    } catch (err) {
      setError('Failed to connect to server. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className='news-letter'>
        <h1>Get Exclusive Offers On Your Email</h1>
        <p>Subscribe to our newsletter and stay updated with the latest luxury collections and exclusive member benefits</p>
        <form onSubmit={handleSubmit} className="newsletter-form">
          <div className="input-container">
              <input 
                  type="email" 
                  placeholder='Enter your email address' 
                  aria-label="Email address"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  required
                  disabled={loading}
              />
              <button type="submit" disabled={loading}>
                  {loading ? 'Subscribing...' : 'Subscribe'}
              </button>
          </div>
          {error && <div className="error-message" style={{color: '#ff4757', marginTop: '10px'}}>{error}</div>}
          {message && <div className="success-message" style={{color: '#2ed573', marginTop: '10px'}}>{message}</div>}
        </form>
    </div>
  )
}

export default NewsLetter;
