import React, { useState } from "react";
import "../App.css"; // Keep your existing global styles

const ComplaintRegister = () => {
  const [form, setForm] = useState({
    name: "",
    apartment: "",
    issue: "",
  });
  const [complaints, setComplaints] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // ✅ Basic validation
    if (!form.name.trim() || !form.apartment.trim() || !form.issue.trim()) {
      setError("⚠️ Please fill in all fields before submitting.");
      setSuccess(false);
      return;
    }

    // ✅ Add complaint
    setComplaints((prev) => [...prev, { ...form, date: new Date().toLocaleString() }]);
    setForm({ name: "", apartment: "", issue: "" });
    setError("");
    setSuccess(true);

    // ✅ Hide success message after 2 seconds
    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card">
      <h2>Complaint Register</h2>

      {/* 🔴 Feedback Messages */}
      {error && <p style={{ color: "red", fontWeight: 500 }}>{error}</p>}
      {success && (
        <p style={{ color: "green", fontWeight: 500 }}>
          ✅ Complaint submitted successfully!
        </p>
      )}

      {/* 📝 Complaint Form */}
      <form onSubmit={handleSubmit} className="complaint-form">
        <input
          type="text"
          name="name"
          placeholder="Resident Name"
          value={form.name}
          onChange={handleChange}
        />
        <input
          type="text"
          name="apartment"
          placeholder="Apartment No."
          value={form.apartment}
          onChange={handleChange}
        />
        <textarea
          name="issue"
          placeholder="Describe your issue..."
          value={form.issue}
          onChange={handleChange}
        ></textarea>

        <button type="submit">Submit Complaint</button>
      </form>

      {/* 📋 Submitted Complaints */}
      <h3 style={{ marginTop: "25px" }}>📋 Submitted Complaints</h3>
      {complaints.length === 0 ? (
        <p style={{ color: "gray" }}>No complaints submitted yet.</p>
      ) : (
        <ul className="complaint-list">
          {complaints.map((c, i) => (
            <li key={i}>
              <strong>{c.name}</strong> ({c.apartment}) — {c.issue}
              <br />
              <small style={{ color: "gray" }}>📅 {c.date}</small>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ComplaintRegister;
