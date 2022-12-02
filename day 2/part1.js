const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

// X = rock = 1 = A
// Y = paper = 2 = B
// Z = scissors = 3 = C

const shapeScores = {
  X: 1,
  Y: 2,
  Z: 3,
  A: 1,
  B: 2,
  C: 3,
};

total = 0;

for (let i = 0; i < input.length; i++) {
  let input1 = input[i].split(" ")[0];
  let input2 = input[i].split(" ")[1];

  if (shapeScores[input1] === shapeScores[input2]) {
    total += 3;
  } else {
    // loss = shapescore -1, 3 if 0
    if ((shapeScores[input1] - 1 || 3) !== shapeScores[input2]) {
      total += 6;
    }
  }

  total += shapeScores[input2];
}

console.log(total);
