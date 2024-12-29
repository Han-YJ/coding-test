const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const inputNums = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x));

let answer = [];
inputNums.forEach((input) => {
  if (!answer.includes(input % 42)) {
    answer.push(input % 42);
  }
});

console.log(answer.length);
