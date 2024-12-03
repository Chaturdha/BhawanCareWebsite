import { useState } from "react";
import React from "react";
import AnimatedComponent from "./animation";
import { postContact } from './../api/Api';

const initialState = {
  name: "",
  email: "",
  message: "",
  contact_number: "",
  whatsapp_number: "",
  city: "",
  society_name: "",
};

export const Contact = (props) => {
  const [formState, setFormState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setFormState({ ...initialState });

  const handleSubmit = async (e) => {
    e.preventDefault();
    // Use FormData to send data
    const formData = new FormData();
    Object.keys(formState).forEach((key) => {
      formData.append(key, formState[key]);
    });

    try {
      const response = await postContact(formData);
      if (response) { // Check response success
        alert('Form submitted successfully!');
        clearState();
      } else {
        alert('Failed to submit the form. Please try again.');
      }
    } catch (error) {
      console.error('Error submitting form:', error);
      alert('An error occurred. Please try again.');
    }
  };

  return (
    <div>
      <div id="contact">
        <div className="container">
          <div className="col-md-8">
            <div className="row">
              <div className="section-title">
                <h2>Get In Touch</h2>
                <p>
                  Please fill out the form below to send us an email and we will
                  get back to you as soon as possible.
                </p>
              </div>
              <form name="sentMessage" onSubmit={handleSubmit}>
                <div className="row">
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="name"
                        name="name"
                        className="form-control"
                        placeholder="Name *"
                        value={formState?.name}
                        required
                        onChange={handleChange}
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
                        value={formState?.email}
                        required
                        onChange={handleChange}
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
                        name="contact_number"
                        className="form-control"
                        placeholder="Contact Number *"
                        value={formState?.contact_number}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="whatsappNumber"
                        name="whatsapp_number"
                        className="form-control"
                        placeholder="WhatsApp Number (Optional)"
                        value={formState?.whatsapp_number}
                        onChange={handleChange}
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
                        value={formState?.city}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="societyName"
                        name="society_name"
                        className="form-control"
                        placeholder="Society Name *"
                        value={formState?.society_name}
                        required
                        onChange={handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                </div>
                <div className="form-group">
                  <textarea
                    name="message"
                    id="message"
                    className="form-control"
                    rows="4"
                    placeholder="Message"
                    value={formState?.message}
                    onChange={handleChange}
                  ></textarea>
                  <p className="help-block text-danger"></p>
                </div>
                <div id="success"></div>
                <button type="submit" className="btn btn-custom btn-lg">
                  Send Message
                </button>
              </form>
            </div>
          </div>
          <div className="col-md-3 col-md-offset-1 contact-info">
            <div className="contact-item">
              <h3>Contact Info</h3>
              <p>
                <span>
                  <i className="fa fa-map-marker"></i> Head Office
                </span>
                {props.data ? props.data.address : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-phone"></i> Tollfree No.
                </span>{" "}
                {props.data ? props.data.phone : "loading"}
              </p>
            </div>
            <div className="contact-item">
              <p>
                <span>
                  <i className="fa fa-envelope-o"></i> Email
                </span>{" "}
                {props.data ? props.data.email : "loading"}
              </p>
            </div>

            {/* App Store and Play Store icons */}
            <div className="button-row">
              <a href="https://www.apple.com/app-store/" target="_blank" rel="noreferrer">
                <img
                  src="../img/apple-logo.png" // Replace with a local asset if needed
                  alt="App Store"
                  className="store-icon-img"
                />
              </a>
              <a href="https://play.google.com/store" target="_blank" rel="noreferrer">
                <img
                  src="../img/playstore.png" // Replace with a local asset if needed
                  alt="Play Store"
                  className="store-icon-img"
                />
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div id="footer">
        <div className="container text-center">
          <div className="footer-content">
            <span className="footer-text">
              Bhawan Care by Chaturdha Projects & Services Pvt Ltd
            </span>
            <span className="vertical-line"></span>
            <div className="footer-social">
              <ul>
                <li>
                  <AnimatedComponent animationType="bounce">
                  <a href={props.data ? props.data.facebook : "loading"} target="_blank" rel="noreferrer">
                      <i className="fa fa-facebook"></i>
                    </a>
                  </AnimatedComponent>
                </li>
                <li>
                  <AnimatedComponent animationType="bounce">
                    <a href={props.data ? props.data.twitter : "loading"} target="_blank" rel="noreferrer">
                      <i className="fa fa-twitter"></i>
                    </a>
                  </AnimatedComponent>
                </li>
                <li>
                  <AnimatedComponent animationType="bounce">
                    <a href={props.data ? props.data.youtube : "loading"} target="_blank" rel="noreferrer">
                      <i className="fa fa-youtube"></i>
                    </a>
                  </AnimatedComponent>
                </li>
              </ul>
            </div>
          </div>
          <div className="footer-links">
            <a href="#privacy">Privacy Policy</a> | <a href="#terms" >T & C</a>
          </div>
        </div>
      </div>
    </div>
  );
};
