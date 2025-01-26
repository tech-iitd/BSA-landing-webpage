import React from 'react';
import './PhotoGallery.css';
import PhotoFrame from '../PhotoFrame/PhotoFrame';
import img1 from '../../assets/gallery/img1.jpg';
import img2 from '../../assets/gallery/img2.jpg';
import img3 from '../../assets/gallery/img3.jpg';
import img4 from '../../assets/gallery/img4.jpg';
import img5 from '../../assets/gallery/img5.jpg';
import img6 from '../../assets/gallery/img6.jpg';
import img7 from '../../assets/gallery/img7.jpg';
import img8 from '../../assets/gallery/img8.jpg';
import img9 from '../../assets/gallery/img9.jpg';

const PhotoGallery = () => {
 
  const column1 = [img1, img2, img3, img4, img5, img6, img7, img8, img9];
  const column2 = [ img4, img5, img6, img7, img8, img9, img1, img2, img3];
  const column3 = [ img7, img8, img9, img1, img2, img3, img4, img5, img6];
 

  // Duplicate the images to create a seamless loop
  const duplicateColumn = (column) => [...column, ...column];

  return (
    <div className="photo-gallery">
      <div className="photo-gallery-container">
        <div>
          {duplicateColumn(column1).map((img, index) => (
            <PhotoFrame key={index} img={img} />
          ))}
        </div>
        <div>
          {duplicateColumn(column2).map((img, index) => (
            <PhotoFrame key={index} img={img} />
          ))}
        </div>
        <div>
          {duplicateColumn(column3).map((img, index) => (
            <PhotoFrame key={index} img={img} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default PhotoGallery;
