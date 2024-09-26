import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaAngleDown, FaAngleRight } from 'react-icons/fa';

export const Navigation = ({ setActiveSection, features }) => {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [activeFeature, setActiveFeature] = useState(null);

  const handleDropdownEnter = () => {
    setIsDropdownOpen(true);
  };

  const handleDropdownLeave = () => {
    setIsDropdownOpen(false);
    setActiveFeature(null);
  };

  const toggleSubDropdown = (feature) => {
    setActiveFeature(activeFeature === feature ? null : feature);
  };

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
              <div
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
              <Link to="/#about" className="page-scroll" onClick={() => setActiveSection('about')}>
                About Us
              </Link>
            </li>

            <li>
              <Link to="/#services" className="page-scroll" onClick={() => setActiveSection('services')}>
                Interface
              </Link>
            </li>
            <li
              className="dropdown-feature"
              onMouseEnter={handleDropdownEnter}
              onMouseLeave={handleDropdownLeave}
            >
              <a href="#features" className="page-scroll">
                <span style={{ display: 'flex', alignItems: 'center' }}>
                  Features
                  <FaAngleDown
                    className="custom-arrow"
                    style={{ cursor: 'pointer', fontSize: "20px", marginLeft: '5px', color: "#E8A905" }}
                  />
                </span>
              </a>
              {isDropdownOpen && (
                <ul className="dropdown-menu">
                  {features.map((feature, index) => (
                    <li
                      key={index}
                      onMouseEnter={() => toggleSubDropdown(feature.name)}
                      onMouseLeave={() => toggleSubDropdown(null)} // Close sub-dropdown when leaving
                    >
                      <a href="#features" className="page-scroll">
                        <span style={{ display: 'flex', alignItems: 'center' }}>
                          {feature.name}
                          <FaAngleRight
                            className="custom-arrow"
                            style={{ cursor: 'pointer', fontSize: "18px", marginLeft: '5px', color: "#E8A905" }}
                          />
                        </span>
                      </a>
                      {activeFeature === feature.name && (
                        <ul className="sub-dropdown">
                          {feature.subFeatures.map((subFeature, i) => (
                            <li key={i}>
                              <Link to={`/#${subFeature.replace(/\s+/g, '-').toLowerCase()}`} className="page-scroll" onClick={() => setActiveSection(subFeature)}>
                                {subFeature}
                              </Link>
                            </li>
                          ))}
                        </ul>
                      )}
                    </li>
                  ))}
                </ul>
              )}
            </li>
            <li>
              <Link to="/#app" className="page-scroll" onClick={() => setActiveSection('app')}>
                Download App
              </Link>
            </li>
            <li>
              <Link to="/#contact" className="page-scroll" onClick={() => setActiveSection('contact')}>
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}