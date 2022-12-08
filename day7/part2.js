const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');

const stack = [];
const sizes = {};

for (i = 0; i < input.length; i++) {
  const splitInput = input[i].split(' ');
  //command found
  if (splitInput[0] === '$') {
    if (splitInput[1] === 'cd') {
      if (splitInput[2] === '..') {
        stack.pop();
      } else {
        //push copy of last one + new dir
        stack.push((stack[stack.length - 1] || '') + splitInput[2]);
      }
    }
  } else if (splitInput[0] !== 'dir') {
    //Every time a file is encountered, add the size to all the paths
    stack.forEach((dir) => {
      sizes[dir] ??= 0;
      sizes[dir] = parseInt(sizes[dir]) + parseInt(splitInput[0]);
    });
  }
}

console.log(sizes);

const spaceFree = 70000000 - sizes['/'];
const spaceNeeded = 30000000 - spaceFree;
const part2result = Object.values(sizes)
  .sort((a, b) => a - b)
  .find((e) => e >= spaceNeeded);

console.log(spaceNeeded);
console.log(part2result);
