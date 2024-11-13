import React, { useState } from "react";
import AnimatedComponent from "./animation";
import { useInView } from "react-intersection-observer";
import ContactModal from "./contactModal";

export const Header = (props) => {
  const [smallImagesInView, setSmallImagesInView] = useState([false, false, false]);
  const [isModalOpen, setIsModalOpen] = useState(false); // Manage modal open state

  const { ref: firstImageRef, inView: firstImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: secondImageRef, inView: secondImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });
  const { ref: thirdImageRef, inView: thirdImageInView } = useInView({
    triggerOnce: false,
    threshold: 0.5,
  });

  const handleWhatsApp = () => {
    window.open('https://wa.me/917894318795'); // Your WhatsApp number
  };

  React.useEffect(() => {
    setSmallImagesInView([firstImageInView, secondImageInView, thirdImageInView]);
  }, [firstImageInView, secondImageInView, thirdImageInView]);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  return (
    <header id="header">
      <div className="intro">
        <div className="intro-text">
          <AnimatedComponent animationType="fadeInLeft">
            <h1>{props.data ? "Bhawan Care" : "Loading"}</h1>
          </AnimatedComponent>
          <p>{props.data ? props.data.paragraph : "Loading"}</p>

          <h1 id="heading">{props.data ? props.data.heading : "Loading"}</h1>

          <div className="button-container">
            <button onClick={openModal} className="btn btn-custom btn-lg">
              Book A Demo
            </button>
            <a href="#" className="btn btn-send btn-lg page-scroll" onClick={handleWhatsApp}>
              Contact Us
            </a>
          </div>
        </div>

        {/* Right side: Image layout */}
        <div className="intro-images">
          <AnimatedComponent animationType="fadeInRight">
            <div className="image-large-wrapper">
              <div className="image-item large">
                <img
                  src="/img/header/family.png"
                  alt="Main Product"
                  className="main-image"
                />
              </div>
            </div>
          </AnimatedComponent>

          <div className="small-images">
            <div
              className="image-item small"
              ref={firstImageRef}
              style={{
                transform: firstImageInView
                  ? "translate(0, 0)"
                  : "translate(-50%, -50%) rotate(-20deg)",
                transition: "transform 1s ease-in-out",
              }}
            >
              <img
                src="/img/header/small1.png"
                alt="Product 2"
                className="small-image"
              />
            </div>
            <div
              className="image-item small"
              ref={secondImageRef}
              style={{
                transform: secondImageInView
                  ? "translate(0, 0)"
                  : "translate(50%, -50%) rotate(15deg)",
                transition: "transform 1s ease-in-out",
              }}
            >
              <img
                src="/img/header/small2.png"
                alt="Product 3"
                className="small-image"
              />
            </div>
            <div
              className="image-item small"
              ref={thirdImageRef}
              style={{
                transform: thirdImageInView
                  ? "translate(0, 0)"
                  : "translate(-40%, 40%) rotate(18deg)",
                transition: "transform 1s ease-in-out",
              }}
            >
              <img
                src="/img/header/small3.png"
                alt="Product 4"
                className="small-image"
              />
            </div>
          </div>
        </div>
      </div>

      {/* Contact Modal */}
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} />
    </header>
  );
};
