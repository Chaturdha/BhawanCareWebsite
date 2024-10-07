import React from "react";
import { Link } from "react-router-dom"; // Import Link from react-router-dom
import AnimatedComponent from "./animation";

export const Features = (props) => {
  return (
    <div id="features" className="text-center">
      <div className="container">
        <div className="col-md-10 col-md-offset-1 section-title">
          <AnimatedComponent animationType="scaleUp">
            <h2>Our App Interface</h2>
          </AnimatedComponent>
        </div>
        <div className="row">
          {props.data
            ? props.data.map((d, i) => (
                <div key={`${d.title}-${i}`} className="col-xs-6 col-md-3">
                  {/* Wrap the card with a Link */}
                  <Link to={`/common/${d.route}`}> {/* Slashes in route */}
                    <i className={d.icon}></i>
                  </Link>
                  <h3 style={{ color: "#E8A905" }}>{d.title}</h3>
                    <p>{d.text}</p>
                
                </div>
              ))
            : "Loading..."}
        </div>
      </div>
    </div>
  );
};
