import "./CarSearcher.css";
import React from "react";
import propTypes from "prop-types";
import { CarContext } from "../CarContext";

function CarSearcher() {
  const { searchCars, setSearchCars } = React.useContext(CarContext);

  return (
    <input
      placeholder="Busca aqui algun coche..."
      className="carsSearch"
      value={searchCars}
      onChange={(event) => {
        setSearchCars(event.target.value);
      }}
    ></input>
  );
}

CarSearcher.propTypes = {
  searchCars: propTypes.string,
  setSearchCars: propTypes.func,
};

export { CarSearcher };
