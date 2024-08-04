import React, { useState, useEffect } from 'react';
import './gotop.css'; // Ensure this is the correct path to your CSS file
import { FaArrowUp } from 'react-icons/fa'; // You need to install react-icons package

const ScrollToTopButton = () => {
  const [isVisible, setIsVisible] = useState(false);

  const toggleVisibility = () => {
    if (window.pageYOffset > 300) {
      setIsVisible(true);
    } else {
      setIsVisible(false);
    }
  };

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    window.addEventListener('scroll', toggleVisibility);
    return () => {
      window.removeEventListener('scroll', toggleVisibility);
    };
  }, []);

  return (
    <div className="scroll-to-top">
      {isVisible && 
        <button 
          onClick={scrollToTop} 
          className={`scroll-button ${isVisible ? 'scroll-button-fade-in' : 'scroll-button-fade'}`}
        >
          <FaArrowUp className="scroll-icon" />
        </button>
      }
    </div>
  );
};

export default ScrollToTopButton;
