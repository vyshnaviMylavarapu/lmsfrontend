import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

const Assignment = () => {
  const [assignments, setAssignments] = useState([]);
  const navigate = useNavigate();

  // Fetch assignments from the backend
  useEffect(() => {
    axios
      .get("http://localhost:8080/allassignments") // Update this endpoint as per your backend API
      .then((response) => {
        setAssignments(response.data);
      })
      .catch((error) => {
        console.error("Error fetching assignments:", error);
      });
  }, []);

  // Handle redirection to SubmitAssignment.js with assignment details
  const handleSubmit = (assignment) => {
    navigate("/user/assignments/submit", {
      state: {
        assid: assignment.assid,
        coursename: assignment.coursename,
        description: assignment.des,
        status: assignment.status,
      },
    });
  };

  return (
    <div style={styles.container}>
      <h1 style={styles.header}>Assignments</h1>
      {assignments.length > 0 ? (
        <table style={styles.table}>
          <thead>
            <tr>
              <th style={styles.th}>Assignment ID</th>
              <th style={styles.th}>Course Name</th>
              <th style={styles.th}>Start Date</th>
              <th style={styles.th}>End Date</th>
              <th style={styles.th}>Description</th>
              <th style={styles.th}>Status</th>
              <th style={styles.th}>Action</th>
            </tr>
          </thead>
          <tbody>
            {assignments.map((assignment) => (
              <tr key={assignment.assid}>
                <td style={styles.td}>{assignment.assid}</td>
                <td style={styles.td}>{assignment.coursename}</td>
                <td style={styles.td}>{assignment.startdate}</td>
                <td style={styles.td}>{assignment.enddate}</td>
                <td style={styles.td}>{assignment.des}</td>
                <td style={styles.td}>{assignment.status}</td>
                <td style={styles.td}>
                  <button
                    style={styles.button}
                    onClick={() => handleSubmit(assignment)} // Pass the assignment details
                  >
                    Submit
                  </button>
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

// Inline styles (CSS-in-JS)
const styles = {
  container: {
    padding: "20px",
    fontFamily: "'Arial', sans-serif",
    backgroundColor: "#fff", // White background
    color: "#000", // Black text for contrast
    boxShadow: "0 4px 10px rgba(0, 0, 0, 0.1)", // Light shadow for depth
    borderRadius: "8px",
    maxWidth: "1200px",
    margin: "30px auto",
  },
  header: {
    textAlign: "center",
    marginBottom: "20px",
    fontSize: "36px",
    fontWeight: "700", // Bold header
    color: "#000", // Black color for text
    borderBottom: "3px solid #000", // Underline header with black color
    paddingBottom: "15px",
  },
  table: {
    width: "100%",
    borderCollapse: "collapse",
    marginBottom: "20px",
  },
  th: {
    border: "1px solid #ddd",
    padding: "12px 15px",
    backgroundColor: "black", // Light grey for headers
    textAlign: "left",
    fontWeight: "600", // Bold header text
    color: "white", // Black text for headers
  },
  td: {
    border: "1px solid #ddd",
    padding: "12px 15px",
    textAlign: "left",
    backgroundColor: "#fff", // White background for table data cells
  },
  button: {
    backgroundColor: "#333", // Dark button background
    color: "#fff", // White button text
    padding: "8px 12px",
    border: "none",
    cursor: "pointer",
    borderRadius: "5px",
    transition: "background-color 0.3s ease", // Smooth hover effect
  },
  buttonHover: {
    backgroundColor: "#555", // Darker shade for button on hover
  },
  noAssignments: {
    textAlign: "center",
    color: "#666", // Light grey text for "No assignments"
    fontSize: "18px",
  },

  // Styles for Viewpro.js code
  loadingContainer: {
    textAlign: 'center',
    fontSize: '18px',
    marginTop: '20px',
  },
  errorContainer: {
    color: 'red',
    textAlign: 'center',
    fontSize: '16px',
    marginTop: '20px',
  },
};

export default Assignment;
