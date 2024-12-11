import React from 'react';

export default function Home1() {
  const loggedInUser = localStorage.getItem("loggedInUser"); // Retrieve the username from localStorage

  return (
    <div>
      <style>{`
        /* Global Styling */
        body {
          font-family: 'poppins', sans-serif;
          margin: 0;
          padding: 0;
          background-color: #ffffff;
        }

        .home-container {
          text-align: center;
        }

        /* Hero Section */
        .hero-section {
          background-color: #000000;
          color: white;
          padding: 60px 80px;
          border-radius: 40px;
          margin-top: 200px; /* Adjust this value to move the hero section down */
        }

        .hero-section h1 {
          font-size: 3em;
          margin-bottom: 40px;
          font-weight: 300;
        }

        .hero-section p {
          font-size: 1.2em;
          margin-bottom: 20px;
          color: #ffffff;
        }

        .cta-button {
          background-color: white;
          color: black;
          padding: 15px 30px;
          font-size: 1.1em;
          border: none;
          border-radius: 40px;
          cursor: pointer;
          border: 2px solid white;
        }

        .cta-button:hover {
          background-color: transparent;
          border: 2px solid white;
          color: white;
          transition: 0.5s;
        }

        /* Features Section */
        .features-section {
          display: flex;
          justify-content: center;
          padding: 60px 0;
        }

        .feature-box {
          background-color: white;
          border-radius: 30px;
          box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
          padding: 30px;
          margin: 0 20px;
          width: 250px;
          border: 2px solid #000000;
        }

        .feature-box h3 {
          color: #000000; /* Updated heading color */
          font-size: 1.5em;
          margin-bottom: 15px;
        }

        .feature-box p {
          font-size: 1em;
          color: #333;
        }

        /* Footer Section */
        .footer-section {
          background-color: #333;
          color: white;
          padding: 20px;
          font-size: 0.9em;
        }
/* Welcome User Styling */
.welcome-user {
  font-size: 1.5em;
  font-weight: bold;
  color: #000000; /* Ensures black color for the username */
  margin-top: 20px;
}

      `}</style>

      <div className="home-container">
        {/* Welcome User Section */}
        {/* Welcome User Section */}
<p className="welcome-user">Welcome, {loggedInUser}</p>
 
        {/* Hero Section */}
        <header className="hero-section">
         
        <p className="welcome-user">Welcome, {loggedInUser}</p>
          <h1>Dive into Learning Management System!</h1>
          <p>✦ Discover ✦ Learn ✦ Achieve</p>
          <button className="cta-button">Explore Courses</button>
        </header>

        {/* Features Section */}
        <section className="features-section">
          <div className="feature-box">
            <h3>Quality Courses</h3>
            <p>Access a variety of top-notch courses crafted by experienced professionals.</p>
          </div>
          <div className="feature-box">
            <h3>Expert Instructors</h3>
            <p>Learn from the best in the industry to stay ahead in your career.</p>
          </div>
          <div className="feature-box">
            <h3>Student Support</h3>
            <p>Our support team is always available to help you on your learning journey.</p>
          </div>
        </section>
      </div>
    </div>
  );
}
