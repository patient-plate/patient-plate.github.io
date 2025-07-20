import React from "react";
import { useNavigate, useSearchParams, Link } from "react-router-dom";
import homeIcon from "/favicon.ico";
import CuisineCard from "../components/CuisineCard";

const cuisines = [
  { id: "korean", label: "Korean" },
  { id: "mexican", label: "Mexican" },
  { id: "chinese", label: "Chinese" },
  { id: "indian", label: "Indian" },
  { id: "mediterranean", label: "Mediterranean" },
];

export default function CuisineSelect() {
  const [searchParams] = useSearchParams();
  const disease = searchParams.get("disease");
  const navigate = useNavigate();

  if (!disease) {
    return <p>Error: No disease selected. Please go back and select a disease.</p>;
  }

  function handleSelect(cuisineId) {
    navigate(`/tips?disease=${disease}&cuisine=${cuisineId}`);
  }

  return (
    <div className="container">
      <div className="page-header">
        <Link to="/">
          <img src={homeIcon} alt="Home" className="home-icon" />
        </Link>
        <h2>Select a cuisine for {disease.charAt(0).toUpperCase() + disease.slice(1)}</h2>
      </div>
      <div className="button-grid">
        {cuisines.map(({ id, label }) => (
          <CuisineCard
            key={id}
            label={label}
            onClick={() => handleSelect(id)}
          />
        ))}
      </div>
      <button className="back-button" onClick={() => navigate(-1)}>
        ← Back
      </button>

    </div>
  );
}
