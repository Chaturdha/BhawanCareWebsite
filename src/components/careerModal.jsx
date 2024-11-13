import React, { useEffect, useState, useRef } from "react";
import Modal from "react-modal";
import { FaTimes } from 'react-icons/fa';
import emailjs from '@emailjs/browser';

Modal.setAppElement('#root');

const CareerModal = ({ isOpen, onRequestClose }) => {
    const form = useRef();
    const [formData, setFormData] = useState({
        user_name: '',
        user_email: '',
        user_contactNumber: '',
        user_address: '',
        user_state: '',
        user_city: '',
        user_pincode: '',
        cv: null,
    });

    const [file, setFile] = useState(null);
    const [downloadLink, setDownloadLink] = useState(null); // State to hold the downloadable link

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const convertFileToBase64 = (file) => {
        return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.readAsDataURL(file);
            reader.onload = () => resolve(reader.result.split(',')[1]); // Removing 'data:application/pdf;base64,' part
            reader.onerror = (error) => reject(error);
        });
    };

    const createDownloadLink = (base64File) => {
        const byteCharacters = atob(base64File);
        const byteArray = new Uint8Array(byteCharacters.length);
        for (let i = 0; i < byteCharacters.length; i++) {
            byteArray[i] = byteCharacters.charCodeAt(i);
        }
        const blob = new Blob([byteArray], { type: "application/octet-stream" });
        const url = URL.createObjectURL(blob);
        setDownloadLink(url); // Set the download link state
    };

    const sendEmail = async (e) => {
        e.preventDefault();
        if (!file) {
            alert("Please attach a file before submitting.");
            return;
        }

        try {
            const base64File = await convertFileToBase64(file);

            // Send email with the base64 file as the 'cv' variable
            emailjs.send('service_4211m8l', 'template_y5lo1uw', {
                user_name: formData.user_name,
                user_email: formData.user_email,
                user_contactNumber: formData.user_contactNumber,
                user_address: formData.user_address,
                user_state: formData.user_state,
                user_city: formData.user_city,
                user_pincode: formData.user_pincode,
                // cv: base64File, // Pass base64 file content here
            }, '7JbFWgAbd51t2TcEH')
                .then(() => {
                    console.log('SUCCESS!');
                    alert("Submitted Successfully!");
                    createDownloadLink(base64File); // Create a downloadable link
                })
                .catch((error) => {
                    console.error('FAILED...', error);
                    alert(`Error Sending Message! ${error.message || error.text || 'Unknown error'}`);
                });
        } catch (error) {
            console.error("Error converting file to base64:", error);
            alert("Error processing the file. Please try again.");
        }
    };

    useEffect(() => {
        const link = document.createElement('link');
        link.href = 'https://fonts.googleapis.com/css2?family=Open+Sans:wght@400;600&display=swap';
        document.head.appendChild(link);

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
            <form ref={form} onSubmit={sendEmail} method="post" encType="multipart/form-data" style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
                {/* Form Fields */}
                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_name"
                            className="form-control"
                            placeholder="Name *"
                            required
                            value={formData.user_name}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="email"
                            name="user_email"
                            className="form-control"
                            placeholder="Email *"
                            required
                            value={formData.user_email}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_contactNumber"
                            className="form-control"
                            placeholder="Contact Number *"
                            required
                            value={formData.user_contactNumber}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-6">
                        <input
                            type="text"
                            name="user_address"
                            className="form-control"
                            placeholder="Address *"
                            required
                            value={formData.user_address}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                </div>

                <div className="row">
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="user_state"
                            className="form-control"
                            placeholder="State *"
                            required
                            value={formData.user_state}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="user_city"
                            className="form-control"
                            placeholder="City *"
                            required
                            value={formData.user_city}
                            onChange={handleChange}
                            style={inputStyle}
                        />
                    </div>
                    <div className="col-md-4">
                        <input
                            type="text"
                            name="user_pincode"
                            className="form-control"
                            placeholder="Pincode *"
                            required
                            value={formData.user_pincode}
                            onChange={handleChange}
                            style={inputStyle}
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
                        />
                    </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
                    <button
                        type="submit"
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

            {/* Show the downloadable link after submission */}
            {/* {downloadLink && (
                <div style={{ marginTop: '20px', textAlign: 'center' }}>
                    <a href={downloadLink} download="cv-file" style={{ color: '#4CAF50', textDecoration: 'none' }}>
                        Download your CV file
                    </a>
                </div>
            )} */}
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
