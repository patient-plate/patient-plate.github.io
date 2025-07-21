// CuisineSelect.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";

const cuisines = [
  "korean",
  "mexican",
  "chinese",
  "indian",
  "mediterranean",
];

export default function CuisineSelect() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);
  const disease = searchParams.get("disease");

  const handleClick = (cuisine) => {
    navigate(`/options?disease=${disease}&cuisine=${cuisine}`);
  };

  return (
    <div className="container">
      <Header title={`Select a Cuisine for ${disease.charAt(0).toUpperCase() + disease.slice(1)}`} />
      <div className="card-grid">
        {cuisines.map((cuisine) => (
          <button
            key={cuisine}
            className="card"
            onClick={() => handleClick(cuisine)}
          >
            {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)}
          </button>
        ))}
      </div>
      <button className="back-card" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
