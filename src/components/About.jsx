import React from 'react';
import './AboutContact.css';

const About = () => {
    return (
        <div className="page-container">
            <div className="page-header">
                <h1 className="page-title">About Us</h1>
                <p className="page-subtitle">Premium Products | Trusted Support | Reseller Training</p>
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
                            At Infinex Products, our mission is to enrich everyday living by offering premium-quality products and innovative solutions.
                            We are committed to excellence, aiming to exceed expectations and deliver true value to our customers.
                        </p>
                    </div>

                    <div className="about-section" style={{ "--delay": 2 }}>
                        <h2 className="about-section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
                            </svg>
                            Our Core Values
                        </h2>
                        <ul className="about-description">
                            <li><strong>Uncompromising Quality</strong> – Every product is crafted with precision and held to the highest standards.</li>
                            <li><strong>Forward-Thinking Innovation</strong> – We embrace creativity and technology to bring fresh, effective solutions to market.</li>
                            <li><strong>Customer Fulfillment</strong> – We focus on creating meaningful and rewarding experiences for every client.</li>
                            <li><strong>Integrity & Dependability</strong> – Built on transparency and trust, we stand by our promises and products.</li>
                        </ul>
                    </div>

                    <div className="about-section" style={{ "--delay": 3 }}>
                        <h2 className="about-section-title">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 13.255A23.931 23.931 0 0112 15c-3.183 0-6.22-.62-9-1.745M16 6V4a2 2 0 00-2-2h-4a2 2 0 00-2 2v2m4 6h.01M5 20h14a2 2 0 002-2V8a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Our Expertise
                        </h2>
                        <p className="about-description">
                            Backed by years of hands-on industry experience, our dedicated team understands market demands and customer aspirations.
                            We consistently deliver products that combine functionality, durability, and style.
                        </p>
                    </div>

                    <div className="about-section" style={{ "--delay": 4 }}>
                        <h2 className="about-section-title">
                            🛍️ Our Product Segments
                        </h2>
                        <p className="about-description">
                            We supply a vast range of high-quality products tailored for various needs, available for both retail and wholesale purposes:
                        </p>
                        <ul className="about-description">
                            <li><strong>Home & Living</strong>: Home décor items, furnishing accessories, storage and organization solutions</li>
                            <li><strong>Kitchen & Appliances</strong>: Essential kitchen tools, compact kitchen appliances, modern cooking accessories</li>
                            <li><strong>Food & Grocery</strong>: Packaged food products, organic and specialty food items, daily-use groceries</li>
                            <li><strong>Training & Business Support</strong>: Practical reseller training, business setup guidance for beginners, product knowledge and marketing insights</li>
                            <li><strong>Additional Categories</strong>: Seasonal products, festive collections, trending and fast-moving consumer goods</li>
                        </ul>
                    </div>

                    <div className="about-section" style={{ "--delay": 5 }}>
                        <h2 className="about-section-title">
                            🌐 Sales Platforms
                        </h2>
                        <p className="about-description">
                            Our products are available on major e-commerce platforms for convenient access:
                        </p>
                        <ul className="about-description">
                            <li>Amazon</li>
                            <li>Meesho</li>
                            <li>Flipkart</li>
                        </ul>
                        <p className="about-description">
                            We also provide bulk and wholesale supply to resellers, retailers, and entrepreneurs looking to build or expand their businesses.
                        </p>
                    </div>

                    <div className="about-section" style={{ "--delay": 6 }}>
                        <h2 className="about-section-title">
                            🤝 Let’s Connect
                        </h2>
                        <p className="about-description">
                            Want to explore our wide range of products or start your own business journey with us?<br />
                            Contact us today for product catalogs, pricing, training details, and partnership opportunities.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default About;
