import React from 'react';

const TeamCard = ({ name, role, image, bio, socials }) => {
  return (
    <div className="member-card">
      
      {/* 1. INFO PANEL: Now with higher z-index to ensure clickability */}
      <div className="member-info" style={{ zIndex: 20, position: 'relative' }}>
        <h3 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '4px', color: '#333' }}>
          {name}
        </h3>
        
        <p style={{ 
          fontWeight: '600', 
          color: 'var(--coral-glow)', 
          fontSize: '0.9rem',
          marginBottom: '10px' 
        }}>
          {role}
        </p>
        
        <p style={{ 
          fontStyle: 'italic', 
          color: '#666', 
          fontSize: '0.85rem',
          lineHeight: '1.4',
          marginBottom: '20px'
        }}>
          "{bio}"
        </p>

        {/* SOCIALS SECTION */}
        <div className="card-socials">
          {socials?.instagram && (
            <a 
              href={socials.instagram} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              style={{ pointerEvents: 'auto' }} // Forces the link to be active
            >
              <i className="fab fa-instagram"></i>
            </a>
          )}
          
          {socials?.linkedin && (
            <a 
              href={socials.linkedin} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              style={{ pointerEvents: 'auto' }}
            >
              <i className="fab fa-linkedin"></i>
            </a>
          )}
          
          {socials?.github && (
            <a 
              href={socials.github} 
              target="_blank" 
              rel="noopener noreferrer" 
              className="social-icon"
              style={{ pointerEvents: 'auto' }}
            >
              <i className="fab fa-github"></i>
            </a>
          )}
        </div>
      </div>

      <div className="member-image-side-wrapper" style={{ zIndex: 1, pointerEvents: 'none' }}>
        <img src={image} alt={name} />
      </div>

    </div>
  );
};

export default TeamCard;