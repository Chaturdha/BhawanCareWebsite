import React, { useState, useEffect } from "react";
import { Player } from '@lottiefiles/react-lottie-player';
import { FaAngleDown } from 'react-icons/fa'; // Import down arrow icon
import AnimatedComponent from "./animation";
import { Contact } from "./contact";

const AllFeature = ({ data, societyInfo }) => {
  const [hoveredIndex, setHoveredIndex] = useState(null); // Track which card is hovered
  const [showTextIndex1, setShowTextIndex1] = useState(null); // Track which card's text is visible in the first section
  const [showTextIndex2, setShowTextIndex2] = useState(null); // Track which card's text is visible in the second section

  // Define an array of background colors for the cards
  const colors = [
    "#cce6ff", "#f2d9d9", "#ccccff", "#ffccff",
    "#ccffcc", "#ffffcc", "#ffebcc", "#d6f5d6", "#ffd9cc"
  ];

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);
  }, []); // Added empty dependency array to avoid continuous scrolling

  const handleMouseEnter = (index) => setHoveredIndex(index); // Set hovered card index
  const handleMouseLeave = () => setHoveredIndex(null); // Reset hovered card index
  const toggleTextDisplay1 = (index) => setShowTextIndex1(index === showTextIndex1 ? null : index); // Toggle text display for the first section
  const toggleTextDisplay2 = (index) => setShowTextIndex2(index === showTextIndex2 ? null : index); // Toggle text display for the second section

  return (
    <div id="#allFeature">
      {/* Section for Society Management & Services */}
      <div className="section-title section-title-top">
        <AnimatedComponent animationType="scaleUp">
          <h2 className="centerAlign ">Society Management & Services</h2>
        </AnimatedComponent>
      </div>
      <div className="featureContainer">
        {/* First column for features - 5 cards */}
        <div className="featureColomn">
          {data.slice(0, 5).map((feature, index) => (
            <div
              key={index}
              className="featureCard"
              style={{
                backgroundColor: hoveredIndex === index ? colors[index % colors.length] : "#f5f5f5",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="title-icon-container">
                <h3>{feature.title}</h3>
                {showTextIndex1 !== index && (
                  <FaAngleDown
                    onClick={() => toggleTextDisplay1(index)}
                    style={{ fontSize: "24px", cursor: "pointer", marginLeft: '10px' }}
                  />
                )}
              </div>
              {showTextIndex1 === index && (
                <div className="scrolling-text">
                  <p>{feature.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Second column for features - 4 cards */}
        <div className="featureColomn second-column">
          {data.slice(5, 9).map((feature, index) => (
            <div
              key={index + 5}
              className="featureCard"
              style={{
                backgroundColor: hoveredIndex === index + 5 ? colors[(index + 5) % colors.length] : "#f5f5f5",
              }}
              onMouseEnter={() => handleMouseEnter(index + 5)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="title-icon-container">
                <h3>{feature.title}</h3>
                {showTextIndex1 !== index + 5 && (
                  <FaAngleDown
                    onClick={() => toggleTextDisplay1(index + 5)}
                    style={{ fontSize: "24px", cursor: "pointer", marginLeft: '10px' }}
                  />
                )}
              </div>
              {showTextIndex1 === index + 5 && (
                <div className="scrolling-text">
                  <p>{feature.text}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Third column with the Lottie animation */}
        <div className="featureColomn third-column">
          <Player
            autoplay
            loop
            src="../img/Animation - 1727087325682.json"
            style={{ height: '400px', width: '400px' }}
          />
        </div>
      </div>

      {/* Section for Society Information */}
      <div className="section-title">
        <AnimatedComponent animationType="scaleUp">
          <h2 className="centerAlign">Society Information</h2>
        </AnimatedComponent>
      </div>
      <div className="featureContainer">
        {/* First column with the Lottie animation */}
        <div className="featureColomn third-column">
          <Player
            autoplay
            loop
            src="../img/Animation - 1727159280855.json"
            style={{ height: '400px', width: '400px' }}
          />
        </div>

        {/* Second column for society information - 4 cards */}
        <div className="featureColomn second-column">
          {societyInfo.slice(0, 5).map((info, index) => (
            <div
              key={index}
              className="featureCard"
              style={{
                backgroundColor: hoveredIndex === index ? colors[index % colors.length] : "#f5f5f5",
              }}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="title-icon-container">
                <h3>{info.title1}</h3>
                {showTextIndex2 !== index && (
                  <FaAngleDown
                    onClick={() => toggleTextDisplay2(index)}
                    style={{ fontSize: "24px", cursor: "pointer", marginLeft: '10px' }}
                  />
                )}
              </div>
              {showTextIndex2 === index && (
                <div>
                  <p>{info.text1}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Third column for society information - 5 cards */}
        <div className="featureColomn">
          {societyInfo.slice(5, 11).map((info, index) => (
            <div
              key={index + 5} // Changed key to index + 5
              className="featureCard"
              style={{
                backgroundColor: hoveredIndex === index + 5 ? colors[(index + 5) % colors.length] : "#f5f5f5",
              }}
              onMouseEnter={() => handleMouseEnter(index + 5)}
              onMouseLeave={handleMouseLeave}
            >
              <div className="title-icon-container">
                <h3>{info.title1}</h3>
                {showTextIndex2 !== index + 5 && (
                  <FaAngleDown
                    onClick={() => toggleTextDisplay2(index + 5)}
                    style={{ fontSize: "24px", cursor: "pointer", marginLeft: '10px' }}
                  />
                )}
              </div>
              {showTextIndex2 === index + 5 && (
                <div>
                  <p>{info.text1}</p>
                </div>
              )}
            </div>
          ))}
        </div>
        
      </div>
      <Contact/>
    </div>
  );
};

export default AllFeature;
