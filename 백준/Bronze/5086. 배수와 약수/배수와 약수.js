const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim().split(' '));

const tests = input.slice(0, input.length - 1);
let answer = [];
for (let test of tests) {
  const [x, y] = test.map(Number);
  if (x < y && y % x === 0) {
    answer.push('factor');
    continue;
  }
  if (x > y && x % y === 0) {
    answer.push('multiple');
    continue;
  }
  answer.push('neither');
}
console.log(answer.join('\n'));