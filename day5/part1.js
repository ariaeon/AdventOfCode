const fs = require('fs');
const input = fs.readFileSync('input.txt', `utf-8`).split('\r\n');

const data = [
  'BPNQHDRT',
  'WGBJTV',
  'NRHDSVMQ',
  'PZNMC',
  'DZB',
  'VCWZ',
  'GZNCVQLS',
  'LGJMDNV',
  'TPMFZCG',
].map((i) => i.split(''));

for (let i = 0; i < input.length; i++) {
  const x = input[i].split(' ');
  const amount = x[1];
  const from = x[3] - 1;
  const to = x[5] - 1;
  data[to].push(...data[from].splice(-amount).reverse());
}

const result = data.map((col) => col.reverse()[0]).join('');

console.log(result);
