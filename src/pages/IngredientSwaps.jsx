// IngredientSwaps.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { swapData } from "../data/swaps";

export default function IngredientSwaps() {
  const searchParams = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const disease = searchParams.get("disease");
  const cuisine = searchParams.get("cuisine");
  const swaps = swapData[disease]?.[cuisine] || [];

  return (
    <div className="container">
      <Header title="Ingredient Swaps" />
      <ul className="tip-list">
        {swaps.map((s, idx) => (
          <li key={idx}><strong>{s.original}</strong> → {s.swap}</li>
        ))}
      </ul>
      <button className="back-card" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}