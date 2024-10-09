import React, { useState, useEffect, useRef } from "react";
import { Link } from "react-router-dom";
import {
  FaAngleDown,
} from 'react-icons/fa'; // Importing the needed icons

export const Navigation = ({ features,menuData }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const handleCall = () => {
    window.open('tel:+1800 2575 2244'); // Your phone number
  };

  // Handle click outside the dropdown to close it
  useEffect(() => {
    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <nav id="menu" className="navbar navbar-default navbar-fixed-top">
      <div className="container">
        <div className="navbar-header">
          <button
            type="button"
            className="navbar-toggle collapsed"
            data-toggle="collapse"
            data-target="#bs-example-navbar-collapse-1"
          >
            <span className="sr-only">Toggle navigation</span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
            <span className="icon-bar"></span>
          </button>
          <Link className="navbar-brand page-scroll" to="/#page-top" onClick={() => setActiveSection('home')}>
            <div
              style={{ position: 'relative', textAlign: 'center' }}
              onContextMenu={(e) => {
                e.preventDefault();
                alert('Due to privacy reasons, you are not allowed to download this logo.');
              }}
            >
              <img
                src="/img/portfolio/logo.png"
                alt="Logo"
                style={{ height: '120px', width: 'auto', paddingTop: '10px' }}
                draggable="false"
              />
              <div className="logo"
                style={{
                  position: 'absolute',
                  top: 0,
                  left: 0,
                  width: '100%',
                  height: '100%',
                  backgroundColor: 'transparent',
                }}
              ></div>
            </div>

            Bhawan Care
          </Link>
        </div>

        <div className="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
          <ul className="nav navbar-nav navbar-right">
            <li>
              <Link to="/#about" className="page-scroll">
                About Us
              </Link>
            </li>
            <li className="dropdown-feature" ref={dropdownRef}>
              <a className="page-scroll" onClick={toggleDropdown} style={{ cursor: 'pointer' }}>
                <span style={{ display: 'flex', alignItems: 'center', width: '100%' }}>
                  Features
                  <FaAngleDown
                    className="custom-arrow"
                    style={{ cursor: 'pointer', fontSize: "20px", marginLeft: '5px', color: "#E8A905" }}
                  />
                </span>
              </a>
              {isDropdownOpen && (
                <div className="dropdown-container">
                  <div className="dropdown-content">
                    <div className="dropdown-column">
                      <div style={{ padding: 15,  borderRadius: 15, height: 200 }}>
                        <img src="../img/header/small4.png" alt="description of image" style={{ width: 2000, height: 120, objectFit: "cover", padding: 10 }} />
                        <h4>Management & Services</h4>
                      </div>
                      <div>
                          <div className="featureIcon">
                            <img  src="../img/header/image1.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                            <a href="#allFeature">Maintenance Charge</a>
                          </div>
                       
                        <div className="featureIcon">
                        <img  src="../img/header/image2.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                        <a href="#allFeature">Election</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image3.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Service Request</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image4.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Garage Rent</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image5.png" alt="description of image" style={{width: 25, height: 25,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Festival</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image6.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Meeting Arrangement</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image7.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Collection & Expenses</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image8.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Ladies Club</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image9.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Security Gate</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image10.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Fun2shh Chat</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image11.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Sell/Rent</a>
                        </div>
                      </div>
                     

                    </div>
                    <div className="dropdown-column with-line">
                      <div style={{ padding: 15,  borderRadius: 15, height: 200 }}>
                        <img src="../img/header/small5.png" alt="description of image" style={{ width: 2000, height: 120, objectFit: "cover",  padding: 10 }} />
                        <h4>Society Information</h4>
                      </div>

                      <div>
                        <div className="featureIcon">
                        <img  src="../img/header/image12.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Notice Board</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image13.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Emergency Contacts</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image14.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">External workers</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image15.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Laundry</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image16.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Corpus Fund</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image17.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Local Programs</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image18.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Society Information</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image19.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Society Rule</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image20.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Internal Worker</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image21.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Intercom Details</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image22.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Holidays</a>
                        </div>
                        <div className="featureIcon">
                        <img  src="../img/header/image23.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Society Members History</a>
                        </div>
                        <div className="featureIcon" style={{ paddingBottom: 10 }}>
                        <img  src="../img/header/image24.png" alt="description of image" style={{width: 20, height: 20,  objectFit: "cover" ,  marginRight: 10}} />
                          <a href="#allFeature">Society Bank Details</a>
                        </div>
                      </div>
                    </div>

                  </div>
                </div>
              )}
            </li>
            <li>
              <Link to="/#app" className="page-scroll">
                Download App
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="page-scroll">
                Contact Us
              </Link>
            </li>
            <li>
              <Link to="/#" className="page-scroll" onClick={handleCall}>
              +1800-202-2000
              </Link>

            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};
