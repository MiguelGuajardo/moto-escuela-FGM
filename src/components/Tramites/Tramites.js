import React from "react";
import "./Tramites.css";

export const Tramites = () => {
  return (
    <div className="tramites_container">
      <div className="tramites_card">
        <span className="material-symbols-outlined tramites_icon">sync</span>
        <h3 className="tramites_title">Fácil Proceso</h3>
        <p className="tramites_text">
          Sabemos que la necesitás cuanto antes, por eso minimizamos lo más
          posible los trámites para que puedas obtenerla de la manera más rápida
          y efectiva.
        </p>
      </div>
      <div className="tramites_card">
        <span className="material-symbols-outlined tramites_icon">
          folder_open
        </span>
        <h3 className="tramites_title">Documentación</h3>
        <p className="tramites_text">
          DNI - Registro Vigente - Certificados de Antecedentes Penales
        </p>
      </div>
      <div className="tramites_card">
        <span className="material-symbols-outlined tramites_icon">
          location_on
        </span>
        <h3 className="tramites_title">Entrega</h3>
        <p className="tramites_text">
          Se entrega la moto 72 horas luego de pasar por los pasos anteriores
        </p>
      </div>
    </div>
  );
};
