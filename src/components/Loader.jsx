import React from 'react';
import './Loader.css';

const Loader = ({ isOverlay, text }) => {
    const content = (
        <div className="loader-content">
            <span className="loader"></span>
            {text && <p className="loader-text">{text}</p>}
        </div>
    );

    if (isOverlay) {
        return (
            <div className="loader-overlay">
                {content}
            </div>
        );
    }

    return (
        <div className="loader-container">
            {content}
        </div>
    );
};

export default Loader; 