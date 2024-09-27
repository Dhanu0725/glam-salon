import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './HamburgerMenu.css'; // Create and style this file for mobile menu

const HamburgerMenu = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <div className="hamburger-menu">
            <div className={`hamburger-icon ${menuOpen ? 'open' : ''}`} onClick={toggleMenu}>
                <div className="line"></div>
                <div className="line"></div>
                <div className="line"></div>
            </div>

            {menuOpen && (
                <div className="menu-content">
                    <Link to="/" onClick={toggleMenu}>Home</Link>
                    <Link to="/about" onClick={toggleMenu}>About</Link>
                    <Link to="/services" onClick={toggleMenu}>Services</Link>
                    <Link to="/contact" onClick={toggleMenu}>Contact</Link>
                </div>
            )}
        </div>
    );
};

export default HamburgerMenu;
