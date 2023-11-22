import React from "react";
import { HiCheck } from "react-icons/hi";
import "./CarItem.css";
import { PropTypes } from "prop-types";

const CompleteIcon = (props) => {
  const { className, onClick } = props;
  return <HiCheck className={className} onClick={onClick} />;
};

export { CompleteIcon };

CompleteIcon.propTypes = {
  className: PropTypes.string,
  onClick: PropTypes.func,
};
