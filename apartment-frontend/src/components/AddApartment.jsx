import React, { useState } from "react";
import "../App.css";

const AddApartment = ({ onAdd }) => {
  const [form, setForm] = useState({
    apartmentName: "",
    ownerName: "",
    rent: "",
    address: "",
  });
  const [error, setError] = useState("");
  const [success, setSuccess] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.apartmentName || !form.ownerName || !form.rent || !form.address) {
      setError("⚠️ Please fill in all fields before adding an apartment.");
      setSuccess(false);
      return;
    }

    onAdd(form);
    setForm({ apartmentName: "", ownerName: "", rent: "", address: "" });
    setError("");
    setSuccess(true);

    setTimeout(() => setSuccess(false), 2000);
  };

  return (
    <div className="card">
      <h2>Add Apartment</h2>

      {/* Messages */}
      {error && <p style={{ color: "red", fontWeight: 500 }}>{error}</p>}
      {success && (
        <p style={{ color: "green", fontWeight: 500 }}>
          ✅ Apartment added successfully!
        </p>
      )}

      <form onSubmit={handleSubmit} className="complaint-form">
        <input
          type="text"
          name="apartmentName"
          placeholder="Apartment Name"
          value={form.apartmentName}
          onChange={handleChange}
        />
        <input
          type="text"
          name="ownerName"
          placeholder="Owner Name"
          value={form.ownerName}
          onChange={handleChange}
        />
        <input
          type="number"
          name="rent"
          placeholder="Monthly Rent (₹)"
          value={form.rent}
          onChange={handleChange}
        />
        <input
          type="text"
          name="address"
          placeholder="Apartment Address"
          value={form.address}
          onChange={handleChange}
        />
        <button type="submit">Add Apartment</button>
      </form>
    </div>
  );
};

export default AddApartment;
