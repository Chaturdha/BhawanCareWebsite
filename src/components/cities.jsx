import React from 'react';
import AnimatedComponent from './animation';

export const Cities = () => {

    const cities = [
        'NEW DELHI', 'NOIDA', 'GURGAON', 'CHANDIGARH', 'LUCKNOW',
        'AMRITSAR', 'BANGALORE', 'HYDERABAD', 'CHENNAI', 'VISAKHAPATNAM',
        'BHUBANESWAR', 'KOLKOTTA', 'MUMBAI', 'PUNE', 'AHMEDABAD',
        'SURAT', 'JAIPUR', 'NAGPUR', 'INDORE', 'RAIPUR'
    ];

    return (
        < div id='city'>
        <section className="cities-section">
            <AnimatedComponent animationType="scaleUp" >
                <h2 className="section-heading">We’re Here For You</h2>
            </AnimatedComponent>
            <ul className="cities-list">
                {cities.map((city, index) => (
                    <li key={index} className="city-item">{city}</li>
                ))}
            </ul>
        </section>
        </div>
    );
}

