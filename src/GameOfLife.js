const create2DArray = (cols, rows) => {
  let arr = new Array(cols);
  for (let i = 0; i < cols; i++) {
    arr[i] = new Array(rows);
  }
  return arr;
};
const countNeighbors = (grid, cols, rows, col, row) => {
  let count = 0;
  if (col - 1 >= 0) {
    count += grid[col - 1][row];
  }
  if (col - 1 >= 0 && row - 1 >= 0) {
    count += grid[col - 1][row - 1];
  }
  if (col - 1 >= 0 && row + 1 < rows) {
    count += grid[col - 1][row + 1];
  }
  if (row - 1 >= 0) {
    count += grid[col][row - 1];
  }
  if (row + 1 < rows) {
    count += grid[col][row + 1];
  }
  if (col + 1 < cols) {
    count += grid[col + 1][row];
  }
  if (col + 1 < cols && row - 1 >= 0) {
    count += grid[col + 1][row - 1];
  }
  if (col + 1 < cols && row + 1 < rows) {
    count += grid[col + 1][row + 1];
  }
  return count;
};

export function getNextGen(grid, cols, rows) {
  let nextGrid = create2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      let neighbors = countNeighbors(grid, cols, rows, i, j);
      if ((grid[i][j] === 1 && neighbors === 2) || neighbors === 3) {
        nextGrid[i][j] = 1;
      } else {
        nextGrid[i][j] = 0;
      }
    }
  }
  return nextGrid;
}
export function getInitGrid(cols, rows) {
  let grid = create2DArray(cols, rows);
  for (let i = 0; i < cols; i++) {
    for (let j = 0; j < rows; j++) {
      grid[i][j] = Math.floor(Math.random() * 2);
    }
  }
  return grid;
}
