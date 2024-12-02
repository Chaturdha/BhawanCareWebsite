import React, { useState } from 'react';
import AnimatedComponent from "./animation";

const FAQPage = () => {
    const faqData = [
        {
            question: '1. What is Bhawan Care?',
            answer: 'Bhawan Care is an innovative society and community management application developed by CPS Pvt Ltd. It is designed to streamline and simplify the management of residential societies and communities. Our app offers a suite of features that help manage various aspects of society life, including tenant details, payment management, maintenance requests, community announcements, and much more. With Bhawan Care, residents and management committees can experience enhanced communication, efficiency, and harmony within their communities.',
        },
        {
            question: '2. How long does it take to install and activate Bhawan Care in our society?',
            answer: 'The installation and activation process for Bhawan Care is designed to be quick and efficient. Once the application is purchased, our dedicated support team will guide you through the setup process. Typically, it takes up to 5 days to complete the installation and activation, depending on the specific requirements and size of your society. Our team ensures a smooth transition and provides comprehensive training to help your society get started with Bhawan Care seamlessly.',
        },
        {
            question: '3. What sort of Services Bhawan Care Offer?',
            answer: 'Bhawan Care is a comprehensive society and community management application with a wide range of features designed to enhance the management and living experience within your society. Some of the key features include:\n' +
                '• Service Request: Submit and track service requests for maintenance and repairs.\n' +
                '• Election Creation: Easily organize and manage society elections.\n' +
                '• Complaint Box: Lodge complaints and track their resolution status.\n' +
                '• Suggestion Box: Share suggestions to improve society management and living.\n' +
                '• Rating Services: Rate services provided within the society.\n' +
                '• Apply for Civil Work: Submit applications for civil work and monitor progress.\n' +
                '• Holiday Management: View and manage society holiday schedules.\n' +
                '• Society Bank Details: Access and manage society bank account details.\n' +
                '• External Worker Management: Keep track of external workers and their activities.\n' +
                '• Arrange a Meeting: Schedule and manage society meetings.\n' +
                '• Garage Rent: Manage garage rental details and payments.\n' +
                '• Emergency Contact: Quickly access emergency contact information.\n' +
                '• Festival Management: Plan and organize society festivals and events.\n' +
                '• Society Rules: Access and review society rules and regulations.\n' +
                '• Laundry Services: Manage and book laundry services.\n' +
                '• Intercom Details: Access intercom details for easy communication.\n' +
                '• Notice Board: View and post important notices and announcements.\n' +
                '• Security Guard Management: Monitor and manage security guard details.\n\n' +
                'Bhawan Care is designed to provide a seamless and efficient experience for society management, ensuring a well-organized and harmonious community.',
        },
        {
            question: '4. Who all are eligible to take Bhawan Care services?',
            answer: 'Bhawan Care services are designed to cater to societies and communities with a minimum of 50 flats or units. If your society meets this requirement, you are eligible to benefit from the comprehensive management features that Bhawan Care offers. Our application is ideal for residential societies looking to streamline operations, enhance communication, and improve overall community living.',
        },
        {
            question: "5. Is Bhawan Care a one-stop solution for every society's need?",
            answer: 'Yes, Bhawan Care is designed to be a comprehensive, one-stop solution for all your society and community management needs. Our app offers a wide range of features, including election creation, service requests, complaint and suggestion boxes, rating services, applying for civil work, holiday management, society bank details, external and internal worker management, meeting arrangements, garage rent, emergency contacts, festival planning, society rules, laundry services, member history, intercom details, notice board, and security guard management. With Bhawan Care, managing your society becomes seamless, efficient, and highly organized.',
        },
        {
            question: '6. Is Bhawan Care compatible for both Android and iOS?',
            answer: 'Yes, Bhawan Care is fully compatible with both Android and iOS platforms. Whether you are using a smartphone or tablet, you can easily download and install Bhawan Care from the Google Play Store for Android devices and the Apple App Store for iOS devices. Our app is designed to provide a seamless and consistent experience across all devices, ensuring that you can manage your society or community efficiently, no matter which operating system you prefer.',
        },
        {
            question: '7. What is our stand on Data Privacy and Protection of our Customers?',
            answer: "At CPS Pvt Ltd, we prioritize the privacy and protection of our customers' data. Bhawan Care is certified for data privacy and protection under ISO 9001:2015, GDPR, PCI-DSS, and SOC 2 TYPE 2 standards. These certifications ensure that we adhere to the highest industry standards for data security.\n\n" +
                'We implement robust security measures, including data encryption and secure access protocols, to protect your personal information at all times. We are committed to maintaining the confidentiality and integrity of your data, complying with all relevant data protection regulations. Your trust and privacy are of utmost importance to us, and we continually strive to ensure your data remains safe and secure.',
        },
    ];
    

    const [selectedQuestion, setSelectedQuestion] = useState(null);

    const handleQuestionClick = (index) => {
        setSelectedQuestion(index === selectedQuestion ? null : index);
    };

    return (
        <div id='FAQ' className="faq-page">
            {/* Animate the FAQ title and intro */}
            <div className="faq-content" >
                <AnimatedComponent animationType="scaleUp">
                    <h2>FAQ</h2>
                </AnimatedComponent>
                <p>Here you'll find answers to common questions about our service.</p>
            </div>

            <div className="questions-list" style={{ width: '65%' }}>
                {faqData.map((item, index) => {
                    const isSelected = selectedQuestion === index;

                    return (
                        <AnimatedComponent animationType="baseline">
                            <div className="question" style={{ marginBottom: '10px' }}>
                                <div
                                    className="question-title"
                                    onClick={() => handleQuestionClick(index)}
                                    style={{ cursor: 'pointer', display: 'flex', justifyContent: 'space-between' }}
                                >
                                    <span>{item.question}</span>
                                    <span className="arrow">{isSelected ? '▲' : '▼'}</span>
                                </div>

                                {/* Animated answer section using expandCollapse animation */}
                                <AnimatedComponent animationType="expandCollapse" isSelected={isSelected}>
                                    <p className="answer" style={{ margin: '10px 0' }}>{item.answer}</p>
                                </AnimatedComponent>
                            </div>
                        </AnimatedComponent>
                    );
                })}
            </div>
        </div>
    );
};

export default FAQPage;