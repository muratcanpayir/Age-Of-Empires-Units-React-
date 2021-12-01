import React from "react";
import "./Header.scss";
import logo from "../../assets/images/header-logo.png";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  return (
    <header>
      <nav>
        <Link to="/">
          <div className="image-wrapper">
            <img src={logo} alt="header" />
          </div>
        </Link>
        <button
          onClick={() => {
            navigate("/units");
          }}
          className="units-button"
        >
          Units
        </button>
      </nav>
    </header>
  );
}

export default Header;
