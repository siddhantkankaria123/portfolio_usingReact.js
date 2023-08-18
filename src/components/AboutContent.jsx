import React from "react";
import "./aboutContent.css";
import sidImage from "../asset/sid.png";
import { NavLink } from "react-router-dom";
function AboutContent() {
  return (
    <>
      <div>
        <div className="container col-xxl-8 px-4 py-5">
          <div className="row flex-lg-row-reverse align-items-center g-5 py-5">
            <div className="col-10 about-image col-sm-8 col-lg-6">
              <img
                src={sidImage}
                className="d-block about-img mx-lg-auto img-fluid"
                alt="Bootstrap Themes"
                loading="lazy"
              />
            </div>
            <div className="col-lg-6">
              <p className="lead about-detail fs-2">
                I, am Siddhant Kankaria from Bhilwara,Rajasthan.I am final year
                pass out studentI am interested Web Development. My hobbies are
                listening songs, playing outdoor games.
              </p>
              <div className="about-button">
                <NavLink
                  to={
                    "https://drive.google.com/file/d/19B5HtSDBILf4AUNjC-uLH9qoL92XOAdD/view?usp=sharing"
                  }
                  target="blank"
                  className={"aboutButtons"}
                >
                  Download CV
                </NavLink>
                <NavLink to={"/contact"} className={"aboutButtons"}>
                  Contact
                </NavLink>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutContent;
