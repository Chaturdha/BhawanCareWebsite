import React, { useState } from "react";
import AnimatedComponent from "./animation";
import CareerModal from "./careerModal";


export const Career = () => {
    const [isModalOpen, setIsModalOpen] = useState(false);
    const openModal = () => setIsModalOpen(true);
    const closeModal = () => setIsModalOpen(false);

    return (
        <div className="career-container" style={{display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', }}>
            <img
                src="img/career.jpg"
                alt="Career"
                className="career-image"
            />
            <p style={{ textAlign: 'center', marginBottom: '20px', width: '50%', }}>We are excited to invite you to explore a rewarding career with us at CPS (P) LTD ! Join a team where your skills are valued, and your growth is supported. Discover your potential and make an impact with us.</p>
            <p style={{ textAlign: 'left', marginBottom: '20px' }}>Apply now to be part of our journey.</p>
            <h2 style={{ textAlign: 'Center', marginBottom: '20px' }}>JOIN US </h2>
            <button className="btn btn-custom btn-lg" onClick={openModal}>
                Let's Start
            </button>
            <CareerModal isOpen={isModalOpen} onRequestClose={closeModal} />
        </div>
    );
};
