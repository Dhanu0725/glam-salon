import React, { useState, useEffect } from 'react';
import { useNavigate, useLocation } from 'react-router-dom';
import './Services.css';
import serviceImage1 from '../assets/service1.jpg'; 
import serviceImage2 from '../assets/service2.jpg';
import serviceImage3 from '../assets/service3.jpg';
import serviceImage4 from '../assets/service4.jpg';
import serviceImage5 from '../assets/service5.jpg';
import serviceImage6 from '../assets/service6.jpg';
import serviceImage7 from '../assets/service7.jpg';
import serviceImage8 from '../assets/service8.jpg';
import catalogImage1 from '../assets/skincare-catalog.jpg';  
import catalogImage2 from '../assets/skincare-catalog1.jpg';
import catalogImage3 from '../assets/skincare-catalog2.jpg';
import catalogImage4 from '../assets/skincare-catalog3.jpg';
import catalogImage5 from '../assets/skincare-catalog4.jpg';
import catalogImage6 from '../assets/haircare-catalog1.jpg';
import catalogImage7 from '../assets/haircare-catalog2.jpg';
import catalogImage8 from '../assets/haircare-catalog3.jpg';
import catalogImage9 from '../assets/manicure-pedicure-catalog.jpg';
import catalogImage10 from '../assets/bridal-catalog.jpg';
import catalogImage11 from '../assets/skincare-catalog5.jpg';  
import catalogImage12 from '../assets/skincare-catalog6.jpg';
import catalogImage13 from '../assets/haircare-catalog4.jpg';  
import catalogImage14 from '../assets/haircare-catalog5.jpg';
import catalogImage15 from '../assets/manicure-pedicure-catalog1.jpg';  
import catalogImage16 from '../assets/groom-catalog.jpg';

const Services = () => {
    const [activeTab, setActiveTab] = useState('women');
    const navigate = useNavigate();
    const location = useLocation();

    // Update active tab based on previous navigation state
    useEffect(() => {
        if (location.state?.activeTab) {
            setActiveTab(location.state.activeTab);
        }
    }, [location.state]);

    const servicesData = {
        women: [
            {
                name: 'Skin Care',
                image: serviceImage1,
                catalogImages: [catalogImage1, catalogImage2, catalogImage3, catalogImage4, catalogImage5], 
            },
            {
                name: 'Hair Care',
                image: serviceImage2,
                catalogImages: [catalogImage6, catalogImage7, catalogImage8],  
            },
            {
                name: 'Manicure & Pedicure',
                image: serviceImage3,
                catalogImages: [catalogImage9],  
            },
            {
                name: 'Bridal',
                image: serviceImage4,
                catalogImages: [catalogImage10],
            },
        ],
        men: [
            {
                name: 'Skin Care',
                image: serviceImage5,
                catalogImages: [catalogImage11, catalogImage12], 
            },
            {
                name: 'Hair Care',
                image: serviceImage6,
                catalogImages: [catalogImage13, catalogImage14],  
            },
            {
                name: 'Manicure & Pedicure',
                image: serviceImage7,
                catalogImages: [catalogImage15],  
            },
            {
                name: 'Groom',
                image: serviceImage8,
                catalogImages: [catalogImage16],
            },
        ],
    };

    const handleCategoryClick = (service) => {
        navigate('/catalog', { state: { catalogImages: service.catalogImages, serviceName: service.name, previousTab: activeTab } });
    };

    return (
        <section className="services-section">
            <h2>Our Services</h2>
            <div className="tabs">
                <button
                    className={`tab ${activeTab === 'women' ? 'active' : ''}`}
                    onClick={() => setActiveTab('women')}
                >
                    Women
                </button>
                <button
                    className={`tab ${activeTab === 'men' ? 'active' : ''}`}
                    onClick={() => setActiveTab('men')}
                >
                    Men
                </button>
            </div>
            <div className="services-content">
                {servicesData[activeTab].map((service, index) => (
                    <div
                        key={index}
                        className="services"
                        onClick={() => handleCategoryClick(service)}
                        style={{ cursor: 'pointer' }}
                    >
                        <div className="service-image-wrapper">
                            <img src={service.image} alt={service.name} className="service-image" />
                            <div className="overlay">
                                <div className="service-name">{service.name}</div>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </section> 
    );
};
 
export default Services;
