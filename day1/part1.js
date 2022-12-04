const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

let current = 0;
let max = 0;

for (let i = 0; i <= input.length; i++) {
  if (isNaN(parseInt(input[i]))) {
    max = Math.max(max, current);
    current = 0;
  } else {
    current += parseInt(input[i]);
  }
}

console.log(max);
