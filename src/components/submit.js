//submit.js

import React, { useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";

const SubmitAssignment = () => {
  const location = useLocation();
  const navigate = useNavigate();

  // Retrieve assignment details with fallback to prevent errors
  const assignment = location.state || {};

  const [formData, setFormData] = useState({
    assid: assignment?.assid || "",
    coursename: assignment?.coursename || "",
    description: assignment?.description || "",
    status: assignment?.status || "",
    file: null,
    file_name: "", // New field for saving file name
  });

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setFormData({ ...formData, file });
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Check if a file is uploaded
    if (!formData.file) {
      alert("Please upload a PDF file before submitting.");
      return;
    }

    // Check if the Save As field is provided
    if (!formData.file_name.trim()) {
      alert("Please provide a name to save the file as.");
      return;
    }

    const data = new FormData();
    data.append("assid", formData.assid);
    data.append("description", formData.description);
    data.append("status", formData.status);
    data.append("coursename", formData.coursename);
    data.append("file", formData.file);
    data.append("file_name", formData.file_name); // Add saveAs field to the request
    console.log(data);
    try {
      const response = await axios.put("http://localhost:8080/upload", data, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log("Response from server:", response.data);
      alert("Assignment submitted successfully!");

      // Redirect to Assignment.js
      navigate("/user/assignment");
    } catch (error) {
      console.error("Error submitting assignment:", error);
      alert("Failed to submit assignment. Please try again.");
    }
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.description}>
        {formData.description || "No Description Provided"}
      </h1>
      <div style={styles.info}>
        <strong>Status: {formData.status || "Unknown"}</strong>
      </div>
      <br>
      </br>
      <div style={styles.info}>
        <strong>Course Name: {formData.coursename || "Unknown"}</strong>
      </div>
      <br>
      </br>
      <form onSubmit={handleSubmit} style={styles.form}>
        <div style={styles.formGroup}>
          <label htmlFor="file_name" style={styles.label}>
            Save File As:
          </label>
          <input
            type="text"
            id="file_name"
            name="file_name"
            value={formData.file_name}
            onChange={handleInputChange}
            placeholder="Enter filename"
            required
            style={styles.input}
          />
        </div>
        <div style={styles.formGroup}>
          <label htmlFor="file" style={styles.label}>
            Upload PDF File:
          </label>
          <input
            type="file"
            id="file"
            accept=".pdf"
            onChange={handleFileChange}
            required
            style={styles.input}
          />
        </div>
        <button type="submit" style={styles.submitButton}>
          Submit Assignment
        </button>
      </form>
    </div>
  );
};

// CSS-in-JS styles
const styles = {
  container: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "40px",
    maxWidth: "600px",
    margin: "60px auto",
    backgroundColor: "#ffffff", // White background
    borderRadius: "15px",
    boxShadow: "0 10px 20px rgba(0, 0, 0, 0.2)", // Darker shadow for contrast
    fontFamily: "'Roboto', sans-serif",
    color: "#000000", // Black text
  },
  description: {
    textAlign: "center",
    fontSize: "22px",
    fontWeight: "600",
    color: "#000000", // Black text
    marginBottom: "20px",
    borderBottom: "2px solid #000000", // Black underline
    paddingBottom: "10px",
  },
  info: {
    fontSize: "16px",
    color: "#333333", // Dark gray text
    marginBottom: "10px",
    padding: "10px 15px",
    backgroundColor: "#f0f0f0", // Light gray background for contrast
    borderRadius: "10px",
    width: "100%",
    textAlign: "center",
    boxShadow: "inset 0 2px 4px rgba(0, 0, 0, 0.1)",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "20px",
    width: "100%",
  },
  formGroup: {
    display: "flex",
    flexDirection: "column",
  },
  label: {
    marginBottom: "8px",
    fontWeight: "500",
    color: "#000000", // Black label text
    fontSize: "14px",
  },
  input: {
    padding: "12px",
    fontSize: "14px",
    border: "1px solid #000000", // Black border
    borderRadius: "8px",
    backgroundColor: "#ffffff", // White background for inputs
    color: "#000000", // Black text
    outline: "none",
    transition: "border-color 0.3s ease",
  },
  inputFocus: {
    borderColor: "#000000", // Keep border black on focus
  },
  submitButton: {
    padding: "12px 18px",
    backgroundColor: "#000000", // Black button
    color: "#ffffff", // White text
    fontSize: "16px",
    fontWeight: "600",
    textAlign: "center",
    border: "none",
    borderRadius: "8px",
    cursor: "pointer",
    transition: "background-color 0.3s, transform 0.2s",
    boxShadow: "0 4px 6px rgba(0, 0, 0, 0.2)",
  },
  submitButtonHover: {
    backgroundColor: "#333333", // Slightly lighter black on hover
    transform: "scale(1.02)",
  },
};


export default SubmitAssignment;
