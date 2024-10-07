import React from 'react';
import AnimatedComponent from './animation';

export const Cities = () => {

    const cities = [
        'NEW DELHI', 'UTTAR PRADESH', 'HARYANA', 
        'PUNJAB', 'KARNATAKA', 'TELANGANA', 'TAMIL NADU', 'ANDHRA PRADESH',
        'ODISHA', 'WEST BENGAL', 'MAHARASHTRA', 'GUJRAT', 'RAJASTHAN', 'MADHYA PRADESH', 'CHHATTISGARH',
        'ARUNACHAL PRADESH', 'MEGHALAYA', 'BIHAR', 'MANIPUR', 'KERALA', 'JHARKHAND', 'TRIPURA', 'UTTRAKHAND', 
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

