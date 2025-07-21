// OptionSelect.jsx
import React from "react";
import { useNavigate, useLocation } from "react-router-dom";
import Header from "../components/Header";

export default function OptionSelect() {
  const navigate = useNavigate();
  const searchParams = new URLSearchParams(useLocation().search);
  const disease = searchParams.get("disease");
  const cuisine = searchParams.get("cuisine");

  const handleClick = (path) => {
    navigate(`/${path}?disease=${disease}&cuisine=${cuisine}`);
  };

  return (
    <div className="container">
      <Header title={`Choose Information Type for ${disease.charAt(0).toUpperCase() + disease.slice(1)} - ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine`} />
      <div className="card-grid">
        <button className="card" onClick={() => handleClick("recipes")}>Recipes</button>
        <button className="card" onClick={() => handleClick("swaps")}>Ingredient Swaps</button>
        <button className="card" onClick={() => handleClick("tips")}>General Tips</button>
      </div>
      <button className="back-card" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
