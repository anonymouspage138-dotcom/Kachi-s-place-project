import React from 'react';

const PageBanner = ({ title, breadcrumb, image }) => {
  const bannerStyle = {
    backgroundImage: image ? `linear-gradient(to left, rgba(0, 0, 0, 0.45), rgba(0, 0, 0, 0.55)), url(${image})` : 'none',
    backgroundColor: image ? 'transparent' : '#f8f9fa',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    backgroundRepeat: 'no-repeat',
    padding: '140px 20px',
    minHeight: '400px',
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    justifyContent: 'center',
    textAlign: 'center',
    color: image ? '#ffffff' : '#333333'
  };

  // Typography styles designed to match Kachi's Place Navbar links
  const navbarFontStyles = {
    fontFamily: '-apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, "Helvetica Neue", Arial, sans-serif', // Clean geometric sans-serif
    textTransform: 'uppercase', // Forces all caps like "HOME MENU ABOUT CONTACT"
    letterSpacing: '0.12em',    // Matches the spacing between characters in the navbar
    textShadow: '2px 2px 5px rgba(0, 0, 0, 0.75)' // Keeps text highly readable over the background
  };

  return (
    <div style={bannerStyle}>
      <section>
        {/* Title Style */}
        <h1 style={{ 
          ...navbarFontStyles, 
          fontSize: '3.8rem', 
          fontWeight: '700', 
          marginBottom: '12px' 
        }}>
          {title}
        </h1>
        
        {/* Breadcrumb Style */}
        <p style={{ 
          ...navbarFontStyles, 
          fontSize: '1rem', 
          fontWeight: '500',
          opacity: 0.95 
        }}>
          {breadcrumb}
        </p>
      </section>
    </div>
  );
};

export default PageBanner;
