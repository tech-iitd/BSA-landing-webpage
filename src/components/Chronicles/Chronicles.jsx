import React, { useState, useEffect } from 'react';
import './Chronicles.css';
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import img9 from '../../assets/gallery/img9.jpg';

const Chronicles = () => {
  const slides = [
    {
      image: img1,
      title: 'Annual Sports Meet 2024',
      description: 'Our biggest sporting event of the year featuring inter-college competitions across multiple disciplines.'
    },
    {
      image: img2,
      title: 'Basketball Championship',
      description: 'Thrilling final match where our team secured victory with an outstanding performance.'
    },
    {
      image: img3,
      title: 'Cricket Tournament',
      description: 'An intense series of matches showcasing exceptional talent and sportsmanship.'
    },
    {
      image: img4,
      title: 'Athletic Excellence',
      description: 'Track and field events demonstrating speed, strength, and determination.'
    },
    {
      image: img5,
      title: 'Team Spirit',
      description: 'Celebrating unity, dedication, and the passion that drives our athletes forward.'
    },
    {
      image: img6,
      title: 'Victory Moments',
      description: 'Capturing the joy and pride of our champions as they achieve their dreams.'
    },
    {
      image: img7,
      title: 'Training Sessions',
      description: 'Behind the scenes look at the dedication and hard work that goes into excellence.'
    },
    {
      image: img8,
      title: 'Opening Ceremony',
      description: 'A grand celebration marking the beginning of another exciting sports season.'
    },
    {
      image: img9,
      title: 'Awards Night',
      description: 'Honoring outstanding achievements and recognizing the dedication of our athletes.'
    }
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isAnimating, setIsAnimating] = useState(false);

  useEffect(() => {
    if (!isAutoPlaying) return;
    
    const interval = setInterval(() => {
      goToNext();
    }, 5000);

    return () => clearInterval(interval);
  }, [isAutoPlaying, currentIndex]);

  const goToSlide = (index) => {
    if (isAnimating || index === currentIndex) return;
    setIsAnimating(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToPrevious = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? slides.length - 1 : prevIndex - 1
    );
    setIsAutoPlaying(false);
    setTimeout(() => setIsAnimating(false), 600);
  };

  const goToNext = () => {
    if (isAnimating) return;
    setIsAnimating(true);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    setTimeout(() => setIsAnimating(false), 600);
  };

  return (
    <div className="chronicles-page-container">
      {/* Hero Section */}
      <div className="chronicles-hero">
        <div className="chronicles-hero-content">
          <h1>Chronicles</h1>
          <p className="chronicles-subtitle">Capturing Moments of Excellence</p>
        </div>
      </div>

      {/* Gallery Section */}
      <div className="chronicles-content-wrapper">
        <div className="carousel-wrapper">
          <div className="carousel-track">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`carousel-slide ${index === currentIndex ? 'active' : ''}`}
              >
                <img 
                  src={slide.image} 
                  alt={slide.title}
                  className="carousel-image"
                />
                <div className="carousel-overlay"></div>
                
                {/* Caption inside image */}
                <div className="carousel-caption">
                  <h3 className="caption-title">{slide.title}</h3>
                  <p className="caption-description">{slide.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Navigation Arrows */}
          <button 
            className="carousel-btn carousel-btn-prev"
            onClick={goToPrevious}
            aria-label="Previous image"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="15 18 9 12 15 6"></polyline>
            </svg>
          </button>
          <button 
            className="carousel-btn carousel-btn-next"
            onClick={goToNext}
            aria-label="Next image"
            disabled={isAnimating}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5" strokeLinecap="round" strokeLinejoin="round">
              <polyline points="9 18 15 12 9 6"></polyline>
            </svg>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chronicles;