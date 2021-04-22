/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
import "./Grid.css";
import Cell from "./Cell";

const Grid = (props) => {
  const renderedGrid = props.grid.map((col, index) => (
    <div className="col" key={index}>
      {" "}
      {col.map((cell, index) => (
        <Cell className="cell" key={index} value={cell}></Cell>
      ))}
    </div>
  ));

  return <div className="Grid">{renderedGrid}</div>;
};

export default Grid;
