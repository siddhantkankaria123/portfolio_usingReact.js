import React from "react";
import { Link } from "react-router-dom";
import "./hero.css";
import IntroBg from "../asset/intro-bg.jpg";
function Hero() {
  return (
    <div className="hero">
      <img className="into-img" src={IntroBg} alt="intoimg" />
      <div className="content px-4 py-5  text-center">
        <h1 className=" name ">I'm, Siddhant Kankaria</h1>
        <div className=" col-lg-6 mx-auto">
          <p className="tagname lead mb-4 ">Web Developer</p>
          <div className="hero-button">
            <Link to={"/project"} className="heros-button">
              PROJECT
            </Link>
            <Link to={"/contact"} className="heros-button" id="contact-button">
              CONTACT
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;
