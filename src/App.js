import Grid from "./components/Grid";
import Controls from "./components/Controls";
import "./App.css";
import { getNextGrid, getInitGrid } from "./gameOfLife";
import { useState, useCallback, useEffect } from "react";

function App() {
  const cols = 60;
  const rows = 40;
  const [grid, setGrid] = useState(getInitGrid(cols, rows));
  const [isActive, setIsActive] = useState(false);

  useEffect(() => {
    let interval = null;
    if (isActive) {
      interval = setInterval(() => {
        setGrid((grid) => getNextGrid(grid, cols, rows));
      }, 300);
    } else {
      clearInterval(interval);
    }
    return () => clearInterval(interval);
  }, [isActive]);

  const handleStart = useCallback(() => {
    setIsActive(true);
  }, []);

  const handlePause = () => {
    setIsActive(false);
  };
  const handleReset = () => {
    setIsActive(false);
    setGrid(getInitGrid(cols, rows));
  };

  return (
    <div className="App">
      <Controls start={handleStart} pause={handlePause} reset={handleReset} />
      <Grid grid={grid} />
    </div>
  );
}

export default App;
