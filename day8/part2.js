const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');
// console.log(input);

const forest = [];
let scenicScore = 0;

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
      scenicScore = Math.max(scenicScore, 0);
    } else {
      // check in row
      //if no trees are higher left/right
      function findTree(tree) {
        return tree >= forest[y][x];
      }

      const leftTrees = forest[y].slice(0, x).reverse();
      const scoreLeft = leftTrees.findIndex(findTree) + 1 || leftTrees.length;

      const rightTrees = forest[y].slice(x + 1);
      const scoreRight =
        rightTrees.findIndex(findTree) + 1 || rightTrees.length;

      const upTrees = forest
        .map((row) => row[x])
        .slice(0, y)
        .reverse();
      const scoreUp = upTrees.findIndex(findTree) + 1 || upTrees.length;

      const downTrees = forest.map((row) => row[x]).slice(y + 1);
      const scoreDown = downTrees.findIndex(findTree) + 1 || downTrees.length;

      const currentScenicScore = scoreLeft * scoreRight * scoreUp * scoreDown;
      scenicScore = Math.max(scenicScore, currentScenicScore);

      // console.log(
      //   `${forest[y][x]} (${x},${y}) has a scenic score of ${currentScenicScore} (${scoreUp} * ${scoreLeft} * ${scoreRight} * ${scoreDown})`
      // );
    }
  }
}

console.log(scenicScore);
// console.log(forest);
