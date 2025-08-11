import React from 'react'
import { Link } from 'react-router-dom'
import './Footer.css'
import logo from '../Assets/logo.png'
import inastgram_icon from '../Assets/instagram.png'
import facebook_icon from '../Assets/facebook.png'
import youtube_icon from '../Assets/youtube.png'
import pinterest_icon from '../Assets/pinterest.png'
import tiktok_icon from '../Assets/tiktok.png'


const Footer = () => {
  return (
    <div className='footer'>
        <div className="footer-logo">
            <img src={logo} alt="Logo" />
            <p>ALITRONIX</p>
        </div>
        <ul className="footer-links">
            <li><Link to="/about">About Us</Link></li>
            <li><Link to="/contact">Contact Us</Link></li>
            <li><Link to="/privacy">Privacy Policy</Link></li>
            <li><Link to="/terms">Terms of Service</Link></li>
            <li><Link to="/faq">FAQ</Link></li>
        </ul>
        <div className="footer-social-icon">
            <a href="https://www.instagram.com/editr.onix" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
              <img src={inastgram_icon} alt="Instagram" />
            </a>
            <a href="https://www.facebook.com/share/1SxjyuXg4m/?mibextid=wwXIfr" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
              <img src={facebook_icon} alt="Facebook" />
            </a>
            <a href="https://www.tiktok.com/@yasser20036" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
              <img src={tiktok_icon} alt="TikTok" />
            </a>
            <a href="https://youtube.com/@editronix123?si=rD1CYBRGkpF2eSpc" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
              <img src={youtube_icon} alt="YouTube" />
            </a>
            <a href="https://pin.it/2QuSQzyGm" target="_blank" rel="noopener noreferrer" className="footer-icons-container">
              <img src={pinterest_icon} alt="Pinterest" />
            </a>
        </div>
        <div className="footer-copyright">
              <hr />
              <p>© 2025 Alitronix. All rights reserved.</p>
            </div>
    </div>
  )
}

export default Footer
