// DiseaseSelect.jsx
import React from "react";
import { useNavigate } from "react-router-dom";
import Header from "../components/Header";

const diseases = [
  "diabetes",
  "hypertension",
  "hyperlipidemia",
  "chronic kidney disease",
  "gout"
];

export default function DiseaseSelect() {
  const navigate = useNavigate();

  const handleClick = (disease) => {
    navigate(`/cuisine?disease=${disease}`);
  };

  return (
    <div className="container">
      <Header title="Welcome to Patient Plate" showHomeButton={false} />
      <p>
        Select a chronic condition below to begin exploring culturally sensitive dietary recommendations.
      </p>
      <div className="card-grid">
        {diseases.map((disease) => (
          <button
            key={disease}
            className="card"
            onClick={() => handleClick(disease)}
          >
            {disease.charAt(0).toUpperCase() + disease.slice(1)}
          </button>
        ))}
      </div>
    </div>
  );
}
