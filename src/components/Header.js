import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false); // State for hamburger menu
    const navigate = useNavigate();

    const handleAboutClick = (e) => {
        e.preventDefault(); 
        navigate('/', { state: { scrollToAbout: true } }); 
        closeMenu(); // Close the menu after clicking
    };

    const handleHomeClick = (e) => {
        e.preventDefault(); 
        navigate('/', { state: { scrollToHome: true } }); 
        closeMenu(); // Close the menu after clicking
    };

    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen); // Toggle the menu open/close
    };

    const closeMenu = () => {
        setIsMenuOpen(false); // Function to close the menu
    };

    return (
        <header>
            <div className="header-container">
                <div className="logo-container">
                    <img src={logo} alt="Salon Logo" className="logo" />
                    <h1 className="salon-name">The Glam Salon</h1>
                </div>
                <nav className="navbar">
                    <a href="/" onClick={handleHomeClick}>Home</a>
                    <a href="/" onClick={handleAboutClick}>About</a>
                    <Link to="/services">Services</Link>
                    <Link to="/gallery">Gallery</Link>
                </nav>
                <div className="book-appointment">
                    <a 
                        href="https://wa.me/919888598111?text=Hi%20there,%20I'd%20like%20to%20book%20an%20appointment!" 
                        target="_blank" 
                        rel="noopener noreferrer"
                    >
                        <button className="book-button">Book Appointment</button>
                    </a>
                </div>
                {/* Hamburger Menu */}
                <div className="hamburger-menu" onClick={toggleMenu}>
                    &#9776; {/* Unicode for hamburger icon */}
                </div>
            </div>
            {/* Dropdown for mobile navigation */}
            {isMenuOpen && (
                <div className="mobile-menu">
                    <Link to="/" onClick={handleHomeClick}>Home</Link>
                    <Link to="/" onClick={handleAboutClick}>About</Link>
                    <Link to="/services" onClick={closeMenu}>Services</Link>
                    <Link to="/gallery" onClick={closeMenu}>Gallery</Link>
                </div>
            )}
        </header>
    );
};

export default Header;
