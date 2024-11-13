import React from 'react';
import AnimatedComponent from "./animation";

const Choose = () => {
    return (

        <div id='#choose' className="chooseContainer">
            <div className="col-md-10 col-md-offset-1 section-title">
                <AnimatedComponent animationType="scaleUp" >
                    <h2 className='service centerAlign'>Why Choose Us ?</h2>
                </AnimatedComponent>
            </div>

            <div
                className="card__container"
            >
                <article
                    className="card__article"
                >
                    <img src="img/choose/image2.png" alt="Vancouver Mountains" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">Choice Of Every Society </span>
                        <h2 className="card__description"> It is the manifestation of cultural norms, ethical standards, and societal aspirations, which evolve over time as the society faces new challenges and opportunities.</h2>
                    </div>
                </article>

                <article className="card__article">
                    <img src="img/choose/image.jpg" alt="Poon Hill" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">One Step Solution</span>
                        <h2 className="card__description">"Providing simple, effective solutions that empower communities to make better choices, one step at a time.</h2>
                    </div>
                </article>

                <article className="card__article">
                    <img src="/img/choose/image3.jpg" alt="Bojcin Forest" className="card__img" />

                    <div className="card__data">
                        <span className="card__title">Data Privacy</span>
                        <h2 className="card__description">Ensuring privacy protects individuals from identity theft, financial fraud, and other malicious activities.</h2>
                    </div>
                </article>
            </div>
        </div>
    );
};

export default Choose;