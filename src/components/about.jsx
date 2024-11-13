import React from "react";
import { Link } from "react-router-dom";
import AnimatedComponent from "./animation";

export const About = (props) => {
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            <AnimatedComponent animationType="scaleUp">
              <img src="img/about.png" className="img-responsive" alt="About" />
            </AnimatedComponent>
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
              <AnimatedComponent animationType="scaleUp">
                <h2>About Us</h2>
              </AnimatedComponent>
              <p>{props.data ? props.data.para7 : "loading..."}</p>

              <h2>Our Core Values</h2>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why3.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why4.map((d, i) => (
                        <li key={`${d}-${i}`}>{d}</li>
                      ))
                      : "loading"}
                  </ul>
                </div>
              </div>

              {/* Button to redirect to the full about page */}
              <div className="text-center" style={{ marginTop: "20px" }}>
                <Link to="/about-page">
                  <button className="btn btn-custom btn-lg">
                    Learn More
                  </button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
