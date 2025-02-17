const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let answer = new Set();
for (let i = 0; i < input.length; i++) {
  for (let j = i; j < input.length; j++) {
    answer.add(input.substring(i, j + 1));
  }
}

console.log(answer.size);
