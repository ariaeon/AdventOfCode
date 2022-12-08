const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');
// console.log(input);

const dataObject = {};
let currDirectory;

for (i = 0; i < input.length; i++) {
  const splitInput = input[i].split(' ');
  if (splitInput[0] === '$') {
    if (splitInput[1] === 'cd') {
      currDirectory = splitInput[2];
      dataObject[currDirectory] ??= [];
    }
  } else {
    dataObject[currDirectory].push(input[i]);
  }
}
console.log(dataObject);

const calculateDirs = () => {
  const totals = Object.keys(dataObject).map((key) => ({
    [key]: dataObject[key].reduce((a, c) => {
      const splitLine = c.split(' ');
      if (splitLine[0] !== 'dir') {
        return parseInt(a) + parseInt(splitLine[0]);
      } else {
        return a;
      }
    }, 0),
  }));
  console.log(totals);
};

calculateDirs();
