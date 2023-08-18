import React from "react";
import "./hero2.css";
import hero from "../asset/hero.jpg";
const Hero2 = (props) => {
  return (
    <div className="main-hero">
      <div className="hero-container">
        <img className=" hero-img" src={hero} alt="hero" />
        <div className="heading">
          <h1>{props.heading}</h1>
          <p> {props.text}</p>
        </div>
      </div>
    </div>
  );
};

export default Hero2;
