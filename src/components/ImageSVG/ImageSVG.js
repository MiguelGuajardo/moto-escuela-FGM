import React from "react";
import "./ImageSVG.css";
import { Button } from "../Button/Button";
export const ImageSVG = () => {
  return (
    <div className="image_container">
      <div className="info_container">
        <h2 className="info_title">Alquila Una Moto</h2>
        <h2 className="info_text">Y ÚSALA PARA LO QUE NECESITES</h2>
        <Button
          text={"ENVÍA UN WHATSAPP"}
          link={`https://wa.me/${process.env.REACT_APP_NUMBER_PHONE}`}
        />
      </div>
    </div>
  );
};
