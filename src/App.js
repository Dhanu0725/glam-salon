import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, useLocation } from 'react-router-dom';
import '@fortawesome/fontawesome-free/css/all.min.css';
import Header from './components/Header';
import HamburgerMenu from './components/HamburgerMenu';
import Home from './components/Home';
import Services from './components/Services';
import Gallery from './components/Gallery';
import Catalog from './components/Catalog';
import About from './components/About'; // Import About component
import Footer from './components/Footer';
import './App.css';

const App = () => {
  const location = useLocation();
  const [showScroll, setShowScroll] = useState(false);

  // Function to handle the scroll event
  const handleScroll = () => {
    if (window.pageYOffset > 300) {
      setShowScroll(true);
    } else {
      setShowScroll(false);
    }
  };

  // Scroll to top function
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    window.addEventListener('scroll', handleScroll);

    // Cleanup event listener on component unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  // Determine if the footer should be shown based on the current path
  const showFooter = ['/services', '/gallery', '/catalog', '/about'].includes(location.pathname);

  return (
    <>
      <Header />
      <HamburgerMenu />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/catalog" element={<Catalog />} />
        <Route path="/about" element={<About />} /> {/* Add route for About page */}
      </Routes>

      {/* Conditionally render Footer only for specified pages */}
      {showFooter && <Footer />}

      {/* Scroll to Top Button */}
      {showScroll && (
        <button
          className="scroll-to-top"
          onClick={scrollToTop}
          style={{ display: showScroll ? 'block' : 'none' }}
        >
          &#8679; {/* Upward arrow symbol */}
        </button>
      )}
    </>
  );
};

// Wrap the App component in the Router component
const WrappedApp = () => (
  <Router>
    <App />
  </Router>
);

export default WrappedApp;
