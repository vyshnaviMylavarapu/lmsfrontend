import React from 'react';

const Courses = () => {
  const handleNavigation = (path) => {
    window.location.href = path; // Redirects to the specified path
  };

  return (
    <div style={styles.outerContainer}>
      <div style={styles.container}>
        <h1 style={styles.title}>Courses Management</h1>
        <div style={styles.cardContainer}>
          <div 
            style={styles.card} 
            onClick={() => handleNavigation('/admin/courses/add')}
          >
            <h2 style={styles.cardTitle}>Add Course</h2>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigation('/admin/courses/delete')}
          >
            <h2 style={styles.cardTitle}>Delete Course</h2>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigation('/admin/courses/view')}
          >
            <h2 style={styles.cardTitle}>View Course</h2>
          </div>
          <div 
            style={styles.card} 
            onClick={() => handleNavigation('/admin/courses/edit')}
          >
            <h2 style={styles.cardTitle}>Edit Course</h2>
          </div>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  outerContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    height: '100vh',
    background: '#f9f9f9',
    fontFamily: 'Poppins, sans-serif',
  },
  container: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
    padding: '40px',
    borderRadius: '20px',
    backgroundColor: 'white',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.1)',
    width: '90%',
    maxWidth: '800px',
  },
  title: {
    fontSize: '36px',
    fontWeight: 700,
    color: '#333',
    marginBottom: '30px',
  },
  cardContainer: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(150px, 1fr))',
    gap: '20px',
    width: '100%',
  },
  card: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    padding: '20px',
    borderRadius: '15px',
    background: '#333',
    color: 'white',
    cursor: 'pointer',
    boxShadow: '0px 5px 10px rgba(0, 0, 0, 0.2)',
    transition: 'transform 0.3s ease, box-shadow 0.3s ease',
  },
  cardTitle: {
    fontSize: '18px',
    fontWeight: 'bold',
    textAlign: 'center',
    margin: 0,
  },
  cardHover: {
    transform: 'scale(1.05)',
    boxShadow: '0px 8px 15px rgba(0, 0, 0, 0.3)',
  },
};

// Adding hover effect
document.addEventListener('mouseover', (event) => {
  if (event.target.closest('.card')) {
    event.target.closest('.card').style.transform = styles.cardHover.transform;
    event.target.closest('.card').style.boxShadow = styles.cardHover.boxShadow;
  }
});
document.addEventListener('mouseout', (event) => {
  if (event.target.closest('.card')) {
    event.target.closest('.card').style.transform = '';
    event.target.closest('.card').style.boxShadow = '';
  }
});

export default Courses;
