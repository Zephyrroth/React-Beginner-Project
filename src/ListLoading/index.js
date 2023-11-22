import "./ListLoading.css";
import React from "react";

function ListLoading() {
  return (
    <div className="ListLoading-container">
      <span className="ListLoading-completeIcon"></span>
      <p className="ListLoading-text"></p>
      <span className="ListLoading-deleteIcon"></span>
    </div>
  );
}

export { ListLoading };
