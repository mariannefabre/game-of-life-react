/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Grid.css";
import Cell from "./Cell";

const Grid = ({ grid }) => {
  return (
    <div className="Grid">
      {grid.map((col, colIndex) => (
        <div className="col" key={colIndex}>
          {" "}
          {col.map((cell, rowIndex) => (
            <Cell
              className="cell"
              key={`${colIndex}${rowIndex}`}
              value={cell}
            ></Cell>
          ))}
        </div>
      ))}
    </div>
  );
};

export default Grid;
