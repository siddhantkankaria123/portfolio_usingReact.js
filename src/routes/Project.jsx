import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";
import Work from "../components/Work";

const Project = () => {
  return (
    <>
      <Navbar></Navbar>
      <Hero2 heading="PROJECTS" text="Some of my Most recent works" />
      <Work></Work>
      {/* <Footer></Footer> */}
    </>
  );
};

export default Project;
