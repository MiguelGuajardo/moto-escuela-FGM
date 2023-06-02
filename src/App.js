import React from "react";
import "./App.css";
import { Navbar } from "./components/Navbar/Navbar";
import { ImageSVG } from "./components/ImageSVG/ImageSVG";
import { Info } from "./components/Info/Info";
import { Tramites } from "./components/Tramites/Tramites";
import { Productos } from "./components/Productos/Productos.js";
import { Pasos } from "./components/Pasos/Pasos";
import { Contáctenos } from "./components/Contáctenos/Contáctenos";

export const App = () => {
  return (
    <div className="container">
      <Navbar />
      <ImageSVG />
      <Info />
      <Tramites />
      <Productos />
      <Pasos />
      <Contáctenos />
    </div>
  );
};
