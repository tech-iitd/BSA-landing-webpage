import React, { useContext, useEffect, useState } from 'react';
import RecentHighlights from '../RecentHighlights/RecentHighlights';
import './CarouselHighlights.css';
import { dataContext } from '../../data/Data';
import up_arrow from '../../assets/up_arrow.svg';
import down_arrow from '../../assets/down_arrow.svg';

const CarouselHighlights = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const {highlights} = useContext(dataContext) 
  

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
    }, 6000);

    return () => clearInterval(interval);
  }, [totalHighlights]);

  const getPositionClass = (index) => {
    if (index === currentIndex) return 'current';
    if (index === (currentIndex - 1 + totalHighlights) % totalHighlights) return 'previous';
    if (index === (currentIndex + 1) % totalHighlights) return 'next';
    return 'hidden';
  };

  return (
    <div className="carousel-highlights">
      <div onClick={handlePrev} className='carousel-highlights-controls'>
        <img src={up_arrow} alt="prev" />
      </div>
      <div className="carousel-highlights-content">
        {highlights.map((highlight, index) => (
          <div key={index} className={`highlight-item ${getPositionClass(index)}`}>
            <RecentHighlights
              date={highlight.date}
              won={highlight.won}
              lost={highlight.lost}
              result={highlight.result}
            />
          </div>
        ))}
      </div>
      <div onClick={handleNext} className='carousel-highlights-controls'>
        <img src={down_arrow} alt="next" />
      </div>
    </div>
  );
};

export default CarouselHighlights;
