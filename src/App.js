import Grid from "./components/Grid";
import Controls from "./components/Controls";
import "./App.css";
import { getNextGen, getInitGrid } from "./GameOfLife";
import { useState, useEffect } from "react";

function App() {
  const cols = 60;
  const rows = 50;
  const [grid, setGrid] = useState(getInitGrid(cols, rows));

  /*   useEffect(() => {
    const interval = setInterval(() => {
      setGrid((grid) => getNextGen(grid, cols, rows));
    }, 300);
    return () => clearInterval(interval);
  }, []); */

  const start = () => {
    setInterval(() => {
      setGrid((grid) => getNextGen(grid, cols, rows));
    }, 300);
  };

  return (
    <div className="App">
      <Controls start={start} />
      <Grid grid={grid} />
    </div>
  );
}

export default App;
