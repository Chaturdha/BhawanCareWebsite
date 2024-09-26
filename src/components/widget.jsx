import React, { useState } from 'react';
import { FaPhoneAlt, FaWhatsapp, FaRegComments, FaTimes } from 'react-icons/fa';
import ContactModal from './contactModal';


const Widget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isModalOpen, setIsModalOpen] = useState(false); // State for the modal

  const handleCall = () => {
    window.open('tel:+917894318795'); // Your phone number
  };

  const handleWhatsApp = () => {
    window.open('https://wa.me/917894318795'); // Your WhatsApp number
  };

  const handleGetDemo = () => {
    setIsModalOpen(true); // Open the modal when demo is requested
  };

  const toggleWidget = () => {
    setIsOpen(!isOpen);
  };

  const closeModal = () => {
    setIsModalOpen(false); // Close the modal
  };

  return (
    <div className="widget">
      <button className="widget-toggle" onClick={toggleWidget}>
        {isOpen ? <FaTimes /> : <FaRegComments />} {/* Toggle between icons */}
      </button>
      {isOpen && (
        <div className="widget-buttons">
          <button className="widget-button" onClick={handleCall}>
            <FaPhoneAlt size={24} /> {/* Adjust the size as needed */}
          </button>
          <button className="widget-button" onClick={handleWhatsApp}>
            <FaWhatsapp size={26} /> {/* Adjust the size as needed */}
          </button>
          <button onClick={handleGetDemo} className="widget-button">
            Get Demo
          </button>
        </div>
      )}
      <ContactModal isOpen={isModalOpen} onRequestClose={closeModal} /> {/* Modal usage */}
    </div>
  );
};

export default Widget;
