import "./CarList.css";
import React from "react";
import propTypes from "prop-types";

function CarList({ children }) {
  return <ul className="carList">{children}</ul>;
}

CarList.propTypes = {
  children: propTypes.node,
};

export { CarList };
