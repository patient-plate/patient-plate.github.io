// Recipes.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { recipeData } from "../data/recipes";


export default function Recipes() {
  const searchParams = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const disease = searchParams.get("disease");
  const cuisine = searchParams.get("cuisine");
  const recipes = recipeData[disease]?.[cuisine] || [];

  return (
    <div className="container">
      <Header title={`Recipes for ${disease.charAt(0).toUpperCase() + disease.slice(1)} - ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine`} />
      {recipes.map((r, idx) => (
        <div key={idx} className="tip-card">
          <h3>{r.title}</h3>
          <p>{r.description}</p>
        </div>
      ))}
      <button className="back-card" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}