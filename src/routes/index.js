import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import UnitDetails from '../pages/UnitDetails';
import Units from '../pages/Units';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/units" element={<Units/>}/>
        <Route path="/details" element={<UnitDetails/>}/>
      </Routes>

    </Router>
  )
}

export default Routers;
