import React from 'react';
import SpeakerImage from '../assets/dap.jpg'; // import your speaker image here
import StarsBackground from '../assets/stars.webp'; // import your stars background image here
import SpaceBackground from '../assets/space-background.jpg'; // import your space background image here

const SpeakerSession = () => {
  return (
    <div
      style={{
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        height: '100vh',
        position: 'absolute',
        top: '0',
        left: '0',
        right: '0',
        zIndex: '999', // Ensure it's above other elements
        backgroundImage: `url(${StarsBackground})`, // Background image
        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: '20px',
      }}
    >
      <div
        style={{
          backgroundImage: `url(${SpaceBackground})`, // Space background image for the card
          backgroundSize: 'cover',
          borderRadius: '10px',
          boxShadow: '0 0 10px rgba(0, 0, 0, 0.1)',
          padding: '20px',
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          maxWidth: '80%',
          color: '#fff', // Text color
          fontFamily: 'Arial, sans-serif', // Font family
        }}
      >
        <img
          src={SpeakerImage}
          alt="Speaker"
          style={{
            width: '250px',
            height: '250px',
            borderRadius: '50%',
            marginBottom: '20px',
          }}
        />
        <div style={{ textAlign: 'center' }}>
          <h2 style={{ fontSize: '24px', fontWeight: 'bold', marginBottom: '10px' }}>Chandrayan: Through the Eyes of a Scientist</h2>
          <p style={{ marginBottom: '5px' }}>Dr. Arpit Patel</p>
          <p style={{ marginBottom: '5px' }}>12 March 2024</p>
          <p style={{ marginBottom: '5px' }}>9:30 AM - 10:30 AM</p>
          {/* Add more session details here */}
        </div>
      </div>
    </div>
  );
};

export default SpeakerSession;
