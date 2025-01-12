import React, { useState, useEffect } from 'react';
import './HeroSection.css';
import hero_image_1 from '../../assets/hero_image_1.png';
import hero_image_2 from '../../assets/hero_image_2.png';
import hero_image_3 from '../../assets/hero_image_3.png';
import hero_image_4 from '../../assets/hero_image_4.png';
import hero_image_5 from '../../assets/hero_image_5.png';

const HeroSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Array of image URLs
  const images = [
    hero_image_1,
    hero_image_2,
    hero_image_3,
    hero_image_4,
    hero_image_5,
  ];

  const totalImages = images.length;

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + totalImages) % totalImages);
  };

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
    }, 5000); // Change image every 3 seconds

    return () => clearInterval(interval); // Cleanup interval on component unmount
  }, [totalImages]);

  return (
    <div className="hero-section">
      <div className="hero-carousel">
        {images.map((image, index) => {
          const rotation = (360 / totalImages) * index; // Rotate each image equally around the Y-axis
          const offset = (360 / totalImages) * currentIndex; // Offset rotation for the active image

          return (
            <div
              key={index}
              className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
              style={{
                transform: `rotateY(${rotation - offset}deg) translateZ(600px)`,
              }}
            >
              <img src={image} alt={`Slide ${index + 1}`} />
            </div>
          );
        })}
      </div>
      <div className="hero-carousel-controls">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
};

export default HeroSection;
