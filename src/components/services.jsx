import React from "react";
import AnimatedComponent from "./animation";

export const Services = (props) => {
  return (
    <div id="services" className="text-center">
      <div className="container">
        <div className="section-title">
        <AnimatedComponent animationType="slideIn" direction="left">
          <h2>Comprehensive Society Management Features</h2>
          </AnimatedComponent>
          <p>
          Essential Features for Seamless Society Living
          </p>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-4">
                  {" "}
                  <i className={d.icon}></i>
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
