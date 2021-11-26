import React from "react";
import "./Header.scss";
import logo from "../../assets/images/header-logo.png";


function Header() {
  
  return (
    <header>
      <nav>
        <div className="image-wrapper">
          <img src={logo} alt="header" />
        </div>
        <button className="units-button">Units</button>
      </nav>
    </header>
  );
}

export default Header;
