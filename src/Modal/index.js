import React from "react";
import ReactDOM from "react-dom";
import "./ModalClass.css";

function Modal({ children }) {
  return ReactDOM.createPortal(
    <div className="ModalClass">{children}</div>,
    document.getElementById("modal"),
  );
}

export { Modal };
