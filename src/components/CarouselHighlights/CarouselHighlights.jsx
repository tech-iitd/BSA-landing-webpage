import React, { useEffect, useState } from 'react';
import RecentHighlights from '../RecentHighlights/RecentHighlights';
import './CarouselHighlights.css';
const CarouselHighlights = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
      const highlights = [
        {
            date: '19-01-2025',
            won: 'jwalamukhi',
            lost: 'rest all',
            result: 'jwala won rest gone'
        },
        {
            date: '19-01-2025',
            won: 'jwalamukhi',
            lost: 'rest all',
            result: 'jwala won rest gone'
        },
        {
            date: '19-01-2025',
            won: 'jwalamukhi',
            lost: 'rest all',
            result: 'jwala won rest gone'
        },
        {
            date: '19-01-2025',
            won: 'jwalamukhi',
            lost: 'rest all',
            result: 'jwala won rest gone'
        },
      ];
    
      const totalHighlights = highlights.length;
    
      const handleNext = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % totalHighlights);
      };
    
      const handlePrev = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + totalHighlights) % totalHighlights);
      };
    
      useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalHighlights);
        }, 3000); // Change image every 3 seconds
    
        return () => clearInterval(interval); // Cleanup interval on component unmount
      }, [totalHighlights]);
  return (
    <div className='carousel-highlights'>
        <div className="carousel">
        {highlights.map((highlight, index) => {
          const rotation = (360 / totalHighlights) * index; // Rotate each image equally around the Y-axis
          const offset = (360 / totalHighlights) * currentIndex; // Offset rotation for the active image

          return (
            <div
              key={index}
              className={`carousel-item ${currentIndex === index ? 'active' : ''}`}
              style={{
                transform: `rotateX(${rotation - offset}deg) translateZ(600px)`,
              }}
            >
              <RecentHighlights date={highlight.date} won={highlight.won} lost={highlight.lost} result={highlight.result}/>
            </div>
          );
        })}
      </div>
      <div className="carousel-controls">
        <button onClick={handlePrev}>◀</button>
        <button onClick={handleNext}>▶</button>
      </div>
    </div>
  );
}

export default CarouselHighlights;
