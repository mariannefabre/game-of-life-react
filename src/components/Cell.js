import "./Cell.css";

export default function Cell(props) {
  const classes = props.value === 1 ? "cell color-alive" : `cell`;
  return <div className={classes}></div>;
}
