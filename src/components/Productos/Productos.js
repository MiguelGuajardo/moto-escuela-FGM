import React from "react";
import "./Productos.css";

export const Productos = () => {
  const info_details_array = [
    "Peso: 92",
    "Tipo de moto: Cub/ Transmisión: 4",
    "Capacidad de combustible: 3",
    "Suspensión delantera: Horquilla telescópica",
    "Suspensión trasera: Doble amortiguador hidraúlico",
    "Freno delantero: Disco / Freno trasero: Tambor",
    "Neumático delantero: 2,50 R17",
    "Neumático trasero: 80/100 R14",
    "Tipo de motor: Monocilíndrico 4T / Cilindrada: 110",
    "Alimentación: Carburador",
    "Largo de moto: 2105 /Ancho de moto: 660",
    "Alto de moto: 1080 / Largo de caja: 2105",
    "Ancho de caja: 660 / Alto de caja: 1080",
  ];
  return (
    <div className="product_container">
      <div className="info_products_container">
        <img
          src="https://mgalquilerdemotos.com/wp-content/uploads/elementor/thumbs/Foto-2-pezzvfqxs8b5m6yilihyqbo2futaa3kg1ocnbc770g.jpg"
          alt="productos-motos"
        />
        <div className="info_details">
          <h2 className="info_details_title">ASÍ SON NUESTRAS MOTOS</h2>
          <div className="info_modelos">
            <div className="info_modelos_title">
              <span className="material-symbols-outlined info_modelos_icon">
                check_circle
              </span>
              <span className="info_modelos_nombre">NOMBRE DE MOTOs</span>
            </div>
            {info_details_array.map((description, i) => (
              <p key={i} className="info_modelos_descripción">
                {description}
              </p>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};
