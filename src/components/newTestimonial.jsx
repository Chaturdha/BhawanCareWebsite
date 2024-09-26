import React, { useState, useEffect } from 'react';
import AnimatedComponent from './animation';

export const NewTestimonial = ({ data }) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prevSlide) =>
        prevSlide === data.length - 3 ? 0 : prevSlide + 1
      ); // Slide back to start after the last visible card
    }, 3000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, [data]);

  const nextSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === data.length - 3 ? 0 : prevSlide + 1
    );
  };

  const prevSlide = () => {
    setCurrentSlide((prevSlide) =>
      prevSlide === 0 ? data.length - 3 : prevSlide - 1
    );
  };

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

      {/* Testimonial Row */}
      <div
        className="testimonial-row"
        style={{
          transform: `translateX(-${currentSlide * 33.33}%)` // Slide one card at a time
        }}
      >
        {data ? (
          data.map((d, i) => (
            <div
              key={`${d.name}-${i}`}
              className={`testimonial-column ${i >= currentSlide && i < currentSlide + 3 ? 'active' : ''}`}
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
          ))
        ) : (
          'loading'
        )}
      </div>

      {/* Dots Navigation */}
      <div className="testimonial-dots">
        {Array.from({ length: data.length - 2 }, (_, i) => (
          <div
            key={i}
            className={`testimonial-dot ${i === currentSlide ? 'active' : ''}`}
            onClick={() => goToSlide(i)}
          ></div>
        ))}
      </div>
    </div>
  );
};
