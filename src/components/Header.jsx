import React, { useState } from 'react';

const Header = () => {
    const [isNavActive, setIsNavActive] = useState(false);

    const handleBarClick = () => {
        setIsNavActive(true);
    };

    const handleCloseClick = () => {
        setIsNavActive(false);
    };

    return (
        <section id="header">
            <a >
                <img src="logo-website.png" className="logo" alt="Logo" />
            </a>

            <div>
                <ul id="navbar" className={isNavActive ? 'active' : ''}>
                    <li><a className="active" >Home</a></li>
                    <li><a >Shop</a></li>
                    <li><a >Blog</a></li>
                    <li><a >About</a></li>
                    <li><a >Contact</a></li>
                    <li id="lg-bag"><a ><i className="bx bx-shopping-bag"></i></a></li>
                    <a id="close" onClick={handleCloseClick}>
                        <i className="bx bx-x"></i>
                    </a>
                </ul>
            </div>

            <div id="mobile">
                <a href="cart.html"><i className="bx bx-shopping-bag"></i></a>
                <i id="bar" className="bx bx-menu" onClick={handleBarClick}></i>
            </div>
        </section>
    );
};

export default Header;
