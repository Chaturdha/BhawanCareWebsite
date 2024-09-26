import React from "react";
import { Link } from "react-router-dom";
import AnimatedComponent from "./animation";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
          <AnimatedComponent animationType="scaleUp">
            <h2>Features We Provide</h2>
          </AnimatedComponent>
          <p>Essential Features for Seamless Society Living</p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3">
                  {/* <Link to={`/allFeature/${d.name.toLowerCase().replace(" ", "-")}`}> */}
                  <a href="#allFeature">
                    <i className={d.icon} style={{ cursor: "pointer", fontSize: '48px' }}></i>
                    </a>
                  {/* </Link> */}
                  <div className="service-desc">
                    <h3>{d.name}</h3>
                    <p>{d.text}</p>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
