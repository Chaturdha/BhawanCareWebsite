import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import data from "../data/data.json"; // Ensure the path is correct
import AnimatedComponent from "./animation"; // Animation component
import { Navigation } from "./navigation"; // Navigation component
import { Contact } from "./contact"; // Contact component
import { Player } from '@lottiefiles/react-lottie-player';



const Common = () => {
  const { section } = useParams(); // Extract section from URL
  const [cardData, setCardData] = useState([]);

  useEffect(() => {
    // Scroll to the top when the component mounts
    window.scrollTo(0, 0);

    // Load data based on section
    if (section) {
      const sectionData = data.Common[section.charAt(0).toUpperCase() + section.slice(1)];
      setCardData(sectionData || []);
    }
  }, [section]);

  if (!section) {
    return <p>Error: Section not specified.</p>;
  }

  const sectionTitle = section.charAt(0).toUpperCase() + section.slice(1);

  return (
    <div className="container1">
      <Navigation />
      <div className="section-title text-center section-title-top">
        <AnimatedComponent animationType="scaleUp">
          <h2>Exclusive Features for {sectionTitle}</h2>
        </AnimatedComponent>
        <p>Enhancing Community Experience and Engagement</p>
      </div>

      <div>
        <img
          src="../img/adminImage.svg"
          alt={`${section} section image`}
          className="responsive-svg"
        />
        <div className="animatedcard">
          {cardData.length > 0 ? (
            cardData.map((d, i) => (
              <div key={`${d.title}-${i}`} className="card">
                <div className="card-content">
                  <div className="card-text">
                    <h3>{d.title}</h3>
                    <p>{d.paragraph}</p>
                  </div>
                  <div className="card-image">
                    {/* <img
                      src={d.largeImage}
                      alt={`Card visual for ${d.title}`}
                      className="right-image"
                    /> */}
                    <Player
                      autoplay
                      loop
                      src={d.largeImage}
                      style={{ height: '150px', width: '150px' }}
                    />
                  </div>
                </div>
              </div>
            ))
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>

      <Contact />
    </div>
  );
};

export default Common;
