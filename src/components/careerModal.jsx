import React, { useState, useRef } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';
import { postCv } from './../api/Api';

Modal.setAppElement('#root');

const CareerModal = ({ isOpen, onRequestClose }) => {
    const [data, setData] = useState({
        name: '',
        email: '',
        contact_number: '',
        address: '',
        state: '',
        city: '',
        pincode: '',
        cv: null,
    });
    const [loading, setLoading] = useState(false);
    const handleChange = (e) => {
        const { name, value } = e.target;
        setData({ ...data, [name]: value });
    };

    const handleFileChange = (e) => {
        setData({ ...data, cv: e.target.files[0] });
    };

    const sendEmail = async (e) => {
        e.preventDefault();
    
        // Validation checks
        if (!data.name) {
            alert("Please enter your name.");
            return;
        } else if (!data.email) {
            alert("Please enter your email.");
            return;
        } else if (!data.contact_number) {
            alert("Please enter your contact number.");
            return;
        } else if (!data.address) {
            alert("Please enter your address.");
            return;
        } else if (!data.state) {
            alert("Please enter your state.");
            return;
        } else if (!data.city) {
            alert("Please enter your city.");
            return;
        } else if (!data.pincode) {
            alert("Please enter your pincode.");
            return;
        } else if (!data.cv) {
            alert("Please upload your CV.");
            return;
        }
        setLoading(true);
    
        try {
          const formData =new FormData()
          formData.append("name", data?.name)
          formData.append("email", data?.email)

          formData.append("contact_number", data?.contact_number)

          formData.append("address", data?.address)
          formData.append("state", data?.state)
          formData.append("city", data?.city)
          formData.append("pincode", data?.pincode)
          formData.append("cv", data?.cv)
          console.log("chk",formData)

            const response = await postCv(formData);
            if(response){
                setData({
                    name: '',
                    email: '',
                    contact_number: '',
                    address: '',
                    state: '',
                    city: '',
                    pincode: '',
                    cv: null,
                });
            onRequestClose();
            alert("Submitted Successfully! Thank you for applying. We’ll review and notify you by email. Keep in touch!");
            }
        } catch (error) {
            console.error("Error processing the form submission:", error?.response?.data);
            alert(error?.response?.data);
        }finally {
            setLoading(false);
        }
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

            <p style={{ textAlign: 'center', marginBottom: '20px' }}>
                Please fill in your details to request a demo.
            </p>
            <form onSubmit={sendEmail} style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* Form Fields */}
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="name"
                            className="form-control"
                            placeholder="Name *"
                            value={data.name}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="email"
                            className="form-control"
                            placeholder="Email *"
                            value={data.email}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="contact_number"
                            className="form-control"
                            placeholder="Contact Number *"
                            value={data.contact_number}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="address"
                            className="form-control"
                            placeholder="Address *"
                            value={data.address}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="state"
                            className="form-control"
                            placeholder="State *"
                            value={data.state}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="city"
                            className="form-control"
                            placeholder="City *"
                            value={data.city}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="pincode"
                            className="form-control"
                            placeholder="Pincode *"
                            value={data.pincode}
                            onChange={handleChange}
                            style={inputStyle}
                            required
                        />
                    </div>
                </div>

                {/* File input */}
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="file"
                            name="cv"
                            className="form-control"
                            onChange={handleFileChange}
                            accept=".pdf,.docx,.jpg,.png"
                            style={inputStyle}
                            required
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button
                        type="submit"
                        className="btn btn-custom btn-lg"
                        disabled={loading}
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
{loading ? "Sending..." : "Send"}                    </button>
                </div>
            </form>
        </Modal>
    );
};

// Style for input fields
const inputStyle = {
    padding: '10px',
    borderRadius: '8px',
    border: '1px solid #FFEBAB',
    fontSize: '12px',
    marginBottom: '10px',
};

export default CareerModal;
