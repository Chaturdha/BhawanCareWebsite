import React from 'react';
import AnimatedComponent from './animation';

export const Cities = () => {

    const cities = [
        'ANDHRA PRADESH', 'ASSAM', 'BIHAR', 'CHHATTISGARH',
        'GOA', 'GUJRAT', 'HARYANA', 'HIMACHAL PRADESH', 'JHARKHAND', 
        'KARNATAKA', 'KERALA', 'MADHYA PRADESH', 'MAHARASHTRA', 'NEW DELHI', 
        'ODISHA', 'PUNJAB', 'RAJASTHAN', 'TAMIL NADU', 'TELANGANA',
        'TRIPURA', 'UTTAR PRADESH', 'UTTRAKHAND', 'WEST BENGAL', 
    ];

    return (
        <div id='city'>
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

