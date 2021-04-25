import { memo } from "react";
import "./Cell.css";

const Cell = (props) => {
  const classes = props.value === 1 ? "cell color-alive" : `cell`;
  return <div className={classes}></div>;
};

export default memo(Cell);
