import React from 'react';
import './Homepage.css';

const Homepage: React.FC = () => {
  const handleLogoHover = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1.05)';
  };

  const handleLogoLeave = (e: React.MouseEvent<HTMLImageElement>) => {
    e.currentTarget.style.transform = 'scale(1)';
  };

  return (
    <div className="homepage-container">
      {/* Logo positioned in upper angle right-hand side */}
      <img 
        src="/TOKNAR-01-NAVY.png"// Adjust the path as necessary
        alt="TOKNAR Logo" 
        className="logo"
        onMouseEnter={handleLogoHover}
        onMouseLeave={handleLogoLeave}
      />
      
      <div className="content">
        {/* Main title */}
        <h1 className="title">TOKNAR</h1>
        {/* Subtitle below the title */}
        <p className="subtitle">
          High-Tech Innovation in Embedded Trade Finance
        </p>
      </div>
    </div>
  );
};

export default Homepage;