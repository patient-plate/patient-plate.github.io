import React from "react";
import { useNavigate, Link } from "react-router-dom";
import DiseaseCard from "../components/DiseaseCard";

const diseases = [
  { id: "diabetes", label: "Diabetes" },
  { id: "hypertension", label: "Hypertension" },
  { id: "obesity", label: "Obesity" },
  { id: "dyslipidemia", label: "Dyslipidemia" },
  { id: "chronic-kidney", label: "Chronic Kidney Disease" },
];

export default function Home() {
  const navigate = useNavigate();

  function handleSelect(diseaseId) {
    navigate(`/cuisine?disease=${diseaseId}`);
  }

  return (
    <div className="container">
      <div className="page-header">
        <Link to="/">
          <img src="/favicon.ico" alt="Home" className="home-icon" />
        </Link>
        <h1>Welcome to Patient Plate</h1>
      </div>
      <p>
        Select a chronic condition below to begin exploring culturally sensitive
        dietary recommendations.
      </p>

      <div className="button-grid">
        {diseases.map(({ id, label }) => (
          <DiseaseCard key={id} label={label} onClick={() => handleSelect(id)} />
        ))}
      </div>
    </div>
  );
}
