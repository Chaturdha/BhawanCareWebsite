import React, { useState, useEffect } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useTypewriter, Cursor } from 'react-simple-typewriter';
import { useInView } from 'react-intersection-observer';

const AnimatedComponent = ({
  animationType,
  direction = 'left',
  children,
  text,
  isSelected, // Pass in the selected state for expanding/collapsing answers
  ...props
}) => {
  const [inViewRef, inView] = useInView({
    threshold: 0.1, // Adjust threshold as needed
  });

  const [isAnimating, setIsAnimating] = useState(false);
  const [isHovered, setIsHovered] = useState(false);

  useEffect(() => {
    if (inView && !isAnimating) {
      setIsAnimating(true);
    } else if (!inView && isAnimating) {
      setIsAnimating(false);
    }
  }, [inView, isAnimating]);

  const typewriterConfig = useTypewriter({
    words: [text],
    loop: 0, // Set to 0 for infinite loop
  });

  const slideInFrom = direction === 'right' ? 'translateX(100%)' : 'translateX(-100%)';

  // Define all animations including the "Baseline"
  const animations = {
    fadeIn: useSpring({ opacity: inView ? 1 : 0, config: { duration: 1000 } }),
    slideIn: useSpring({ transform: inView ? 'translateX(0)' : slideInFrom, config: { duration: 1000 } }),
    scaleUp: useSpring({ transform: inView ? 'scale(1)' : 'scale(0.5)', config: { duration: 500 } }),
    rotate: useSpring({ transform: inView ? 'rotate(360deg)' : 'rotate(0deg)', config: { duration: 1000 } }),
    bounce: useSpring({
      transform: isHovered ? 'translateY(-10px)' : 'translateY(0)',
      config: { tension: 500, friction: 10 },
    }),
    fadeInUp: useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateY(0)' : 'translateY(20px)',
      config: { duration: 1000 },
    }),
    zoomIn: useSpring({
      transform: inView ? 'scale(1)' : 'scale(0.5)',
      opacity: inView ? 1 : 0,
      config: { duration: 500 },
    }),
    fadeInLeft: useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(-100px)',
      config: { duration: 1000 },
    }),
    fadeInRight: useSpring({
      opacity: inView ? 1 : 0,
      transform: inView ? 'translateX(0)' : 'translateX(100px)',
      config: { duration: 1000 },
    }),
    typewriter: { text: typewriterConfig[0], cursor: <Cursor /> },

    // Animation for expandable/collapsible answers
    expandCollapse: useSpring({
      height: isSelected ? 'auto' : '0px',
      opacity: isSelected ? 1 : 0,
      overflow: 'hidden',
      config: { duration: 300 },
    }),

     // Sliding animation for logos
     slideLogos: useSpring({
      from: { transform: 'translateX(100%)' },
      to: { transform: 'translateX(-100%)' },
      config: { duration: 5000, loop: true }, // Adjust the speed with the duration
    }),

    baseline: useSpring({
      opacity: inView ? 1 : 0, // Fade in
      transform: inView ? 'translateY(0) scale(1)' : 'translateY(100px) scale(0.9)', // Move up and scale to normal
      config: { tension: 250, friction: 14, duration: 700 },
    }),
  };

  const animationProps = animations[animationType] || {};

  return (
    <animated.div
      ref={inViewRef}
      style={animationProps}
      {...props}
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {animationType === 'typewriter' ? (
        <div>
          {animationProps.text}
          {animationProps.cursor}
        </div>
      ) : (
        children
      )}
    </animated.div>
  );
};

export default AnimatedComponent;
