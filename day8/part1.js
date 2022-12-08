const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');
// console.log(input);

const forest = [];
let total = 0;

for (i = 0; i < input.length; i++) {
  forest[i] = input[i].split('');
}

for (y = 0; y < forest.length; y++) {
  for (x = 0; x < forest[y].length; x++) {
    // checking if forest[y][x] is visible
    // if edge
    if (
      x === 0 ||
      y === 0 ||
      y === forest.length - 1 ||
      x === forest[y].length - 1
    ) {
      total += 1;
    } else {
      // check in row
      //if no trees are higher left/right
      const firstHigherLeft = forest[y].findIndex(
        (tree) => tree >= forest[y][x]
      );
      const firstHigherRight = forest[y].findLastIndex(
        (tree) => tree >= forest[y][x]
      );

      const firstHigherTop = forest
        .map((row) => row[x])
        .findIndex((tree) => tree >= forest[y][x]);

      const firstHigherBottom = forest
        .map((row) => row[x])
        .findLastIndex((tree) => tree >= forest[y][x]);

      if (
        firstHigherLeft >= x ||
        firstHigherRight <= x ||
        firstHigherTop >= y ||
        firstHigherBottom <= y
      ) {
        total += 1;
      }
    }
  }
}

console.log(total);
// console.log(forest);
