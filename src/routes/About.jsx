import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import AboutContent from "../components/AboutContent";

const About = () => {
  return (
    <>
      <Navbar />
      <Hero2 heading="ABOUT" text="Im a friendly Front-End Developer" />
      <AboutContent />
      {/* <Footer /> */}
    </>
  );
};

export default About;
