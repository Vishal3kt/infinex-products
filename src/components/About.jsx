import React from 'react';
import './AboutContact.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">About Us</h1>
                <p className="page-subtitle">Your trusted source for high-quality products</p>
            </div>

            <div className="about-content">
                <div className="about-text">
                    <div className="about-section" style={{ "--delay": 1 }}>
                        <h2 className="about-section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                            </svg>
                            Our Mission
                        </h2>
                        <p className="about-description">
                            At Infinex Products, we are committed to delivering exceptional quality and innovative solutions to our customers. Our mission is to provide products that enhance your daily life while maintaining the highest standards of excellence.
                        </p>
                    </div>

                    <div className="about-section" style={{ "--delay": 2 }}>
                        <h2 className="about-section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Our Values
                        </h2>
                        <p className="about-description">
                            Quality, innovation, and customer satisfaction are at the heart of everything we do. We believe in building lasting relationships with our clients through transparency, reliability, and exceptional service.
                        </p>
                    </div>

                    <div className="about-section" style={{ "--delay": 3 }}>
                        <h2 className="about-section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Our Experience
                        </h2>
                        <p className="about-description">
                            With years of industry experience, we have developed a deep understanding of our customers' needs. Our team of experts works tirelessly to ensure that every product meets our rigorous quality standards.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About; 