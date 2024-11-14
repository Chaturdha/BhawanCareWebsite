import { useState } from "react";
import emailjs from '@emailjs/browser';
import React from "react";
import AnimatedComponent from "./animation";

const initialState = {
  name: "",
  email: "",
  message: "",
  contactNumber: "",
  whatsappNumber: "",
  city: "",
  societyName: "",
};

export const Contact = (props) => {
  const [{ name, email, message, contactNumber, whatsappNumber, city, societyName }, setState] = useState(initialState);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => ({ ...prevState, [name]: value }));
  };

  const clearState = () => setState({ ...initialState });

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(name, email, message, contactNumber, whatsappNumber, city, societyName);

    emailjs
      .sendForm(
        "service_4211m8l", // replace with your EmailJS service ID
        "template_5agje9l", // replace with your EmailJS template ID
        e.target, // form element
        "7JbFWgAbd51t2TcEH" // replace with your EmailJS public key
      )
      .then(
        (result) => {
          console.log(result.text);
          // clearState(); 
          alert("Submitted Successfully!");
        },
        (error) => {
          console.log(error.text);
          alert(`Error Sending Message! ${error.message || error.text || 'Unknown error'}`);
        }
      );
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
                        value={name}
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
                        value={email}
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
                        name="contactNumber"
                        className="form-control"
                        placeholder="Contact Number *"
                        value={contactNumber}
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
                        name="whatsappNumber"
                        className="form-control"
                        placeholder="WhatsApp Number (Optional)"
                        value={whatsappNumber}
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
                        value={city}
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
                        name="societyName"
                        className="form-control"
                        placeholder="Society Name *"
                        value={societyName}
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
                    value={message}
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
                  <a href={props.data ? props.data.twitter : "loading"} target="_blank" rel="noreferrer">
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
