import React from "react";
import { useSearchParams, useNavigate, Link } from "react-router-dom";
import { tipsData } from "../data/tips";

export default function Tips() {
  const [searchParams] = useSearchParams();
  const disease = searchParams.get("disease");
  const cuisine = searchParams.get("cuisine");
  const navigate = useNavigate();

  if (!disease || !cuisine) {
    return <p>Error: Disease or cuisine not selected properly. Please go back.</p>;
  }

  const tips =
    tipsData[disease] && tipsData[disease][cuisine]
      ? tipsData[disease][cuisine]
      : null;

  if (!tips) {
    return <p>No tips found for {disease} with {cuisine} cuisine.</p>;
  }

return (
  <div className="container">
    <div className="page-header">
      <Link to="/">
        <img src="/favicon.ico" alt="Home" className="home-icon" />
      </Link>
      <h2>
        Dietary Tips for {disease.charAt(0).toUpperCase() + disease.slice(1)} –{" "}
        {cuisine.charAt(0).toUpperCase() + cuisine.slice(1)} Cuisine
      </h2>
    </div>
    <ul className="tip-list">
      {tips.map((tip, idx) => (
        <li key={idx}>{tip}</li>
      ))}
    </ul>
    <button className="back-button" onClick={() => navigate(-1)}>
      ← Back
    </button>
  </div>
);

}
