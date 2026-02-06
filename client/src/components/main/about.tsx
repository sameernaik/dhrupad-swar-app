import React from 'react';

export function About() {
  return (
    <div 
      className="container" 
      style={{ 
        textAlign: 'center',
        padding: '3rem 1.5rem',
        maxWidth: '800px',
        margin: '0 auto'
      }}
    >
      <div style={{
        marginBottom: '2rem'
      }}>
        <span style={{ 
          color: '#f5a623', 
          fontSize: '1.5rem',
          fontFamily: "'Cormorant Garamond', Georgia, serif"
        }}>॥</span>
        <h2 style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '2.5rem',
          fontWeight: 600,
          color: '#e65c00',
          margin: '0.5rem 0',
          letterSpacing: '2px',
          display: 'inline-block',
          padding: '0 1rem'
        }}>
          Dhrupad Gurukul
        </h2>
        <span style={{ 
          color: '#f5a623', 
          fontSize: '1.5rem',
          fontFamily: "'Cormorant Garamond', Georgia, serif"
        }}>॥</span>
      </div>
      
      <p style={{
        fontFamily: "'Lato', sans-serif",
        fontSize: '1.1rem',
        color: '#6b6b6b',
        lineHeight: 1.8,
        marginBottom: '2rem',
        fontStyle: 'italic'
      }}>
        Preserving the ancient tradition of Dhrupad music
      </p>
      
      <div style={{
        background: 'white',
        borderRadius: '12px',
        padding: '1.5rem',
        boxShadow: '0 4px 20px rgba(230, 92, 0, 0.1)',
        border: '1px solid rgba(245, 166, 35, 0.3)'
      }}>
        <img 
          src={process.env.PUBLIC_URL + '/DhrupadGurukul.png'} 
          alt="Dhrupad Gurukul" 
          style={{ 
            maxWidth: '100%', 
            height: 'auto',
            borderRadius: '8px'
          }}
        />
      </div>
      
      <div style={{
        marginTop: '2rem',
        padding: '1rem',
        borderTop: '1px solid rgba(245, 166, 35, 0.4)'
      }}>
        <p style={{
          fontFamily: "'Cormorant Garamond', Georgia, serif",
          fontSize: '1rem',
          color: '#cc5200',
          margin: 0
        }}>
          Click <strong>Start</strong> to begin analyzing your swar
        </p>
      </div>
    </div>
  );
}
