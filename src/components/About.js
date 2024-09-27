import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';
import './About.css'; 
import ownerPhoto from '../assets/owner.jpg'; 

const About = () => {
    const location = useLocation();

    // Update active tab based on previous navigation state
    useEffect(() => {
        // Scroll to top when the component mounts
        window.scrollTo(0, 0);
    }, [location.state]);

    return (
        <div className="about-container">
            <h1>About Us</h1>
            <img src={ownerPhoto} alt="Owner" className="owner-photo" />
            <h3><span className="highlight">Miss. Goureeshwari Obbineni</span></h3>
            <p className="about-text">
                Welcome to The Glam Salon! We are dedicated to providing you with the best beauty services.
                Our owner, <span className="highlight">Goureeshwari Obbineni</span>, has years of experience in the fashion industry and is passionate about making 
                everyone look and feel their best.
            </p>
            <blockquote className="quote">
                "Beauty begins the moment you decide to be yourself." - Coco Chanel
            </blockquote>
            <blockquote className="quote">
                "Invest in your hair, it’s the crown you never take off." - Unknown
            </blockquote>
            <p className="owner-info">
            <span className="highlight">Goureeshwari Obbineni</span> has a vision of creating a welcoming space where everyone feels at home. With a team 
                of skilled professionals, we offer a range of services tailored to your needs.
            </p>
            <h3> 
                <span className="highlight">Kudos to our young entrepreneur!!</span>
            </h3>
        </div>
    );
};

export default About;
