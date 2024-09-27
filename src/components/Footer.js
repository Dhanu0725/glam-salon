import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faGoogle } from '@fortawesome/free-brands-svg-icons';
import './Footer.css'; 
import logo from '../assets/logo.png'; // Adjust this path as necessary

const Footer = () => {
    return (
        <footer className="footer">
            <div className="footer-content">
                <div className="footer-section">
                    <div className="contact-info">
                        <h3>Contact Us</h3>
                        <h4>Phone: </h4>
                        <p> +91 9888598111 <br /> 
                            +91 9888707444 </p>
                        <h4>Address: </h4>
                        <p> 3rd Floor, Plot no: 10, <br />
                            X road, beside HP Petrol Bunk, <br />
                            Shivshankar Nagar, <br />
                            Kuntloor, Hayathnagar, <br />
                            Telangana 501505, India</p>
                    </div>
                </div>
                <div className="social-media">
                    <h3>Follow Us</h3>
                    <div className="social-media">
                        <a href="https://www.instagram.com/theglamsalon_/" target="_blank" rel="noopener noreferrer">
                            <FontAwesomeIcon icon={faInstagram} size="2x" />
                        </a>
                        <a href="mailto:theglamsalon.hyt@gmail.com" target="_blank" rel="noopener noreferrer">
                        <   FontAwesomeIcon icon={faGoogle} size="2x" />
                        </a>
                    </div>
                    <img src={logo} alt="Logo" className="footer-logo" />
                </div>
                <div className="working-hours">
                    <h3>Working Hours</h3>
                    <p>Mon: 9 AM - 9 PM</p>
                    <p>Tue: 9 AM - 9 PM</p>
                    <p>Wed: 9 AM - 9 PM</p>
                    <p>Thu: 9 AM - 9 PM</p>
                    <p>Fri: 9 AM - 9 PM</p>
                    <p>Sat: 9 AM - 9 PM</p>
                    <p>Sun: 9 AM - 9 PM</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
