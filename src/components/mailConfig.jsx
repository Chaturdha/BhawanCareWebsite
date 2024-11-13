import React, { useRef, useState } from 'react';
import emailjs from '@emailjs/browser';

export const ContactUs = () => {
    const form = useRef();
    const [file, setFile] = useState(null);

    // Handle file input change
    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const sendEmail = (e) => {
        e.preventDefault();

        // Create a FormData object to handle form data along with the file
        const formData = new FormData(form.current);  // Ensure this refers to the form correctly

        if (file) {
            // If a file is selected, append it to the FormData object
            formData.append('file', file);
        }

        // Log the FormData contents to check what is being sent
        console.log('Form Data being sent:', formData);

        // Send email with form data (including file if provided)
        console.log('Form Element:', form.current);
        emailjs
            .sendForm('service_vnpsxlp', 'template_mzs8lqp', form.current, {
                publicKey: 'PTAShub-ODpBrLKv5',
            })
            .then(
                (response) => {
                    console.log('SUCCESS!', response);
                    alert('Submitted Successfully!');
                },
                (error) => {
                    console.error('FAILED...', error);
                    alert('Error: ' + error.text);
                }
            );
        }

        return (
            <form
                ref={form}
                onSubmit={sendEmail}
                style={{
                    maxWidth: '500px',
                    margin: '0 auto',
                    paddingTop: '80px',
                    borderRadius: '8px',
                    boxShadow: '0px 0px 10px rgba(0, 0, 0, 0.1)',
                    backgroundColor: '#f9f9f9',
                }}
            >
                <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
                    Name
                </label>
                <input
                    type="text"
                    name="user_name"
                    style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />
                <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
                    Email
                </label>
                <input
                    type="email"
                    name="user_email"
                    style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />
                <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
                    State
                </label>
                <input
                    type="text"
                    name="user_state"
                    style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />
                <label style={{ fontWeight: 'bold', marginTop: '10px', color: '#333' }}>
                    Message
                </label>
                <textarea
                    name="message"
                    style={{
                        width: '100%',
                        padding: '10px',
                        marginTop: '5px',
                        height: '100px',
                    }}
                />

                {/* File input */}
                <label
                    style={{
                        fontWeight: 'bold',
                        marginTop: '10px',
                        color: '#333',
                    }}
                >
                    Attach File
                </label>
                <input
                    type="file"
                    name="file"
                    onChange={handleFileChange} // Handle file input change
                    style={{ width: '100%', padding: '10px', marginTop: '5px' }}
                />

                <input
                    type="submit"
                    value="Send"
                    style={{
                        marginTop: '15px',
                        padding: '10px 20px',
                        backgroundColor: '#4CAF50',
                        color: '#fff',
                        border: 'none',
                        borderRadius: '4px',
                        cursor: 'pointer',
                    }}
                />
            </form>
        );
    };
