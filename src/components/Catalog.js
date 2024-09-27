import React from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import './Catalog.css';

const Catalog = () => {
    const location = useLocation();
    const navigate = useNavigate();

    // Extract catalog images, service name, and previous tab from location state
    const { catalogImages = [], serviceName = 'Service', previousTab = 'women' } = location.state || {};

    // Handle the back button click, returning to the correct tab (men or women)
    const handleBackClick = () => {
        navigate('/services', { state: { activeTab: previousTab } });
    };

    return (
        <div className="catalog-page">
            {/* Back Button */}
            <button className="back-button" onClick={handleBackClick}>← Back</button>
            
            {/* Catalog Images Section */}
            <section className="catalog-section">
                {/* Heading inside section */}
                <h2>{serviceName} Catalog</h2>

                {catalogImages.length > 0 ? (
                    <div className="catalog-images">
                        {catalogImages.map((image, index) => (
                            <div key={index} className="catalog-card">
                                <img src={image} alt={`${serviceName} catalog ${index + 1}`} />
                            </div>
                        ))}
                    </div>
                ) : (
                    <p>No catalog images available for this service.</p>
                )}
            </section>
        </div>
    );
};

export default Catalog;
