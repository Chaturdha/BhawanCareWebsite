import AnimatedComponent from "./animation";
import { Image } from "./image";
import React from "react";

export const Additional = (props) => {
  return (
    <div id="portfolio" className="text-center">
      <div className="container">
        <div className="section-title">
        <AnimatedComponent animationType="scaleUp" >
          <h2>What Sets Us Apart? </h2>
          </AnimatedComponent>
          <p>
            Enhancing Community Experience and Engagement
          </p>
        </div>
        <div className="row">
          <div className="portfolio-items">
            {props.data
              ? props.data.map((d, i) => (
                <div
                  key={`${d.title}-${i}`}
                  className="col-sm-6 col-md-4 col-lg-4"
                >
                  <AnimatedComponent animationType="fadeIn">
                    <Image
                      title={d.title}
                      paragraph={d.paragraph}
                      // largeImage={d.largeImage}
                      smallImage={d.smallImage}
                    />
                  </AnimatedComponent>
                </div>
              ))
              : "Loading..."}
          </div>
        </div>
      </div>
    </div>
  );
};



