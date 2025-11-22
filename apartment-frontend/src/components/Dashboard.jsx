import React from "react";
import "../App.css";

const Dashboard = () => {
  return (
    <div className="card">
      <h2>🏢 Apartment Streamline Dashboard</h2>
      <p style={{ fontSize: "16px", lineHeight: "1.6", marginTop: "10px" }}>
        Welcome to the <strong>Apartment Streamline</strong> database!  
        This platform helps apartment administrators and residents
        manage daily operations efficiently — from tracking rent details
        and maintaining resident information to raising complaints and submitting reviews.
      </p>

      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          gap: "20px",
          marginTop: "30px",
          textAlign: "center",
        }}
      >
        {/* Quick Info Cards */}
        <div className="info-card">
          <h3>🏠 Manage Apartments</h3>
          <p>View, add, and update apartment details in one place.</p>
        </div>

        <div className="info-card">
          <h3>🧾 Raise Complaints</h3>
          <p>Report maintenance or resident issues easily and track status.</p>
        </div>

        <div className="info-card">
          <h3>🌟 Give Reviews</h3>
          <p>Share your feedback and rate your living experience.</p>
        </div>

        <div className="info-card">
          <h3>📊 Stay Informed</h3>
          <p>Get quick insights into ongoing activities and records.</p>
        </div>
      </div>

      <div style={{ marginTop: "35px", fontSize: "15px", color: "#555" }}>
        <p>
          💡 <strong>Tip:</strong> Use the navigation bar above to explore sections like{" "}
          <b>Apartments</b>, <b>Complaints</b>, and <b>Reviews</b>.
        </p>
        <p>
          Together, let’s make apartment management smoother and smarter! 🚀
        </p>
      </div>
    </div>
  );
};

export default Dashboard;
