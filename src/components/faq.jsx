import React, { useState } from 'react';
import AnimatedComponent from "./animation";

const FAQPage = () => {
    const faqData = [
        { question: 'What can I do with the Bhawan Care app?', 
            answer: 'The Bhawan Care app allows residents to manage maintenance payments, report issues, book amenities, receive notifications, and connect with neighbors, all from the convenience of their mobile devices.' },
        { question: 'What features does the Bhawan Care app offer for residents?', 
            answer: 'The Bhawan Care app provides features such as maintenance charge tracking, complaint management, facility booking, event notifications, community discussions and many more, allowing residents to manage their society activities conveniently from home.' },
        { question: 'How can I report an issue or complaint through the app?',
            answer: 'You can report an issue by navigating to the "Complaints" section in the app. Simply fill out the complaint form with the necessary details and submit it. Our team will address your concern promptly.' },
        { question: 'Can I make online payments for maintenance charges through the app?', 
            answer: ' Yes, residents can make secure online payments for maintenance charges directly through the app. You will receive a confirmation once the payment is processed successfully.' },
        { question: 'How do I receive updates and notifications from the society?', 
            answer: 'The Bhawan Care app sends real-time notifications for important updates, events, and announcements from the society. You can customize your notification preferences in the app settings.' },
        { question: 'Is it safe to make payments through the app?', 
            answer: 'Yes, the Bhawan Care app uses secure payment gateways to ensure that all transactions are encrypted and safe, giving you peace of mind when making payments.' },
        { question: 'What should I do if I encounter technical issues with the app?', 
            answer: ' If you experience any technical issues, you can contact our support team via the "Help" section in the app, where you can submit a query or find troubleshooting tips.' },
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