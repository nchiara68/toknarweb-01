import React from 'react';
import './Homepage.css';

const Homepage: React.FC = () => {
  const handleLogoHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1.1) rotate(5deg)';
    e.currentTarget.style.filter = 'drop-shadow(0 10px 20px rgba(0, 0, 0, 0.3))';
  };

  const handleLogoLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
    e.currentTarget.style.filter = 'none';
  };

  return (
    <div className="homepage-container">
      {/* Animated geometric shapes */}
      <div className="animated-shapes">
        <div className="shape shape-1"></div>
        <div className="shape shape-2"></div>
        <div className="shape shape-3"></div>
      </div>

      {/* Logo positioned in upper right corner */}
      <img 
        src="../../public/TOKNAR-02-WHITE.png"
        alt="TOKNAR Logo" 
        className="logo"
        onMouseEnter={handleLogoHover}
        onMouseLeave={handleLogoLeave}
      />
      
      <div className="content">
        <h1 className="title">TOKNAR</h1>
        <p className="subtitle">
          High-Tech Innovation in Embedded Trade Finance
        </p>
      </div>
    </div>
  );
};

export default Homepage;