import { useState } from "react";
import Keyboard from "./Keyboard";
import { initialState } from "./utils";
import Board from "./Board";
import "./App.css";

function App() {
  // attach events - i, j, grid, setGrid

  // update at i,j - curr = [...grid[i]], curr[j] = key, now grid[i] = curr;
  // const gridU = [...grid], setGrid
  const [grid, setGrid] = useState(initialState);
  const [i, setI] = useState(0);
  const [j, setJ] = useState(0);

  const handleClick = (key) => {
    // validate - correct key, first/last reached
    // key not enter/delete
    if (key === "Enter") {
      // validate
      if (i === 5) {
        // win/loss
      } else {
        setI(i + 1);
      }
    }
    const currRow = [...grid[i]];
    currRow[j] = key;
    const updatedGrid = [...grid];
    updatedGrid[i] = currRow;
    setGrid(updatedGrid);
    setJ(j + 1);
  };

  return (
    <div>
      <div>
        {i} {j}
      </div>
      <Board grid={grid} />
      <Keyboard onClick={handleClick} />
    </div>
  );
}

export default App;
