import "./CarItem.css";
import React from "react";
import propTypes from "prop-types";
import { HiOutlineX, HiCheck } from "react-icons/hi";

function CarItem({ completed, onComplete, onDelete, text }) {
  return (
    <li className="CarItem">
      <span
        className={`Icon Icon-check ${completed && "Icon-check--active"}`}
        onClick={onComplete}
      >
        <HiCheck />
      </span>
      <p className={`CarItem-p ${completed && "CarItem-p--complete"}`}>
        {text}
      </p>
      <span className="Icon Icon-delete" onClick={onDelete}>
        <HiOutlineX />
      </span>
    </li>
  );
}

CarItem.propTypes = {
  text: propTypes.string.isRequired,
  completed: propTypes.bool.isRequired,
  onComplete: propTypes.func.isRequired,
  onDelete: propTypes.func.isRequired,
};
export { CarItem };
