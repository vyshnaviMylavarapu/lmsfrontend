import React, { useState } from "react";
import axios from "axios";

const FacultyAssignment = () => {
  const [formData, setFormData] = useState({
    startdate: "",
    enddate: "",
    des: "",
    status: "",
    coursename: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Sending the assignment data to the backend
    axios
      .post("http://localhost:8080/addassign", formData) // Update this endpoint as per your backend API
      .then((response) => {
        alert("Assignment added successfully!");
        // Optionally, reset the form
        setFormData({
          startdate: "",
          enddate: "",
          des: "",
          status: "",
          coursename: "",
        });
      })
      .catch((error) => {
        console.error("Error adding assignment:", error);
        alert("Error adding assignment. Please try again.");
      });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Add Assignment</h1>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="coursename" style={styles.label}>
            Course Name:
          </label>
          <input
            type="text"
            id="coursename"
            name="coursename"
            value={formData.coursename}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="startdate" style={styles.label}>
            Start Date:
          </label>
          <input
            type="date"
            id="startdate"
            name="startdate"
            value={formData.startdate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="enddate" style={styles.label}>
            End Date:
          </label>
          <input
            type="date"
            id="enddate"
            name="enddate"
            value={formData.enddate}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="status" style={styles.label}>
            Status:
          </label>
          <input
            type="text"
            id="status"
            name="status"
            value={formData.status}
            onChange={handleChange}
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="des" style={styles.label}>
            Description:
          </label>
          <textarea
            id="des"
            name="des"
            value={formData.des}
            onChange={handleChange}
            required
            style={styles.textarea}
          />
        </div>
        <div style={styles.formGroup}>
          <button type="submit" style={styles.submitButton}>
            Add Assignment
          </button>
        </div>
      </form>
    </div>
  );
};

// Updated inline styles for improved grid layout and form appearance
const styles = {
  container: {
    padding: "30px", // Added more padding for breathing space
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff",
    color: "#000",
    maxWidth: "800px", // Increased max-width for better spacing
    margin: "30px auto", // Adjusted margin
    borderRadius: "8px", // Slightly larger border radius
    boxShadow: "0 4px 12px rgba(0, 0, 0, 0.1)",
  },
  header: {
    textAlign: "center",
    marginBottom: "25px", // Added more margin for spacing
    fontSize: "30px", // Increased font size for better emphasis
    fontWeight: "700",
    color: "#333",
    borderBottom: "2px solid #333", // Thicker underline for emphasis
    paddingBottom: "15px", // Adjusted padding for balance
  },
  form: {
    display: "grid",
    gridTemplateColumns: "1fr 1fr", // Two-column grid layout
    gap: "20px", // Added gap between grid items
    marginTop: "20px",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px", // Added margin for better spacing
    fontWeight: "600",
    fontSize: "16px", // Slightly larger font size for readability
    color: "#333",
  },
  input: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    fontSize: "14px",
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  textarea: {
    padding: "10px",
    borderRadius: "5px",
    border: "1px solid #ccc",
    minHeight: "100px", // Increased height for better usability
    fontSize: "14px",
    resize: "vertical",
    color: "#333",
    backgroundColor: "#f9f9f9",
  },
  submitButton: {
    gridColumn: "span 2", // Button spans across both columns
    padding: "12px 18px",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "5px",
    cursor: "pointer",
    fontSize: "16px",
    fontWeight: "600",
    transition: "background-color 0.3s ease",
  },
  submitButtonHover: {
    backgroundColor: "#555",
  },
};

export default FacultyAssignment;
