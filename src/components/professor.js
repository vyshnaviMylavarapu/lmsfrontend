import React from 'react';

const Professor = () => {
  const handleNavigation = (path) => {
    window.location.href = path; // Redirects to the specified path
  };

  return (
    <div style={styles.containerb}>
    <div style={styles.container}>
      <h1 style={styles.title}>Professor Management</h1>
      <div style={styles.buttonContainer}>
        <button onClick={() => handleNavigation('/admin/professor/add')} style={styles.button}>
          Add Professor
        </button>
        <button onClick={() => handleNavigation('/admin/professor/delete')} style={styles.button}>
          Delete Professor
        </button>
        <button onClick={() => handleNavigation('/admin/professor/view')} style={styles.button}>
          View Professor
        </button>
        <button onClick={() => handleNavigation('/admin/professor/edit')} style={styles.button}>
          Edit Professor
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
    background: 'white', // Updated to a more pale gradient
    // You can further adjust the colors here if needed
    marginTop:'-100px',
    fontFamily:'poppins',
    border:'1px solid black',
    borderRadius:'30px',
    width:'60vw',
    display:'flex',
    alignItems:'center',
    justifyContent:'center'
  },

  containerb:{
    display:'flex',
    alignItems:'center',
    justifyContent:'center',
    marginTop:'130px'
  },
  title: {
    fontSize: '32px',
    marginBottom: '20px',
    color: '#000000',
    fontWeight:700,
    marginBottom:'50px'
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
    borderRadius: '50px',
    cursor: 'pointer',
    background: 'black', // Gradient background for buttons
    transition: 'background 0.3s ease',
  },
};

export default Professor;
