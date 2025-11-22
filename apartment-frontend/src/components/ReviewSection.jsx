import React, { useState } from "react";
import "../App.css";

const ReviewSection = () => {
  const [form, setForm] = useState({ name: "", review: "", rating: "" });
  const [reviews, setReviews] = useState([]);
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.review || !form.rating) {
      setError("⚠️ Please fill all fields and select a rating.");
      setSuccess(false);
      return;
    }

    setReviews([...reviews, form]);
    setForm({ name: "", review: "", rating: "" });
    setError("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card">
      <h2>Review & Feedback</h2>

      {error && <p style={{ color: "red", fontWeight: 500 }}>{error}</p>}
      {success && (
        <p style={{ color: "green", fontWeight: 500 }}>
          ✅ Thank you for your feedback!
        </p>
      )}

      <form onSubmit={handleSubmit} className="complaint-form">
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          value={form.name}
          onChange={handleChange}
        />
        <textarea
          name="review"
          placeholder="Write your feedback..."
          value={form.review}
          onChange={handleChange}
        ></textarea>

        {/* Rating dropdown */}
        <select name="rating" value={form.rating} onChange={handleChange}>
          <option value="">Select Rating ⭐</option>
          <option value="5">⭐⭐⭐⭐⭐ Excellent</option>
          <option value="4">⭐⭐⭐⭐ Good</option>
          <option value="3">⭐⭐⭐ Average</option>
          <option value="2">⭐⭐ Poor</option>
          <option value="1">⭐ Very Poor</option>
        </select>

        <button type="submit">Submit Review</button>
      </form>

      <h3 style={{ marginTop: "25px" }}>🌟 Recent Reviews</h3>
      {reviews.length === 0 ? (
        <p style={{ color: "gray" }}>No reviews yet.</p>
      ) : (
        <ul className="complaint-list">
          {reviews.map((r, i) => (
            <li key={i}>
              <strong>{r.name}</strong> — {r.review}
              <br />
              <span style={{ color: "#f1c40f" }}>⭐ {r.rating}/5</span>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default ReviewSection;
