import React, { useState, useEffect } from "react";
import AnimatedComponent from "./animation";
import { Player } from '@lottiefiles/react-lottie-player';

export const AboutContact = (props) => {
    useEffect(() => {
        // Scroll to the top when the component mounts
        window.scrollTo(0, 0);
      }, []); 
  return (
    <div id="about">
      <div className="container">
        <div className="row">
          <div className="col-xs-12 col-md-6">
            {" "}
            {/* <AnimatedComponent animationType="scaleUp" >
            <img src="img/about.jpg" className="img-responsive" alt="" />{" "}
            </AnimatedComponent> */}
             <Player
            autoplay
            loop
            src="../img/Animation - 1727245978046.json"
            style={{ height: '400px', width: '400px' }}
          />
          </div>
          <div className="col-xs-12 col-md-6">
            <div className="about-text">
            <AnimatedComponent animationType="scaleUp" >
              <h2>Contact Us</h2>
              </AnimatedComponent>
              <p>{props.data ? props.data.paragraph : "loading..."}</p>
              {/* <h3>Why Choose Us?</h3>
              <div className="list-style">
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why.map((d, i) => (
                          <li key={`${d}-${i}`}>{d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
                <div className="col-lg-6 col-sm-6 col-xs-12">
                  <ul>
                    {props.data
                      ? props.data.Why2.map((d, i) => (
                          <li key={`${d}-${i}`}> {d}</li>
                        ))
                      : "loading"}
                  </ul>
                </div>
              </div> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
