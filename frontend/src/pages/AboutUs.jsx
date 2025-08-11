import React from 'react'
import './CSS/AboutUs-luxury.css'

const AboutUs = () => {
  return (
    <div className="luxury-page-container">
      <div className="luxury-page-wrapper">
        <div className="luxury-page-header">
          <h1>About Us</h1>
          <p>Discover the story behind our luxury brand</p>
        </div>

        <div className="luxury-content-section">
          <div className="luxury-content-card">
            <h2>Our Heritage</h2>
            <p>
              Founded in 2020, our luxury e-commerce platform was born from a passion for exceptional craftsmanship 
              and timeless elegance. We curate the finest collections from renowned designers and emerging talents 
              worldwide, bringing together a carefully selected range of premium products that embody sophistication 
              and quality.
            </p>
            <p>
              Our journey began with a simple vision: to create a destination where discerning customers could 
              discover extraordinary pieces that transcend trends and become cherished heirlooms. Today, we stand 
              as a testament to this vision, serving thousands of satisfied customers globally.
            </p>
          </div>

          <div className="luxury-content-card">
            <h2>Our Mission</h2>
            <p>
              We are dedicated to redefining luxury retail by combining traditional craftsmanship with modern 
              innovation. Our mission is to provide an unparalleled shopping experience that celebrates 
              individuality, quality, and timeless elegance.
            </p>
            <ul>
              <li>Curating exceptional collections from world-class designers</li>
              <li>Maintaining the highest standards of quality and authenticity</li>
              <li>Providing personalized service and expert guidance</li>
              <li>Supporting sustainable and ethical luxury practices</li>
            </ul>
          </div>

          <div className="luxury-content-card">
            <h2>Our Values</h2>
            <div className="luxury-values-grid">
              <div className="luxury-value-item">
                <h3>Excellence</h3>
                <p>We never compromise on quality, ensuring every product meets our exacting standards.</p>
              </div>
              <div className="luxury-value-item">
                <h3>Authenticity</h3>
                <p>Every item is carefully verified for authenticity and provenance.</p>
              </div>
              <div className="luxury-value-item">
                <h3>Sustainability</h3>
                <p>We champion sustainable luxury practices and ethical sourcing.</p>
              </div>
              <div className="luxury-value-item">
                <h3>Innovation</h3>
                <p>We embrace innovation while honoring traditional craftsmanship.</p>
              </div>
            </div>
          </div>

          <div className="luxury-content-card">
            <h2>Meet Our Team</h2>
            <p>
              Behind every exceptional experience is a team of dedicated professionals who share a passion for 
              luxury and customer service. Our team includes experienced curators, style consultants, and 
              customer care specialists who are committed to making your luxury shopping experience extraordinary.
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
