import React from "react";
import "../style cp/ButtonsPanel.css";


const  ButtonsPanel = (props) => {
  return (
    <div className="buttons-panel">
      <button
        onClick={() => {
          props.buttonMethod("add");
        }}
      >
        Add 1 <span>{props.stepStateValue}</span>
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reinit");
        }}
      >
        Reinit
      </button>
      <button
        onClick={() => {
          props.buttonMethod("reset");
        }}
      >
        Reset
      </button>
    </div>
  );
}

export default ButtonsPanel;
