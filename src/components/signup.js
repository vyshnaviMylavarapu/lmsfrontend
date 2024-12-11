import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';

const Signup = () => {
  const navigate = useNavigate();
  const [isFaculty, setIsFaculty] = useState(false);
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmPassword: '',
    facultyid: '',
    facpass: '',
    desig: '',
    branch: '',
    course: ''
  });
  const [error, setError] = useState('');

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (isFaculty) {
      const { facultyid, facpass, desig, branch, course } = formData;

      if (!facultyid || !facpass || !desig || !branch || !course) {
        setError('All fields are required for faculty signup');
        return;
      }

      axios.post("http://localhost:8080/signupfac", {
        facultyid,
        facpass,
        desig,
        branch,
        course,
      })
        .then(() => {
          navigate("/signin");
        })
        .catch((error) => {
          console.error('Signup error:', error);
          setError("An error occurred during faculty registration. Please try again.");
        });
    } else {
      const { username, email, password, confirmPassword } = formData;

      if (!username || !email || !password || !confirmPassword) {
        setError('All fields are required');
        return;
      }

      if (password !== confirmPassword) {
        setError('Passwords do not match');
        return;
      }

      axios.post("http://localhost:8080/signup", {
        username,
        email,
        password,
      })
        .then(() => {
          navigate("/signin");
        })
        .catch((error) => {
          console.error('Signup error:', error);
          setError("An error occurred during user registration. Please try again.");
        });
    }

    setError('');
  };

  const handleInputFocus = (e) => {
    e.target.style.borderColor = '#007bff';
    e.target.style.backgroundColor = '#fff';
  };

  const handleInputBlur = (e) => {
    e.target.style.borderColor = '#ccc';
    e.target.style.backgroundColor = '#fafafa';
  };

  return (
    <div style={styles.container}>
      <div style={styles.formContainer}>
        <h2 style={styles.title}>Sign Up</h2>
        <div style={styles.buttonGroup}>
          <button
            style={{ ...styles.toggleButton, backgroundColor: isFaculty ? '#ddd' : '#000', color: isFaculty ? '#000' : '#fff' }}
            onClick={() => setIsFaculty(false)}
          >
            Signup as User
          </button>
          <button
            style={{ ...styles.toggleButton, backgroundColor: isFaculty ? '#000' : '#ddd', color: isFaculty ? '#fff' : '#000' }}
            onClick={() => setIsFaculty(true)}
          >
            Signup as Faculty
          </button>
        </div>
        <form onSubmit={handleSubmit} style={styles.form}>
          {isFaculty ? (
            <>
              <input
                style={styles.input}
                name="facultyid"
                placeholder="Faculty ID"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="facpass"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="desig"
                placeholder="Designation"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="branch"
                placeholder="Branch"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="course"
                placeholder="Course"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </>
          ) : (
            <>
              <input
                style={styles.input}
                name="username"
                placeholder="Username"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="email"
                placeholder="Email"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="password"
                type="password"
                placeholder="Password"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
              <input
                style={styles.input}
                name="confirmPassword"
                type="password"
                placeholder="Confirm Password"
                onChange={handleChange}
                onFocus={handleInputFocus}
                onBlur={handleInputBlur}
              />
            </>
          )}
          {error && <p style={styles.error}>{error}</p>}
          <button type="submit" style={styles.submitButton}>Register</button>
        </form>
        <p style={styles.signupRedirect}>
          Already have an account? <Link to="/signin" style={styles.link}>Sign In</Link>
        </p>
      </div>
    </div>
  );
};

const styles = {
  container: {
    display: 'grid',
    justifyContent: 'flex-start',  // Align the form to the left
    alignItems: 'flex-start',  // Align to the top of the screen
    height: '100vh',
    backgroundImage: 'url("https://img.freepik.com/premium-photo/black-white-photo-old-lighted-open-book-wooden-table-library_123211-3394.jpg")',
    backgroundSize: 'cover',
    backgroundPosition: 'center',
    backgroundAttachment: 'fixed',
    paddingLeft: '50px',  // Added padding to move the content towards the left
    paddingTop: '100px',  // Adjusted padding to move the grid down
  },
  formContainer: {
    width: '400px',
    padding: '30px',
    borderRadius: '12px',
    backgroundColor: 'rgba(255, 255, 255, 0.5)',  // Adjust transparency
    boxShadow: '0px 4px 30px rgba(0,0,0,0.15)',
    textAlign: 'center',
  },
  title: {
    marginBottom: '20px',
    color: '#333',
    fontSize: '24px',
    fontWeight: '600',
  },
  buttonGroup: {
    display: 'flex',
    justifyContent: 'space-around',
    marginBottom: '20px',
  },
  toggleButton: {
    padding: '10px 20px',
    borderRadius: '6px',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '14px',
    width: '48%',
  },
  form: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  input: {
    width: '100%',
    padding: '10px 15px',
    margin: '8px 0',
    borderRadius: '6px',
    border: '1px solid #ccc',
    fontSize: '14px',
    backgroundColor: '#fafafa',
    transition: 'all 0.3s',
  },
  submitButton: {
    width: '100%',
    padding: '10px 0',
    marginTop: '15px',
    borderRadius: '6px',
    backgroundColor: '#000',
    color: '#fff',
    border: 'none',
    cursor: 'pointer',
    fontWeight: '600',
    fontSize: '16px',
    transition: 'background-color 0.3s',
  },
  error: {
    color: 'red',
    fontSize: '14px',
    marginTop: '10px',
  },
  signupRedirect: {
    marginTop: '15px',
    fontSize: '14px',
    color: '#666',
  },
  link: {
    color: 'black',
    textDecoration: 'underline',
  },
};

export default Signup;
