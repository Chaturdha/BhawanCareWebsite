import React, { useState, useEffect } from 'react';
import AnimatedComponent from './animation';

export const Industries = () => {
  const images = [
    { id: 1, url: '/img/01.jpg', caption: 'Up For a Challenge?' },
    { id: 2, url: '/img/02.jpg', caption: 'Unlock Personalized Learning' },
    { id: 3, url: '/img/03.jpg', caption: 'Experience Hassle-Free Rides' }, // Example caption for the third image
    { id: 4, url: '/img/04.jpg', caption: 'Looking for Dedicated Staff?' },
    { id: 5, url: '/img/05.jpg', caption: 'Explore Tours & Packages.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 4000); // Change image every 4 seconds

    return () => clearInterval(interval);
  }, [images.length]);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const getClassForImage = (index) => {
    const diff = (index - currentIndex + images.length) % images.length;
    if (diff === 0) return 'active'; // Center image
    if (diff === 1) return 'next'; // Image on the right
    if (diff === images.length - 1) return 'prev'; // Image on the left
    return 'faded'; // All other images
  };

  return (
    <div className="sliding-section">
      <AnimatedComponent animationType="scaleUp">
        <h2>Our Industry Affiliations</h2>
      </AnimatedComponent>
      <div className="enhanced-carousel-container">
        <div className="enhanced-carousel">
          {images.map((image, index) => (
            <div
              key={image.id}
              className={`enhanced-carousel-item ${getClassForImage(index)}`}
            >
              <img src={image.url} alt={image.caption} className="carousel-image" />
              <div className="image-caption-overlay">
                <p className="image-caption">{image.caption}</p>
              </div>
            </div>
          ))}
        </div>

        <button className="carousel-arrow left-arrow" onClick={prevSlide}>
          &#10094;
        </button>
        <button className="carousel-arrow right-arrow" onClick={nextSlide}>
          &#10095;
        </button>

        <div className="carousel-dots">
          {images.map((_, index) => (
            <span
              key={index}
              className={`dot ${index === currentIndex ? 'active-dot' : ''}`}
              onClick={() => setCurrentIndex(index)}
            />
          ))}
        </div>
      </div>
    </div>
  );
};
