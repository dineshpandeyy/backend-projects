import React from "react";

const Button = ({ onClick }) => {
  return (
    <button 
      type="button" 
      className="btn btn-primary btn-lg shadow-lg" 
      onClick={onClick}
      style={{
        position: 'fixed',
        bottom: '30px',
        right: '30px',
        borderRadius: '50px',
        padding: '15px 25px',
        fontSize: '16px',
        fontWeight: '600',
        zIndex: 1000,
        transition: 'all 0.3s ease',
        border: 'none',
        background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)'
      }}
      onMouseOver={(e) => {
        e.target.style.transform = 'scale(1.05)';
        e.target.style.boxShadow = '0 10px 25px rgba(102, 126, 234, 0.4)';
      }}
      onMouseOut={(e) => {
        e.target.style.transform = 'scale(1)';
        e.target.style.boxShadow = '0 4px 15px rgba(0,0,0,0.2)';
      }}
    >
      <span style={{ marginRight: '8px' }}>+</span>
      ADD NEW
    </button>
  );
};

export default Button;
