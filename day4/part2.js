const fs = require("fs");
const input = fs.readFileSync("input.txt", `utf-8`).split("\r\n");

let total = input.length;
for (let i = 0; i < input.length; i++) {
  const section1 = input[i].split(",")[0];
  const section2 = input[i].split(",")[1];

  const section1start = parseInt(section1.split("-")[0]);
  const section1end = parseInt(section1.split("-")[1]);

  const section2start = parseInt(section2.split("-")[0]);
  const section2end = parseInt(section2.split("-")[1]);

  console.log(section1start, section1end, section2start, section2end);

  if (section1end < section2start || section1start > section2end) {
    console.log("not overlapping", input[i]);
    total -= 1;
  }
}

console.log(total);
