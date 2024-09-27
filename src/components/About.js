// src/pages/About.js
import React from 'react';
import './About.css'; // Create this CSS file for styles

const About = () => {
    return (
        <div className="about-container">
            <h2>About Us</h2>
            <p>Welcome to <strong>The Glam Salon</strong>, where style knows no boundaries! Our unisex salon is dedicated to providing a welcoming and inclusive environment for everyone.</p>
            <p>Whether you’re looking for a fresh haircut, vibrant color, nail art, or a relaxing treatment, our talented team of stylists is here to bring your vision to life.</p>
            <p>At Glam Salon, we believe that beauty is for all. Our experienced professionals stay up-to-date with the latest trends and techniques to ensure you receive the best service tailored to your unique style.</p>
            <p>We prioritize your comfort and satisfaction, making every visit a rejuvenating experience. Join us for a pampering session, and let us help you express your individuality.</p>
            <p>Discover your new favorite salon where every cut, color, and style reflects the real you!</p>

            <div className="owner-stylist-container">
                <img src="../assets/owner.jpg" alt="Owner" />
                <img src="../assets/stylist.jpg" alt="Stylists" />
            </div>

            <div className="quotes">
                <blockquote>"Beauty is not in the face; beauty is a light in the heart." - Kahlil Gibran</blockquote>
                <blockquote>"Elegance is the only beauty that never fades." - Audrey Hepburn</blockquote>
            </div>
        </div>
    );
};

export default About;
