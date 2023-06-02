import React from "react";
import { Link } from "react-router-dom";
import "./Button.css";

export const Button = ({ text, link }) => {
  return (
    <Link to={link}>
      <button className="css-boton boton-advertencia">{text}</button>
    </Link>
  );
};
