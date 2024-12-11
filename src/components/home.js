import React from 'react';

const Home = () => {
  return (
    <div style={styles.homeContainer}>
      <link
        href="https://fonts.googleapis.com/css2?family=Poppins:wght@600&family=Roboto+Slab:wght@400;700&display=swap"
        rel="stylesheet"
      />
      <div style={styles.textContainer}>
        <h1 style={styles.heading}>Learning Management System</h1>
        <div style={styles.buttonContainer}>
          <button
            style={styles.signupBtn}
            onClick={() => (window.location.href = '/signup')}
          >
            Sign Up
          </button>
          <button
            style={styles.signinBtn}
            onClick={() => (window.location.href = '/signin')}
          >
            Sign In
          </button>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  homeContainer: {
    backgroundImage:
      "url('https://img.freepik.com/premium-photo/black-white-photo-old-lighted-open-book-wooden-table-library_123211-3394.jpg')", // Replace with your background image URL
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundRepeat: 'no-repeat',
    height: '100vh',
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    fontFamily: 'Roboto Slab, serif',
    textAlign: 'center',
    color: 'white',
  },
  textContainer: {
    padding: '0 20px',
  },
  heading: {
    fontSize: '5rem', // Enlarged font size
    fontWeight: '700',
    fontFamily: '"Roboto Slab", serif',
    marginBottom: '30px',
    textTransform: 'uppercase',
    letterSpacing: '2px',
    textShadow: '2px 5px 10px rgba(0, 0, 0, 0.8)', // Text shadow for clarity on background
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    gap: '20px',
    marginTop: '20px',
  },
  signupBtn: {
    padding: '15px 50px',
    backgroundColor: 'black', // White background
    color: 'white', // Black text
    border: '2px solid #fff',
    borderRadius: '50px', // More curved style
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
  signinBtn: {
    padding: '15px 50px',
    backgroundColor: 'black', // White background
    color: 'white', // Black text
    border: '2px solid #fff',
    borderRadius: '50px', // More curved style
    fontSize: '16px',
    fontWeight: '600',
    cursor: 'pointer',
    textTransform: 'uppercase',
    transition: 'background-color 0.3s, transform 0.2s',
    boxShadow: '0 5px 15px rgba(0, 0, 0, 0.3)',
  },
};

// Add hover effects for buttons
styles.signupBtn[':hover'] = {
  backgroundColor: '#f0f0f0', // Slightly lighter white
  transform: 'scale(1.05)',
};

styles.signinBtn[':hover'] = {
  backgroundColor: '#f0f0f0', // Slightly lighter white
  transform: 'scale(1.05)',
};

export default Home;
