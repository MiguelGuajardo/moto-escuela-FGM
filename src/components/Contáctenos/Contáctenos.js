import React from "react";
import { Link } from "react-router-dom";
import "./Contáctenos.css";
import { Button } from "../Button/Button";

export const Contáctenos = () => {
  return (
    <div className="contáctenos_container">
      <div className="contáctenos_texto">
        <h2>
          SI TENES UN COMERCIO, INCREMENTA TUS INGRESOS CON NUESTRAS FRANQUICIAS
          SIN INVERSIÓN
        </h2>
        <p>DISPONIBLE PARA TODO EL PAÍS</p>
        <Button text={"CONTÁCTENOS"} link={"#"} />
        <div className="contáctenos_redes">
          <Link to="#">
            <i className="fa-brands fa-instagram"></i>
          </Link>
          <Link to="#">
            <i className="fa-brands fa-facebook"></i>
          </Link>
        </div>
      </div>
    </div>
  );
};
