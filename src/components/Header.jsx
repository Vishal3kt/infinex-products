import React, { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';

const Header = () => {
  const [isNavActive, setIsNavActive] = useState(false);
  const location = useLocation(); // ⬅️ get current path

  const handleBarClick = () => setIsNavActive(true);
  const handleCloseClick = () => setIsNavActive(false);

  const isActive = (path) => location.pathname === path ? 'active' : '';

  return (
    <section id="header">
      <Link to="/">
        <img src="logo-website.png" className="logo" alt="Logo" />
      </Link>

      <div>
        <ul id="navbar" className={isNavActive ? 'active' : ''}>
          <li><Link to="/" className={isActive('/')}>Home</Link></li>
          <li><Link to="/about" className={isActive('/about')}>About</Link></li>
          <li><Link to="/contact" className={isActive('/contact')}>Contact</Link></li>
          <a id="close" onClick={handleCloseClick}>
            <i className="bx bx-x"></i>
          </a>
        </ul>
      </div>

      <div id="mobile">
        <i id="bar" className="bx bx-menu" style={{ cursor: 'pointer' }} onClick={handleBarClick}></i>
      </div>
    </section>
  );
};

export default Header;
