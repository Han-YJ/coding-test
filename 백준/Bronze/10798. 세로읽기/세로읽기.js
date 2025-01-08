const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim().split(''));

let maxLength = Math.max(...input.map((row) => row.length));
let answer = '';
for (let i = 0; i < maxLength; i++) {
  for (let j = 0; j < input.length; j++) {
    if (input[j][i]) {
      answer += input[j][i];
    }
  }
}
console.log(answer);