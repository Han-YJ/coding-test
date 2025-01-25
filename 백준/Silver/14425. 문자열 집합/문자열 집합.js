const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const [N, M] = info.split(' ').map(Number);
let dictionary = {};
input.slice(0, N).forEach((s) => (dictionary[s] = 1));
const targets = input.slice(N);
let answer = 0;
targets.forEach((s) => dictionary[s] === 1 && answer++);
console.log(answer);