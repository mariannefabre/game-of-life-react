import Grid from "./components/Grid";
import "./App.css";
import { getNextGen, getInitGrid } from "./GameOfLife";
import { useState, useEffect } from "react";

function App() {
  const cols = 80;
  const rows = 60;
  const [grid, setGrid] = useState(getInitGrid(cols, rows));

  useEffect(() => {
    const interval = setInterval(() => {
      setGrid((grid) => getNextGen(grid, cols, rows));
    }, 300);
    return () => clearInterval(interval);
  }, []);

  const handleClick = (e) => {
    if (e.target.name === "start") {
    }
  };

  return (
    <div className="App">
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
      <Grid grid={grid} />
    </div>
  );
}

export default App;
