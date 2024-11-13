import React from "react";
import AnimatedComponent from "./animation";
import { Contact } from "./contact";

export const AboutPage = ({ data }) => {
  return (
    <div id="about-page">
      <div className="container">
        {/* Image Section */}
        <div className="image-container">
          <img
            src="img/about.png"
            className="img-responsive"
            alt="About"
            style={{ width: "100%", height: "auto", borderRadius: "10px" }}
          />
        </div>

        {/* Content Section */}
        <div className="row">
          <div className="col-xs-12 col-md-12">
            <div className="about-text">
              <AnimatedComponent animationType="scaleUp">
                <h2>About Us</h2>
              </AnimatedComponent>
              <p>{data ? data.para7 : "loading..."}</p>
              <p>{data ? data.para8 : "loading..."}</p>
              <p>{data ? data.para9 : "loading..."}</p>
              <p>{data ? data.para10 : "loading..."}</p>
              <p>{data ? data.para11 : "loading..."}</p>

              <h2>What We Do</h2>
              <p>{data ? data.para3 : "loading..."}</p>

              <div className="list-style row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data
                      ? data.Why.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data
                      ? data.Why2.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div>

              <h2>Our Vision</h2>
              <p>{data ? data.para5 : "loading..."}</p>

              <h2>Our Core Values</h2>
              <div className="list-style row">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data
                      ? data.Why3.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {data
                      ? data.Why4.map((d, i) => <li key={`${d}-${i}`}>{d}</li>)
                      : "loading"}
                  </ul>
                </div>
              </div>

              <h2>Join Us</h2>
              <p>{data ? data.para6 : "loading..."}</p>

              {/* <h2>Company Overview</h2>
              <p>{data ? data.para7 : "loading..."}</p>
              <p>{data ? data.para8 : "loading..."}</p>
              <p>{data ? data.para9 : "loading..."}</p>
              <p>{data ? data.para10 : "loading..."}</p>
              <p>{data ? data.para11 : "loading..."}</p> */}
            </div>
          </div>
        </div>
      </div>          
    </div>
  );
};
