import React from "react";

export default function CuisineCard({ label, onClick }) {
  return (
    <button
      onClick={onClick}
      style={{
        padding: "12px 18px",
        backgroundColor: "#f48d80",
        color: "white",
        border: "none",
        borderRadius: "8px",
        fontWeight: "600",
        cursor: "pointer",
      }}
    >
      {label}
    </button>
  );
}
