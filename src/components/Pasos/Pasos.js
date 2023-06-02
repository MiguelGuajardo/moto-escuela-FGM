import React from "react";
import "./Pasos.css";
export const Pasos = () => {
  const info_modelos_array = [
    "Realizas tu Reserva",
    "Envías los Requisitos",
    "Verificamos tu documentación y acordamos día de entrega",
    "Firmamos contrato y sales en dos ruedas",
  ];
  return (
    <div className="pasos_container">
      <div className="info_pasos_container">
        <div className="info_modelos_details">
          <h2 className="info_details_title">PASOS PARA ALQUILAR UNA MOTO</h2>
          <p className="info_details_text">
            Queremos facilitarte el proceso para que comienzas a trabajar, por
            eso nos dedicamos a hacerlo de la manera más ágil posible para darte
            una respuesta oportuna
          </p>
          {info_modelos_array.map((modelos, i) => (
            <div key={i} className="info_modelos">
              <div className="info_modelos_title">
                <span className="material-symbols-outlined info_modelos_icon">
                  check_circle
                </span>
                <span className="info_modelos_nombre">{modelos}</span>
              </div>
            </div>
          ))}
        </div>
        <img
          src="https://bariloche.org/directorio/photos/1375/file/1086/BarilocheMotos%20-%20Alquiler%20de%20Motos%20en%20Bariloche"
          alt="productos-motos"
        />
      </div>
    </div>
  );
};
