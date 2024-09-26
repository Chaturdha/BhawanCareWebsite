import React, { useEffect, useState, useRef } from 'react';
import AnimatedComponent from './animation';

export const Awards = () => {
  const awards = [
    { name: 'Cities', targetCount: 25 },
    { name: 'Societies', targetCount: 50 },
    { name: 'Bhawan Care Users', targetCount: 1000},
    { name: 'Associate Industries', targetCount: 60 },
  ];

  const [currentCounts, setCurrentCounts] = useState(
    awards.map(() => 0) // Initialize all counts to 0
  );
  const awardsRef = useRef(null);
  const hasAnimatedRef = useRef(false); // To track if animation has occurred

  const incrementCounts = (index) => {
    setCurrentCounts((prevCounts) => {
      const newCounts = [...prevCounts];
      if (newCounts[index] < awards[index].targetCount) {
        newCounts[index] += 1; // Increment the count for the specific award
      }
      return newCounts;
    });
  };

  const startCounting = () => {
    awards.forEach((_, index) => {
      const interval = setInterval(() => {
        setCurrentCounts((prevCounts) => {
          const newCounts = [...prevCounts];
          if (newCounts[index] < awards[index].targetCount) {
            newCounts[index] += 1; // Increment count
          }
          if (newCounts[index] === awards[index].targetCount) {
            clearInterval(interval); // Stop counting when target reached
          }
          return newCounts;
        });
      }, 20); // Adjusted speed for faster increments
    });
  };
  
  const handleScroll = () => {
    if (awardsRef.current) {
      const { top, bottom } = awardsRef.current.getBoundingClientRect();
      const isVisible = top < window.innerHeight && bottom > 0;

      if (isVisible && !hasAnimatedRef.current) {
        startCounting(); // Start counting when visible
        hasAnimatedRef.current = true; // Set to true after the first animation
      }
    }
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className="awards-section" ref={awardsRef}>
      <AnimatedComponent animationType="scaleUp" >
      <h2>We Contribute To</h2>
      </AnimatedComponent>
      <div className="awards-display">
        {awards.map((award, index) => (
          <React.Fragment key={index}>
            <div className="award-item">
              <p
                className={`award-name ${award.name.replace(/\s+/g, '-').toLowerCase()}`}
                style={{ fontFamily: 'Roboto, sans-serif' }} // Default font
              >
                {award.name}
              </p>
              <p className="award-count">{currentCounts[index]}+</p>
            </div>
            {/* Add vertical bar except after the last award */}
            {index !== awards.length - 1 && <div className="vertical-bar">|</div>}
          </React.Fragment>
        ))}
      </div>
    </div>
  );
};
