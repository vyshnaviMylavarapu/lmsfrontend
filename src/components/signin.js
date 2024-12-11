import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const Signin = () => {
  const navigate = useNavigate();
  const [loginType, setLoginType] = useState("user"); // Determines whether user or faculty login is active
  const [formData, setFormData] = useState({
    username: "",
    password: "",
    facultyid: "",
    facpass: "",
  });
  const [error, setError] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleLoginType = (type) => {
    setLoginType(type);
    setError("");
    setFormData({
      username: "",
      password: "",
      facultyid: "",
      facpass: "",
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (loginType === "user") {
      const { username, password } = formData;

      // Validation
      if (!username || !password) {
        setError("Both username and password are required for user login.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/signin", {
          params: { username, password },
        });

        if (response.data === "user") {
          alert("User login successful");
          localStorage.setItem("loggedInUser", username);
          navigate("/user/home1");
        } else if (username === "admin" && password === "admin") {
          navigate("/admin/professor");
        } else {
          alert("Invalid credentials for user login");
        }
      } catch (err) {
        console.error(err);
        alert("Error during user login. Please check your connection.");
      }
    } else if (loginType === "faculty") {
      const { facultyid, facpass } = formData;

      // Validation
      if (!facultyid || !facpass) {
        setError("Both faculty ID and password are required for faculty login.");
        return;
      }

      try {
        const response = await axios.get("http://localhost:8080/signinfac", {
          params: { facultyid, facpass },
        });

        if (response.data === "faculty") {
          alert("Faculty login successful");
          localStorage.setItem("loggedInUser", facultyid);
          navigate("/professor/home");
        } else {
          alert("Invalid credentials for faculty login");
        }
      } catch (err) {
        console.error(err);
        alert("Error during faculty login. Please check your connection.");
      }
    }
  };

  return (
    <div style={styles.backgroundContainer}>
      <div style={styles.signinContainer}>
        <div style={styles.buttonContainer}>
          <button
            style={{
              ...styles.topButton,
              backgroundColor: loginType === "user" ? "#333" : "#ccc",
            }}
            onClick={() => handleLoginType("user")}
          >
            Login as User
          </button>
          <button
            style={{
              ...styles.topButton,
              backgroundColor: loginType === "faculty" ? "#333" : "#ccc",
            }}
            onClick={() => handleLoginType("faculty")}
          >
            Login as Faculty
          </button>
        </div>
        <h2 style={styles.heading}>Sign In</h2>
        <form style={styles.form}>
          {loginType === "user" ? (
            <>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  name="username"
                  value={formData.username}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Username"
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Password"
                />
              </div>
            </>
          ) : (
            <>
              <div style={styles.formGroup}>
                <input
                  type="text"
                  name="facultyid"
                  value={formData.facultyid}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Faculty ID"
                />
              </div>
              <div style={styles.formGroup}>
                <input
                  type="password"
                  name="facpass"
                  value={formData.facpass}
                  onChange={handleChange}
                  style={styles.input}
                  placeholder="Faculty Password"
                />
              </div>
            </>
          )}

          {error && <p style={styles.error}>{error}</p>}

          <button type="submit" style={styles.loginButton} onClick={handleSubmit}>
            Login
          </button>

          <div style={styles.linksContainer}>
            <button
              type="button"
              style={styles.linkButton}
              onClick={() => navigate("/signup")}
            >
              Can't Login?
            </button>
            <button
              type="button"
              style={styles.linkButton}
              onClick={() => alert("Please contact support for assistance with password recovery.")}>
              Forgot Password?
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

const styles = {
  backgroundContainer: {
    minHeight: "100vh",
    backgroundImage: `url('https://img.freepik.com/premium-photo/black-white-photo-old-lighted-open-book-wooden-table-library_123211-3394.jpg')`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    display: "flex",
    alignItems: "center",
    fontFamily: "Poppins, sans-serif",
  },
  signinContainer: {
    width: "400px",
    padding: "30px",
    background: "rgba(255, 255, 255, 0.6)", // Light semi-transparent background
    backdropFilter: "blur(10px)", // Adds a blur effect for a glassy look
    borderRadius: "15px",
    boxShadow: "0 6px 12px rgba(0, 0, 0, 0.1)",
    color: "white",
    position: "absolute",
    left: "3%", // Shifts the container to the left
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "space-between",
    marginBottom: "20px",
  },
  topButton: {
    width: "48%",
    padding: "10px",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    color: "#fff",
    fontSize: "14px",
    backgroundColor: "#333",
    transition: "background-color 0.3s ease",
  },
  heading: {
    marginBottom: "30px",
    fontSize: "24px",
    fontWeight: "600",
    color: "#000",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  formGroup: {
    width: "100%",
    marginBottom: "15px",
  },
  input: {
    width: "100%",
    padding: "10px",
    fontSize: "14px",
    borderRadius: "8px",
    border: "1px solid #ccc",
    outline: "none",
    backgroundColor: "#f7f7f7",
    color: "#333",
  },
  loginButton: {
    width: "100%",
    padding: "10px",
    backgroundColor: "#1a1a1a",
    color: "#fff",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    fontSize: "14px",
    marginTop: "15px",
    transition: "background-color 0.3s ease",
  },
  linksContainer: {
    marginTop: "10px",
    display: "flex",
    justifyContent: "space-between",
    width: "100%",
  },
  linkButton: {
    background: "none",
    border: "none",
    color: "#1a1a1a",
    fontSize: "12px",
    cursor: "pointer",
    textDecoration: "underline",
    padding: "5px",
    transition: "color 0.3s ease",
  },
  error: {
    color: "#ff4d4d",
    fontSize: "12px",
    marginBottom: "10px",
  },
};

export default Signin;
