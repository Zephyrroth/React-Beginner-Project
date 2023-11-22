import "./CarCounter.css";
import React from "react";
import { CarContext } from "../CarContext";

function CarCounter() {
  const { completed, pending } = React.useContext(CarContext);
  return (
    <h1 className="CarCount">
      Has coleccionado <span>{completed}</span> de <span>{pending}</span>{" "}
      Coches!
    </h1>
  );
}

export { CarCounter };
