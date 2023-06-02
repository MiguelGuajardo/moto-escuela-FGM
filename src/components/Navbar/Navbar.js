import React from "react";
import "./Navbar.css";
import { Link } from "react-router-dom";

export const Navbar = () => {
  return (
    <div className="navbar_container">
      <div className="logo_container">
        <span>FGM</span>
      </div>
      <div className="redes_container">
        <Link to="#">
          <i className="fa-brands fa-instagram"></i>
        </Link>
        <Link to="#">
          <i className="fa-brands fa-facebook"></i>
        </Link>
        <Link to="#">
          <i className="fa-brands fa-whatsapp"></i>
        </Link>
      </div>
    </div>
  );
};
