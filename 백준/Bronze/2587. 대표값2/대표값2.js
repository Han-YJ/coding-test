const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const numbers = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number)
  .sort((a, b) => a - b);

console.log(numbers.reduce((tot, curr) => tot + curr, 0) / 5);
console.log(numbers[2]);