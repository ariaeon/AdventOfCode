const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

let current = 0;
let totals = [];

for (let i = 0; i <= input.length; i++) {
  if (isNaN(parseInt(input[i]))) {
    totals.push(current);
    current = 0;
  } else {
    current += parseInt(input[i]);
  }
}

const answer = totals
  .sort((a, b) => b - a)
  .slice(0, 3)
  .reduce((a, c) => a + c, 0);

console.log(answer);
