const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

let total = 0;

for (let i = 0; i < input.length; i += 3) {
  const bag1 = input[i].split("");
  const bag2 = input[i + 1].split("");
  const bag3 = input[i + 2].split("");

  let duplicate;
  let index = 0;

  while (!duplicate) {
    if (bag2.includes(bag1[index]) && bag3.includes(bag1[index])) {
      duplicate = bag1[index];
    } else {
      index++;
    }
  }
  console.log(duplicate);

  const priority =
    duplicate.toLowerCase() === duplicate
      ? duplicate.charCodeAt(0) - 96
      : duplicate.charCodeAt(0) - 38;

  total += priority;
  // console.log(bag1, bag2, set);
}

console.log(total);
