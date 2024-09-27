import React, { useState, useEffect } from 'react';
import AnimatedComponent from './animation';

export const NewTestimonial = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [visibleSlides, setVisibleSlides] = useState(3); // Default: 3 slides visible

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth <= 576) {
        setVisibleSlides(1); // 1 column for small devices
      } else if (window.innerWidth <= 768) {
        setVisibleSlides(2); // 2 columns for tablets
      } else {
        setVisibleSlides(3); // 3 columns for larger screens
      }
    };

    handleResize();
    window.addEventListener('resize', handleResize);

    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - visibleSlides ? 0 : prevSlide + 1
      );
    }, 3000);

    return () => {
      window.removeEventListener('resize', handleResize);
      clearInterval(interval);
    };
  }, [data, visibleSlides]);

  const goToSlide = (index) => {
    setCurrentSlide(index);
  };

  return (
    <div className="testimonial-slider">
      <div className="testimonial-section-title text-center">
        <AnimatedComponent animationType="scaleUp">
          <h2>What our clients say</h2>
        </AnimatedComponent>
      </div>

      <div
        className="testimonial-row"
        style={{
          transform: `translateX(-${currentSlide * (100 / visibleSlides)}%)`,
        }}
      >
        {data.map((d, i) => (
          <div
            key={`${d.name}-${i}`}
            className={`testimonial-column ${
              i >= currentSlide && i < currentSlide + visibleSlides
                ? 'active'
                : ''
            }`}
          >
            <div className="testimonial-box">
              <div className="testimonial-image-wrapper">
                <img className="testimonial-img" src={d.img} alt={d.name} />
              </div>
              <div className="testimonial-content-wrapper">
                <p className="testimonial-text">"{d.text}"</p>
                <div className="testimonial-author">- {d.name}</div>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="testimonial-dots">
        {Array.from({ length: data.length - (visibleSlides - 1) }, (_, i) => (
          <div
            key={i}
            className={`testimonial-dot ${
              i === currentSlide ? 'active' : ''
            }`}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
