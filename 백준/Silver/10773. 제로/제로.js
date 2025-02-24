const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = [];
input.forEach((value) => {
  if (value === 0) answer.pop();
  else answer.push(value);
});

console.log(answer.reduce((a, b) => a + b, 0));
