import React, { useEffect } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa'; // Import FontAwesome icon

Modal.setAppElement('#root');

const ContactModal = ({ isOpen, onRequestClose, handleChange, handleSubmit }) => {
  useEffect(() => {
    const link = document.createElement('link');
    link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
    document.head.appendChild(link);

    // Clean up the link when the component unmounts
    return () => {
      document.head.removeChild(link);
    };
  }, []);

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
        Request a Demo
      </h2>
      <p style={{ textAlign: 'center', color: '#94664b', marginBottom: '20px' }}>
        Please fill in your details to request a demo.
      </p>
      <form name="sentMessage" validate onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
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
              <p className="help-block text-danger"></p>
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
              <p className="help-block text-danger"></p>
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
              <p className="help-block text-danger"></p>
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
              <p className="help-block text-danger"></p>
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
              <p className="help-block text-danger"></p>
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
              <p className="help-block text-danger"></p>
            </div>
          </div>
        </div>

        {/* Centered Submit Button */}
        <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
            type="submit"  // Change onClick to type="submit" to trigger form submission
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
