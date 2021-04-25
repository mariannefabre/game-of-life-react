const gol = require("../GameOfLife.js");

describe("Create array of arrays", () => {
  it("returns an array of array", () => {
    const cols = 20;
    const rows = 10;
    const result = gol.create2DArray(cols, rows);
    expect(result).toEqual(expect.any(Array));
  });
  it("returns an array of length 20", () => {
    const cols = 20;
    const rows = 10;
    const result = gol.create2DArray(cols, rows);
    expect(result.length).toBe(20);
  });
  it("returns an array of array of length 30", () => {
    const cols = 20;
    const rows = 30;
    const result = gol.create2DArray(cols, rows);
    expect(result[0].length).toBe(30);
  });
  it("returns an empty array if no dimensions", () => {
    const result = gol.create2DArray();
    expect(result.length).toBe(0);
  });
});
