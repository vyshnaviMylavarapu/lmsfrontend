import React, { useEffect, useState } from "react";
import axios from "axios";

const FacultyAssignmentsubmission = () => {
  const [assignments, setAssignments] = useState([]);

  // Fetch assignments from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/allassignments") // Replace with your backend API endpoint
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, []);

  // Download file
  const handleDownload = (file, fileName) => {
    const blob = new Blob([file], { type: "application/pdf" });
    const url = window.URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = fileName || "assignment_file.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Faculty - Assignment Details</h1>
      {assignments.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Assignment ID</th>
              <th style={styles.th}>Student ID</th>
              <th style={styles.th}>Course Name</th>
              <th style={styles.th}>Start Date</th>
              <th style={styles.th}>End Date</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>File Name</th>
              <th style={styles.th}>File</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.assid}>
                <td style={styles.td}>{assignment.assid}</td>
                <td style={styles.td}>{assignment.studentid}</td>
                <td style={styles.td}>{assignment.coursename}</td>
                <td style={styles.td}>{assignment.startdate}</td>
                <td style={styles.td}>{assignment.enddate}</td>
                <td style={styles.td}>{assignment.des}</td>
                <td style={styles.td}>{assignment.status}</td>
                <td style={styles.td}>{assignment.fileName || "No file uploaded"}</td>
                <td style={styles.td}>
                  {assignment.file ? (
                    <button
                    style={styles.downloadButton}
                    onClick={() =>
                      handleDownload(assignment.file, assignment.fileName || `Assignment_${assignment.assid}.pdf`)
                    }
                    onMouseEnter={handleHover}
                    onMouseLeave={handleMouseLeave}
                  >
                    Download File
                  </button>
                  
                  ) : (
                    "No File Uploaded"
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p style={styles.noAssignments}>No assignments found.</p>
      )}
    </div>
  );
};

// CSS-in-JS styles
// CSS-in-JS styles
const styles = {
  container: {
    padding: "30px",
    fontFamily: "'Poppins', sans-serif",
    backgroundColor: "#ffffff",
    color: "#333",
    minHeight: "100vh",
  },
  
  header: {
    textAlign: "center",
    marginBottom: "30px",
    color: "#000",
    fontSize: "28px",
    fontWeight: "600",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginTop: "20px",
    backgroundColor: "#f9f9f9",
    boxShadow: "0 2px 10px rgba(0, 0, 0, 0.1)",
  },
  th: {
    border: "1px solid #ccc",
    padding: "12px",
    backgroundColor: "#333",
    color: "#fff",
    fontWeight: "bold",
    textAlign: "left",
    fontSize: "14px",
  },
  td: {
    border: "1px solid #ccc",
    padding: "12px",
    textAlign: "left",
    fontSize: "14px",
    color: "#555",
  },
  downloadButton: {
    backgroundColor: "#000",
    color: "#fff",
    padding: "8px 15px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    fontWeight: "bold",
    transition: "background-color 0.3s ease",
  },
  downloadButtonHover: {
    backgroundColor: "#333",
  },
  noAssignments: {
    textAlign: "center",
    color: "#666",
    fontSize: "16px",
    fontWeight: "500",
    marginTop: "20px",
  },
};

// Applying hover effect for the button
const handleHover = (e) => {
  e.target.style.backgroundColor = "#333";
};

const handleMouseLeave = (e) => {
  e.target.style.backgroundColor = "#000";
};

export default FacultyAssignmentsubmission;
