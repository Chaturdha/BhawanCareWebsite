import AnimatedComponent from "./animation";
import { Image } from "./image";
import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export const Scroller = (props) => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 3,  // Change this based on your layout
        slidesToScroll: 1,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                },
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                },
            },
        ],
    };

    return (
        <div id="scroller" className="text-center">
            <div className="container">
                <div className="section-title">
                    <AnimatedComponent animationType="scaleUp">
                        <h2>What Sets Us Apart? </h2>
                    </AnimatedComponent>
                    <p>Enhancing Community Experience and Engagement</p>
                </div>
                <div className="scroller-items">
                    {props.data ? (
                        <div>
                        <Slider {...settings}>
                            {props.data.map((d, i) => (
                                <div key={`${d.title}-${i}`} className="scroller-item">
                                    <AnimatedComponent animationType="fadeIn">
                                        <Image
                                            title={d.title}
                                            paragraph={d.paragraph}
                                            // largeImage={d.largeImage}
                                            smallImage={d.smallImage}
                                        />
                                    </AnimatedComponent>
                                </div>
                            ))}
                         </Slider>
                        </div>
                    ) : (
                        "Loading..."
                    )}
                </div>
            </div>
        </div>
    );
};
