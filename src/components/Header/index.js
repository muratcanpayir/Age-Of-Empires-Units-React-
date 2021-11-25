import React from "react";
import "./Header.scss";
import logo from "../../assets/images/header-logo.png";
import { Button } from 'react-bootstrap';

function Header() {
  return (
    <header>
      <nav>
        <div className="image-wrapper">
          <img src={logo} alt="header" />
        </div>  
      </nav>
      <Button>askdjha</Button>
    </header>
  );
}

export default Header;
