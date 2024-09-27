import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Header.css';
import logo from '../assets/logo.png';

const Header = () => {
    const navigate = useNavigate();

    const handleAboutClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        navigate('/', { state: { scrollToAbout: true } }); // Navigate to home with state
    };

    const handleHomeClick = (e) => {
        e.preventDefault(); // Prevent default link behavior
        navigate('/', { state: { scrollToHome: true } }); // Navigate to home with state
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
            </div>
        </header>
    );
};

export default Header;
