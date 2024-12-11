import React, { useState, useEffect } from "react";
import axios from "axios";

const ProfessorHome = () => {
  const [facultyId, setFacultyId] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8080/facultyhome") // Replace with your backend API endpoint
      .then((response) => {
        setFacultyId(response.data.facultyId); // Adjust based on the backend response structure
      })
      .catch((error) => {
        console.error("Error fetching faculty ID:", error);
      });
  }, []);

  return (
    <div style={styles.container}>
      {/* Header Section */}
      <header style={styles.header}>
        <h1 style={styles.title}>Welcome, {facultyId || "Loading..."}</h1>
        <h2 style={styles.quote}>
          "An investment in knowledge pays the best interest."
        </h2>
        <p style={styles.tagline}>
          ✦ Manage Courses ✦ Engage with Students ✦ Empower Learning ✦
        </p>
      </header>

      {/* Features Section */}
      <div style={styles.features}>
        <div style={styles.featureItem}>
          <h3 style={styles.featureTitle}>Manage Courses</h3>
          <p style={styles.featureDescription}>
            Create, manage, and deliver courses with ease.
          </p>
        </div>
        <div style={styles.featureItem}>
          <h3 style={styles.featureTitle}>Student Interaction</h3>
          <p style={styles.featureDescription}>
            Connect with students, grade assignments, and track progress.
          </p>
        </div>
        <div style={styles.featureItem}>
          <h3 style={styles.featureTitle}>Support & Feedback</h3>
          <p style={styles.featureDescription}>
            Get the help you need and provide feedback to students.
          </p>
        </div>
      </div>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#f7f8fc",
    color: "black",
    padding: "50px 20px",
    minHeight: "100vh",
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    gap: "30px",
  },
  header: {
    textAlign: "center",
    background: "linear-gradient(135deg, #000, #333)",
    color: "#fff",
    padding: "50px",
    width: "100%",
    maxWidth: "900px",
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)",
  },
  
    title: {
      fontSize: "40px",
      fontWeight: "700",
      margin: "0",
      color: "#fff", // Changed from #ffd700 to #fff
    },
  
  
  quote: {
    fontSize: "22px",
    fontStyle: "italic",
    margin: "20px 0",
    color: "#fff",
    opacity: "0.9",
  },
  tagline: {
    fontSize: "16px",
    color: "#ddd",
    letterSpacing: "1px",
  },
  features: {
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
    gap: "30px",
    width: "100%",
    maxWidth: "1200px",
  },
  featureItem: {
    background: "linear-gradient(135deg, #fff, #f9f9f9)",
    padding: "30px",
    borderRadius: "15px",
    border: "2px solid black", // Black border added here
    boxShadow: "0 8px 15px rgba(0, 0, 0, 0.1)",
    textAlign: "center",
    transition: "transform 0.3s ease, box-shadow 0.3s ease",
    position: "relative",
    overflow: "hidden",
  },
  featureTitle: {
    fontSize: "24px",
    fontWeight: "600",
    color: "#333",
    marginBottom: "15px",
    textShadow: "1px 1px 2px rgba(0, 0, 0, 0.1)",
  },
  featureDescription: {
    fontSize: "16px",
    color: "#555",
    lineHeight: "1.6",
    marginBottom: "0",
  },
};

export default ProfessorHome;
