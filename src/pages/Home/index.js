import React from 'react'
import homeImage from "../../assets/images/home-page-image.jpg";
import "./Home.scss";

function Home() {
  return (
    <div className="home-page">
      <div className="home-page-image-wrapper">
        <img src={homeImage} alt="home" />
      </div>
    </div>
  )
}

export default Home;
