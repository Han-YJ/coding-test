const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let inputNum = Number(input);
let answer = [];

for (let i = 2; i <= inputNum; i++) {
  while (inputNum % i === 0) {
    answer.push(i);
    inputNum = inputNum / i;
  }
}

console.log(answer.join('\n'));