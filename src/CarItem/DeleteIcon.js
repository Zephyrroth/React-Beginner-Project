import React from "react";
import { HiOutlineX } from "react-icons/hi";
import "./CarItem.css";
import propTypes from "prop-types";

const DeleteIcon = (props) => {
  return <HiOutlineX className={props.className} onClick={props.onClick} />;
};

DeleteIcon.propTypes = {
  className: propTypes.string.isRequired,
  onClick: propTypes.func.isRequired,
};

export { DeleteIcon };
