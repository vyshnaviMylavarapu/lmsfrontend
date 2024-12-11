import React from 'react';
import { useNavigate } from 'react-router-dom';

const ProfessorNavbar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    alert("Logged out successfully");
    navigate("/signin");
  };

  return (
    <div style={styles.navbarContainer}>
      <div style={styles.navbar}>
        <div style={styles.logo}>Professor Dashboard</div>
        <div style={styles.navLinks}>
          <a href="/professor/home" style={styles.navLink}>Home</a>
          <a href="/professor/getcourses/" style={styles.navLink}>Courses</a>
          <a href="/professor/exams" style={styles.navLink}>Exams</a>
          <a href="/professor/assignments" style={styles.navLink}>Assignments</a>
          <a href="/professor/viewassignments" style={styles.navLink}>view Assignments</a>
          
          <button onClick={handleLogout} style={styles.logoutButton}>
            Logout
          </button>
        </div>
      </div>
    </div>
  );
};

// Inline CSS
const styles = {
  navbarContainer: {
    width: '100%',
    backgroundColor: '#ffffff',
    padding: '20px 0',
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
    color: 'black',
    fontFamily: 'poppins',
  },
  navbar: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 20px',
    color: '#000000',
  },
  logo: {
    color: 'black',
    fontSize: '22px',
    fontWeight: 'bold',
  },
  navLinks: {
    display: 'flex',
    alignItems: 'center',
  },
  navLink: {
    color: 'black',
    textDecoration: 'none',
    margin: '0 30px',
    fontSize: '15px',
  },
  logoutButton: {
    padding: '12px 25px',
    backgroundColor: '#000000',
    color: 'white',
    border: 'none',
    borderRadius: '35px',
    cursor: 'pointer',
    fontSize: '15px',
  },
};

export default ProfessorNavbar;
