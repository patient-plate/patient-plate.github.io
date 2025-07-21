// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title, subtitle }) {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="/favicon.ico"
          alt="Home"
          style={{ width: "40px", cursor: "pointer" }}
        />
      </Link>
      <div>
        <h2 className="header-title">{title}</h2>
        {subtitle && <p className="header-subtitle">{subtitle}</p>}
      </div>
    </header>
  );
}
