import React, { useState } from "react";
import "../App.css";

function ApartmentList({ apartments, onUpdate, onDelete }) {
  const [editingId, setEditingId] = useState(null);
  const [newRent, setNewRent] = useState("");

  const handleRentChange = (id, rent) => {
    setEditingId(id);
    setNewRent(rent);
  };

  const saveRent = (id) => {
    if (!isNaN(newRent) && newRent.trim() !== "") {
      onUpdate(id, newRent);
      setEditingId(null);
      setNewRent("");
    }
  };

  if (!apartments || apartments.length === 0) {
    return <p className="empty">No apartments available.</p>;
  }

  return (
    <div className="card">
      <h2>Apartment List</h2>
      <ul className="apartment-list">
        {apartments.map((a) => (
          <li key={a.id} className="apartment-item">
            <div>
              <strong>{a.apartmentName}</strong>
              <p>Owner: {a.ownerName}</p>
              <p>
                Rent: ₹{" "}
                {editingId === a.id ? (
                  <>
                    <input
                      type="number"
                      value={newRent}
                      onChange={(e) => setNewRent(e.target.value)}
                    />
                    <button
                      className="save-btn"
                      onClick={() => saveRent(a.id)}
                    >
                      Save
                    </button>
                  </>
                ) : (
                  <>
                    {a.rent}{" "}
                    <button
                      className="edit-btn"
                      onClick={() => handleRentChange(a.id, a.rent)}
                    >
                      Edit
                    </button>
                  </>
                )}
              </p>
              <p>{a.address}</p>
            </div>
            <div className="actions">
              <button className="delete" onClick={() => onDelete(a.id)}>
                Delete
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ApartmentList;
