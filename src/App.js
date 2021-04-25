import Grid from "./components/Grid";
import Controls from "./components/Controls";
import "./App.css";
import { getNextGrid, getInitGrid } from "./GameOfLife";
import { useState, useCallback } from "react";

function App() {
  const cols = 60;
  const rows = 40;
  const [grid, setGrid] = useState(getInitGrid(cols, rows));

  const start = useCallback(() => {
    setInterval(() => {
      setGrid((grid) => getNextGrid(grid, cols, rows));
    }, 300);
  }, []);

  /*   const pause = () => {
    clearInterval( interval );
  }; */

  return (
    <div className="App">
      <Controls start={start} />
      <Grid grid={grid} />
    </div>
  );
}

export default App;
