const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');

const str = input[0];

for (i = 14; i <= str.length; i++) {
  if (new Set(str.slice(i - 14, i).split('')).size === 14) {
    console.log('found', i);
    break;
  }
}
