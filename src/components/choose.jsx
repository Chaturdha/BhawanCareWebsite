import React from 'react';
import AnimatedComponent from "./animation";

const Choose = () => {
    return (

        <div className="chooseContainer">
            <div className="col-md-10 col-md-offset-1 section-title">
                <AnimatedComponent animationType="scaleUp" >
                    <h2 className='service'>Why Choose Us ?</h2>
                </AnimatedComponent>
            </div>

            <div 
            className="card__container"
            >
                <article 
                className="card__article"
                >
                    <img src="img/image2.jpg" alt="Vancouver Mountains" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">Diverse Expertise Spectrum</span>
                        <h2 className="card__description"> Our team brings a wealth of knowledge and experience that sets us apart.</h2>
                    </div>
                </article>

                <article className="card__article">
                    <img src="img/image.jpg" alt="Poon Hill" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">Individualized Approaches</span>
                        <h2 className="card__description">  We customize our services to meet your specific needs, ensuring optimal results.</h2>
                    </div>
                </article>

                <article className="card__article">
                    <img src="/img/image3.jpg" alt="Bojcin Forest" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">Commitment to Exceptionalism</span>
                        <h2 className="card__description"> Our dedication to exceptionalism inspires us to elevate your experience beyond the ordinary.</h2>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Choose;