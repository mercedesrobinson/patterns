export function makeBoard(rows, cols) {
  if (typeof rows !== "number" || typeof cols !== "number") return null;
  if (rows <= 0 || cols <= 0) return [];
  const board = [];
  for (let i = 0; i < rows; i++) {
    const row = [];
    for (let j = 0; j < cols; j++) {
      row.push("-");
    }
    board.push(row);
  }
  return board;
}

export function makeTriangle(size) {
  if (typeof size !== "number") return null;
  if (size <= 0) return [];
  const triangle = [];
  for (let i = 0; i < size; i++) {
    const row = [];
    for (let j = 0; j <= i; j++) {
      row.push("-");
    }
    triangle.push(row);
  }
  return triangle;
}

export function countLetter(words, letter) {
  if (typeof letter !== "string") return 0;
  let count = 0;
  for (let word of words) {
    for (let char of word) {
      if (char.toLowerCase() === letter.toLowerCase()) {
        count++;
      }
    }
  }
  return count;
}