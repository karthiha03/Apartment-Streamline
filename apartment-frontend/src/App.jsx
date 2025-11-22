import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar";
import Dashboard from "./components/Dashboard";
import ApartmentList from "./components/ApartmentList";
import AddApartment from "./components/AddApartment";
import ComplaintRegister from "./components/ComplaintRegister1";
import ReviewSection from "./components/ReviewSection";
import mockApartments from "./mockData";

function App() {
  const [apartments, setApartments] = useState(mockApartments);

  // Add a new apartment
  const addApartment = (newApartment) => {
    const newEntry = { id: Date.now(), ...newApartment };
    setApartments((prev) => [...prev, newEntry]);
  };

  // Update rent for an apartment
  const updateApartment = (id, newRent) => {
    const updatedList = apartments.map((a) =>
      a.id === id ? { ...a, rent: Number(newRent) } : a
    );
    setApartments(updatedList);
  };

  // Delete an apartment
  const deleteApartment = (id) => {
    setApartments(apartments.filter((a) => a.id !== id));
  };

  return (
    <Router>
      <Navbar />
      <Routes>
        {/* 🏠 Dashboard (Default Page) */}
        <Route path="/" element={<Dashboard />} />

        {/* 🏢 Apartment List */}
        <Route
          path="/apartments"
          element={
            <ApartmentList
              apartments={apartments}
              setApartments={setApartments}
              onUpdate={updateApartment}
              onDelete={deleteApartment}
            />
          }
        />

        {/* ➕ Add Apartment */}
        <Route path="/add" element={<AddApartment onAdd={addApartment} />} />

        {/* 🧾 Complaints */}
        <Route path="/complaints" element={<ComplaintRegister />} />

        {/* 🌟 Reviews */}
        <Route path="/reviews" element={<ReviewSection />} />
      </Routes>
    </Router>
  );
}

export default App;
