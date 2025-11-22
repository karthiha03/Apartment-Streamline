import React, { useState } from "react";
import { getApartmentById, updateApartment } from "../mockData";

function EditApartment() {
  const [id, setId] = useState("");
  const [apartment, setApartment] = useState(null);

  const handleSearch = () => {
    const result = getApartmentById(id);
    setApartment(result || null);
  };

  const handleUpdate = () => {
    updateApartment(id, apartment);
    alert("Apartment updated successfully!");
  };

  return (
    <div className="card">
      <h2>Edit Apartment</h2>
      <input placeholder="Enter Apartment ID" value={id} onChange={(e) => setId(e.target.value)} />
      <button onClick={handleSearch}>Search</button>

      {apartment && (
        <div>
          <input value={apartment.apartmentName} onChange={(e) => setApartment({ ...apartment, apartmentName: e.target.value })} />
          <input value={apartment.ownerName} onChange={(e) => setApartment({ ...apartment, ownerName: e.target.value })} />
          <input type="number" value={apartment.rent} onChange={(e) => setApartment({ ...apartment, rent: e.target.value })} />
          <input value={apartment.address} onChange={(e) => setApartment({ ...apartment, address: e.target.value })} />
          <button onClick={handleUpdate}>Update Apartment</button>
        </div>
      )}
    </div>
  );
}

export default EditApartment;
