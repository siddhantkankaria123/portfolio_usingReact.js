import React from "react";
import "./Footer.css";
import { FaHome, FaPhone, FaMailBulk } from "react-icons/fa";
const Footer = () => {
  return (
    <div className="container-fluid  ">
      <footer className="d-flex flex-wrap justify-content-between align-items-center  mt-5 p-5 ">
        <ul className="nav col-md-4 justify-content-end list-unstyled gap-2 d-flex flex-column">
          <li className="ms-3 mt-2">
            <FaHome size={20} style={{ color: "#fff" }} />
          </li>
          <p className="contact-detail lead px-2 fs-3 ">
            Vijay Singh Pathik Nagar, Bhilwara,Rajasthan
          </p>
          <li className="ms-3 mt-2">
            <FaPhone size={20} style={{ color: "#fff" }} />
          </li>
          <p className=" contact-detail lead px-2 fs-3">9352132617</p>
          <li className="ms-3 mt-2">
            <FaMailBulk size={20} style={{ color: "#fff" }} />
          </li>
          <p className=" contact-detail lead  fs-3 px-2">
            SiddhantKankaria122@gmail.com
          </p>
        </ul>
        <div className="col-md-4 d-flex align-items-center">
          <span className="mb-3 mb-md-0 footer-text">
            Created By : Siddhant Kankaria © 2023{" "}
          </span>
        </div>
      </footer>
    </div>
  );
};

export default Footer;
