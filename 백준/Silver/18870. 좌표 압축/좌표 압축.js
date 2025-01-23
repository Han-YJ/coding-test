const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const positions = input[1].split(' ').map(Number);
const set = [...new Set(positions)].sort((a, b) => a - b);
let dictionary = {};
set.forEach((v, idx) => (dictionary[v] = idx));

const answer = positions.map((v) => dictionary[v]);

console.log(answer.join(' '));
