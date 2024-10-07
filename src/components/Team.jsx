import React from "react";
import AnimatedComponent from "./animation";

export const Team = (props) => {
  return (
    <div id="team" className="text-center">
      <div className="container">
        <div className="col-md-8 col-md-offset-2 section-title">
        <AnimatedComponent animationType="scaleUp" >
          <h2>Meet Our Team</h2>
          </AnimatedComponent>
          <p>
          Get to know the passionate individuals behind our success, working together 
          to achieve excellence.
          </p>
        </div>
        <div id="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                  <div className="thumbnail">
                    {" "}
                    <AnimatedComponent animationType="fadeIn">
                    <img src={d.img} alt="..." className="team-img" />
                    </AnimatedComponent>
                    <div className="caption">
                      <h4>{d.name}</h4>
                      <p>{d.job}</p>
                    </div>
                  </div>
                </div>
              ))
            : "loading"}
        </div>
      </div>
    </div>
  );
};
