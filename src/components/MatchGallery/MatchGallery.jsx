import React, { useContext, useEffect } from 'react';
import './MatchGallery.css';
import { dataContext } from '../../data/Data';


const MatchGallery = () => {
    const [currentIndex, setCurrentIndex] = useState(0);

    const {highlights} = useContext(dataContext);
    const images = highlights.images;
    const totalImages = images.length;

    useEffect(() => {
        const interval = setInterval(() => {
          setCurrentIndex((prevIndex) => (prevIndex + 1) % totalImages);
        }, 6000);
    
        return () => clearInterval(interval);
      }, [totalImages]);
    
      const getPositionClass = (index) => {
        if (index === currentIndex) return 'current';
        if (index === (currentIndex - 1 + totalImages) % totalImages) return 'previous';
        if (index === (currentIndex + 1) % totalImages) return 'next';
        return 'hidden';
      };
    
  return (
    <div className='match-gallery'>
      <div className="carousel-highlights-content">
        {images.map((image, index) => (
          <div key={index} className={`highlight-item ${getPositionClass(index)}`}>
            <img src={image} alt="" />
          </div>
        ))}
      </div>
    </div>
  );
}

export default MatchGallery;
