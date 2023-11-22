import "./CreateCar.css";
import React from "react";
import propTypes from "prop-types";

function CreateCar({ setOpenModal }) {
  return (
    <button
      className="ButonCCar"
      onClick={() => {
        setOpenModal((state) => !state);
      }}
    >
      +
    </button>
  );
}

CreateCar.propTypes = {
  setOpenModal: propTypes.func.isRequired,
};
export { CreateCar };
