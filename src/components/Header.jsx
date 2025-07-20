// Header.jsx
import React from "react";
import { Link } from "react-router-dom";

export default function Header({ title }) {
  return (
    <header className="header">
      <Link to="/">
        <img
          src="/favicon.ico"
          alt="Home"
          style={{ width: "28px", cursor: "pointer" }}
        />
      </Link>
      <h2 className="header-title">{title}</h2>
    </header>
  );
}
