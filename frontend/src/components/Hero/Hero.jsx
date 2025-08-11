import React from 'react'
import './Hero.css'
import hand_icon from '../Assets/hand_icon.png'
import hero_image from '../Assets/heromg.png' // Placeholder for hero image

const Hero = () => {
  const scrollToNewCollections = () => {
    const newCollectionsSection = document.getElementById('new-collections');
    if (newCollectionsSection) {
      newCollectionsSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className='hero'>
        <div className="hero-left">
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <div className="hero-hand-icon">
                    <p>new</p>
                    <img src={hand_icon} alt="hand icon" />
                </div>
                <p>collections</p>
                <p>for everyone</p>
            </div>
            <button className="hero-latest-btn" onClick={scrollToNewCollections}>
                <div>Latest Collection</div>
                <span>→</span>
            </button>
        </div>
        <div className="hero-right">
            {/* Placeholder for hero image - replace with actual image */}
            <img src={hero_image} alt="Hero" />
        </div>
    </div>
  )
}

export default Hero
