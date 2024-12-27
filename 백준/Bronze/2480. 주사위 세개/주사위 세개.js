const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split(' ');

let answer = 0;
if (input[0] === input[1]) {
  if (input[1] === input[2]) {
    answer = 10000 + input[0] * 1000;
  } else {
    answer = 1000 + input[0] * 100;
  }
} else {
  if (input[1] === input[2] || input[0] === input[2]) {
    answer = 1000 + input[2] * 100;
  } else {
    answer = Math.max(...input.map((e) => Number(e))) * 100;
  }
}

console.log(answer);