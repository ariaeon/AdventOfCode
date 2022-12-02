const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

// rock = 1 = A
// paper = 2 = B
// scissors = 3 = C

//X = lose
//Y = draw
//Z = win

const shapeScores = {
  A: 1,
  B: 2,
  C: 3,
};

total = 0;

for (let i = 0; i < input.length; i++) {
  let input1 = input[i].split(" ")[0];
  let input2 = input[i].split(" ")[1];
  let score;

  switch (input2) {
    case "Y":
      //draw + same shape as oppenent
      total += 3 + shapeScores[input1];
      break;
    case "X":
      // lose + shape is opponent - 1 OR 3
      total += shapeScores[input1] - 1 || 3;
      break;
    case "Z":
      score = 6 + (shapeScores[input1] + 1 < 4 ? shapeScores[input1] + 1 : 1);
      console.log("z", score);
      total += score;
      break;
    default:
      break;
  }
}

console.log(total);
