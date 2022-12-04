const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

let total = 0;

for (let i = 0; i < input.length; i++) {
  const index = input[i].length / 2;
  const bag1 = input[i].slice(0, index).split("");
  const bag2 = input[i].slice(index, input[i].length).split("");
  let duplicate;

  for (let y = 0; y < index; y++) {
    if (bag1.includes(bag2[y])) {
      duplicate = bag2[y];
      break;
    }
  }

  const priority =
    duplicate.toLowerCase() === duplicate
      ? duplicate.charCodeAt(0) - 96
      : duplicate.charCodeAt(0) - 38;

  total += priority;
  // console.log(bag1, bag2, set);
}

console.log(total);
