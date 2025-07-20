import React from "react";

export default function ButtonCard({ label, onClick }) {
  return (
    <button
      className="card"
      onClick={onClick}
      style={{
        backgroundColor: "#f48d80",
        color: "white",
        fontWeight: "bold",
        fontSize: "1.1rem",
        border: "none",
        borderRadius: "12px",
        padding: "1.5rem",
        margin: "0.5rem",
        width: "100%",
        maxWidth: "300px",
        boxShadow: "0 4px 6px rgba(0, 0, 0, 0.1)",
        cursor: "pointer",
        transition: "transform 0.15s ease",
      }}
      onMouseOver={(e) => (e.currentTarget.style.transform = "scale(1.03)")}
      onMouseOut={(e) => (e.currentTarget.style.transform = "scale(1.0)")}
    >
      {label}
    </button>
  );
}
