import { useState, useEffect } from "react";
import "./Controls.css";

const Controls = (props) => {
  const handleClick = (e) => {
    if (e.target.name === "start") {
      props.start();
    }
  };

  return (
    <div className="buttons-container">
      <button name="start" onClick={handleClick}>
        start
      </button>
      <button name="pause" onClick={handleClick}>
        pause
      </button>
      <button name="reset" onClick={handleClick}>
        reset
      </button>
    </div>
  );
};
export default Controls;
