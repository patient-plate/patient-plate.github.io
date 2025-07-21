// GeneralTips.jsx
import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import Header from "../components/Header";
import { tipData } from "../data/tips";

export default function GeneralTips() {
  const searchParams = new URLSearchParams(useLocation().search);
  const navigate = useNavigate();
  const disease = searchParams.get("disease");
  const cuisine = searchParams.get("cuisine");
  const tips = tipData[disease]?.[cuisine] || [];

  return (
    <div className="container">
      <Header title={`General Tips for ${disease.charAt(0).toUpperCase() + disease.slice(1)} - ${cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine`} />
      <ul className="tip-list">
        {tips.map((tip, idx) => (
          <li key={idx}>{tip}</li>
        ))}
      </ul>
      <button className="back-card" onClick={() => navigate(-1)}>
        ← Back
      </button>
    </div>
  );
}
