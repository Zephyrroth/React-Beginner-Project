import "./ListEmpty.css";
import "../CreateCar/CreateCar.css";
import React from "react";

function ListEmpty() {
  return (
    <div>
      <p className="ListEmptyClass">¡Colecciona tu primer auto!</p>
      <p className="ListEmptyClass">
        Presiona el icono <button className="ButonExample">+</button>
      </p>
    </div>
  );
}

export { ListEmpty };
