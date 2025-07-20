import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

import Home from "./pages/Home";
import CuisineSelect from "./pages/CuisineSelect";
import Tips from "./pages/Tips";

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/cuisine" element={<CuisineSelect />} />
        <Route path="/tips" element={<Tips />} />
      </Routes>
    </Router>
  );
}