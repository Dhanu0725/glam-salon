import React, { useEffect, useRef, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import './Home.css';
import Footer from '../components/Footer';
import background1 from '../assets/bg2.jpeg';
import background2 from '../assets/bg.jpeg';
import background3 from '../assets/bg3.jpeg';
import background4 from '../assets/bg4.jpg';
import background5 from '../assets/bg5.jpg';
import serviceImage1 from '../assets/service1.jpg';
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import serviceImage4 from '../assets/service4.jpg'; 
import { Link, useLocation } from 'react-router-dom';
import HamburgerMenu from '../components/HamburgerMenu';  // Add this import

const slides = [
    { image: background1, text: 'STEP IN,<br />SIT AND RELAX', paragraph: 'Beauty is our passion. We will take care of everything.' },
    { image: background2, text: '' },
    { image: background3, text: 'EXPERIENCE <br /> THE BEST <br /> GROOMING <br /> AND <br /> RELAXATION.' },
    { image: background4, text: 'TIME FOR A  <br /> FACIAL!', paragraph: 'Make time for yourself, keep the glow going.' },
    { image: background5, text: '' },
];

const Home = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const intervalRef = useRef();
    const aboutSectionRef = useRef(null);
    const location = useLocation();

    useEffect(() => {
        AOS.init({
            duration: 1000,
            once: false
        });
    }, []);

    useEffect(() => {
        const handleAutoScroll = () => {
            setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
        };

        intervalRef.current = setInterval(handleAutoScroll, 4000);

        return () => {
            clearInterval(intervalRef.current);
        };
    }, []);

    useEffect(() => {
        if (location.state?.scrollToAbout) {
            setTimeout(() => {
                if (aboutSectionRef.current) {
                    aboutSectionRef.current.scrollIntoView({ behavior: 'smooth' });
                }
            }, 100);
        }

        if (location.state?.scrollToHome) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }
    }, [location]);

    const goToNextSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    };

    const goToPreviousSlide = () => {
        setCurrentIndex((prevIndex) => (prevIndex - 1 + slides.length) % slides.length);
    };

    return (
        <div className="home-container" id="home">
            {/* Hamburger Menu for Mobile */}
            <HamburgerMenu />

            {/* Background Image Slideshow */}
            <div className="background-image" style={{ backgroundImage: `url(${slides[currentIndex].image})` }}>
                <div className="text-overlay text-left">
                    <h1 dangerouslySetInnerHTML={{ __html: slides[currentIndex].text }}></h1>
                    {slides[currentIndex].paragraph && <p className="paragraph-overlay">{slides[currentIndex].paragraph}</p>}
                </div>
            </div>
            <button onClick={goToPreviousSlide} className="scroll-button left">&lt;</button>
            <button onClick={goToNextSlide} className="scroll-button right">&gt;</button>
            <div className="pagination">
                {slides.map((_, index) => (
                    <span key={index} className={`dot ${currentIndex === index ? 'active' : ''}`} onClick={() => setCurrentIndex(index)}></span>
                ))}
            </div>

            {/* About Us Section */}
            <div className="about-services-container">
                <section id="about-us" className="section about-us-container" data-aos="flip-right" ref={aboutSectionRef}>
                    <div className="about-us-content">
                        <h2 data-aos="fade-up">About Us</h2>
                        <div className="about-us-text-container">
                            <p className="about-us-text" data-aos="fade-up" data-aos-delay="100">
                                Welcome to <span className="highlight">Glam Salon</span>, where style knows no boundaries!
                            </p>
                            <p className="about-us-text" data-aos="fade-up" data-aos-delay="200">
                                Our unisex salon is dedicated to providing a welcoming and inclusive environment for everyone.
                                Whether you’re looking for a fresh haircut, vibrant color, facial, or a relaxing treatment, 
                                our talented team of stylists is here to bring your vision to life.
                            </p>
                            <p className="about-us-text" data-aos="fade-up" data-aos-delay="300">
                                At Glam Salon, we believe that beauty is for all. Our experienced professionals stay 
                                up-to-date with the latest trends and techniques to ensure you receive the best service 
                                tailored to your unique style.
                            </p>
                            <p className="about-us-text" data-aos="fade-up" data-aos-delay="400">
                                We prioritize your comfort and satisfaction, making every visit a rejuvenating experience.
                                Discover your new favorite salon where every cut, color, and style reflects the real you!
                            </p>
                            <Link to="/about">
                                <button className="learn-more-btn" data-aos="fade-up" data-aos-delay="500">Learn More</button>
                            </Link>
                        </div>
                    </div>
                </section>

                {/* Services Section */}
                <section id="services" className="home-services-section" data-aos="flip-right" data-aos-delay="500">
                    <h2 data-aos="fade-up">Our Services</h2>
                    <div className="services-grid">
                        <div className="service" data-aos="fade-up" data-aos-delay="500">
                            <div className="service-image">
                                <img src={serviceImage1} alt="Haircut" />
                                <div className="service-overlay">
                                    <h3>Hair Care</h3>
                                </div>
                            </div>
                        </div>
                        <div className="service" data-aos="fade-up" data-aos-delay="700">
                            <div className="service-image">
                                <img src={serviceImage2} alt="Facial" />
                                <div className="service-overlay">
                                    <h3>Skin Care</h3>
                                </div>
                            </div>
                        </div>
                        <div className="service" data-aos="fade-up" data-aos-delay="900">
                            <div className="service-image">
                                <img src={serviceImage3} alt="Manicure" />
                                <div className="service-overlay">
                                    <h3>Manicure & Pedicure</h3>
                                </div>
                            </div>
                        </div>
                        <div className="service" data-aos="fade-up" data-aos-delay="1100">
                            <div className="service-image">
                                <img src={serviceImage4} alt="Massage" />
                                <div className="service-overlay">
                                    <h3>Bridal</h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <Link to="/services">
                        <button className="see-more-btn" data-aos="fade-up" data-aos-delay="1100">See More</button>
                    </Link>
                </section>
            </div>
            <Footer />
        </div>
    );
};

export default Home;
