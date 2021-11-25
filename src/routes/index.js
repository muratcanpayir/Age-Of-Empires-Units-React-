import React from 'react';
import {BrowserRouter as Router,Routes,Route} from "react-router-dom";
import Home from '../pages/Home';
import Units from '../pages/Units';

function Routers() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/units" element={<Units/>}/>
      </Routes>

    </Router>
  )
}

export default Routers;
