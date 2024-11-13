import React, { useEffect, useRef } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa'; 
import emailjs from '@emailjs/browser';

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose }) => {
  const form = useRef(); // Use ref for the form

  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
    document.head.appendChild(link);

    // Clean up the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    // Here you can handle state changes if required
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm('service_4211m8l', 'template_5agje9l', form.current, {
        publicKey: '7JbFWgAbd51t2TcEH',
      })
      .then(
        (result) => {
          console.log(result.text);
          alert("Submitted Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(`Error Sending Message! ${error.message || error.text || 'Unknown error'}`);
        }
      );
  };

  return (
    <Modal
      isOpen={isOpen}
      onRequestClose={onRequestClose}
      shouldCloseOnOverlayClick={false}
      shouldCloseOnEsc={false}
      style={{
        content: {
          top: '50%',
          left: '50%',
          right: 'auto',
          bottom: 'auto',
          transform: 'translate(-50%, -50%)',
          padding: '20px',
          borderRadius: '15px',
          boxShadow: '0 4px 15px rgba(0, 0, 0, 0.5)',
          backgroundColor: 'white',
          maxWidth: '600px',
          width: '90%',
          maxHeight: '60vh',
          overflowY: 'auto',
          fontFamily: '"Open Sans", sans-serif',
        },
        overlay: {
          backgroundColor: 'rgba(0, 0, 0, 0.6)',
        },
      }}
    >
      {/* Close Icon */}
      <button
        onClick={onRequestClose}
        style={{
          position: 'absolute',
          top: '10px',
          right: '10px',
          background: 'transparent',
          border: 'none',
          fontSize: '20px',
          cursor: 'pointer',
        }}
      >
        <FaTimes style={{ color: '#FF6347' }} />
      </button>

      <h2 style={{ textAlign: 'center', color: '#E8A905' }}>
        Book a Demo
      </h2>
      <p style={{ textAlign: 'center', color: '#94664b', marginBottom: '20px' }}>
        Please fill in your details to request a demo.
      </p>
      <form ref={form} name="sentMessage" onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="name"
                name="name"
                className="form-control"
                placeholder="Name *"
                required
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="email"
                id="email"
                name="email"
                className="form-control"
                placeholder="Email *"
                required
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="contactNumber"
                name="contactNumber"
                className="form-control"
                placeholder="Contact Number *"
                required
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="whatsappNumber"
                name="whatsappNumber"
                className="form-control"
                placeholder="WhatsApp Number (Optional)"
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
        </div>
        <div className="row">
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="city"
                name="city"
                className="form-control"
                placeholder="City *"
                required
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
          <div className="col-md-6">
            <div className="form-group">
              <input
                type="text"
                id="societyName"
                name="societyName"
                className="form-control"
                placeholder="Society Name *"
                required
                onChange={handleChange}
                style={{
                  padding: '10px',
                  borderRadius: '8px',
                  border: '1px solid #FFF2C1',
                  fontSize: '12px',
                  color: '#94664b',
                }}
              />
            </div>
          </div>
        </div>

        {/* Message input */}
        <div className="form-group">
          <textarea
            id="message"
            name="message"
            className="form-control"
            placeholder="Message (Optional)"
            onChange={handleChange}
            style={{
              padding: '10px',
              borderRadius: '8px',
              border: '1px solid #FFF2C1',
              fontSize: '12px',
              color: '#94664b',
              minHeight: '100px',
            }}
          />
        </div>

        {/* Submit Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
          <button
            type="submit"  // Use type="submit" to trigger form submission
            className="btn btn-custom btn-lg"
            style={{
              padding: '10px 20px',
              borderRadius: '10px',
              backgroundColor: '#4CAF50',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              fontSize: '16px',
            }}
          >
            Send
          </button>
        </div>
      </form>
    </Modal>
  );
};

export default ContactModal;
