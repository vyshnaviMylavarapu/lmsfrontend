import React from 'react';

const Exams = () => {
  const handleNavigation = (path) => {
    window.location.href = path; // Redirects to the specified path
  };

  return (
    <div style={styles.containerb}>
    <div style={styles.container}>
      <h1 style={styles.title}>Exams Management</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleNavigation('/admin/exams/add')} style={styles.button}>
          Add Exams
        </button>
        <button onClick={() => handleNavigation('/admin/exams/delete')} style={styles.button}>
          Delete Exams
        </button>
        <button onClick={() => handleNavigation('/admin/exams/view')} style={styles.button}>
          View Exams
        </button>
        <button onClick={() => handleNavigation('/admin/exams/edit')} style={styles.button}>
          Edit Exams
        </button>
      </div>
    </div>
    </div>
  );
};

// Inline CSS
const styles = {
  container: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    height: '70vh',
    width:'60vw',
    borderRadius:'30px',
    background: 'white', // Light and pale gradient background
    border:'1px solid black',
    marginTop:'-100px',
    fontFamily:'poppins'
  },
  title: {
    fontSize: '32px',
    marginBottom: '50px',
    color: 'black',
    fontWeight:700
  },
  buttonContainer: {
    display: 'grid', // Using grid for a 2x2 layout
    gridTemplateColumns: 'repeat(2, 1fr)', // 2 columns
    gap: '20px', // Space between buttons
    width: '80%', // Limit width for the buttons
    maxWidth: '600px', // Maximum width
  },
  button: {
    padding: '30px', // Increased padding for thicker buttons
    fontSize: '18px',
    fontWeight: 'bold',
    color: 'white',
    border: 'none',
    borderRadius: '45px',
    cursor: 'pointer',
    background: 'black', // Gradient background for buttons
    transition: 'background 0.3s ease',
  },
  containerb:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'130px'
  },
};

export default Exams;
