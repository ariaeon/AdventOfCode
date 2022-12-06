const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');

const str = input[0];

for (i = 4; i <= str.length; i++) {
  if (new Set(str.slice(i - 4, i).split('')).size === 4) {
    console.log('found', i);
    break;
  }
}
