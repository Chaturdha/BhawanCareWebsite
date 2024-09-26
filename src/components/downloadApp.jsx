import React from "react";
import AnimatedComponent from "./animation";

export const DownloadApp = (props) => {
    return (
        <div id="app" className="text-center">
            <div className="container">
                <div className="section-title">
                    <AnimatedComponent animationType="scaleUp">
                        <h2>Download the App</h2>
                    </AnimatedComponent>
                    <p>Available on Play Store and App Store</p>
                </div>
                <div className="row"> {/* No changes here */}
                    {props.data
                        ? props.data.map((d, i) => (
                            <div key={`${d.name}-${i}`} className="col-md-3 col-sm-6 team">
                                <div className="thumbnail">
                                    <AnimatedComponent animationType="zoomIn">
                                        <img src={d.img} alt="..." className="team-img" />
                                    </AnimatedComponent>
                                    <div className="caption">
                                        <AnimatedComponent animationType="bounce">
                                            <a className="btn btn-custom btn-lg page-scroll">
                                                Download App
                                            </a>
                                        </AnimatedComponent>
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
