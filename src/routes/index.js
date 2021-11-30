import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../components/Header";
import Home from "../pages/Home";
import UnitDetails from "../pages/UnitDetails";
import Units from "../pages/Units";

function Routers() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/units" element={<Units />} />
          <Route path="/details/:id" element={<UnitDetails />} />
        </Routes>
      </Router>
    </>
  );
}

export default Routers;
