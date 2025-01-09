const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let maxNum = 1;
let answer = 1;
while (maxNum < Number(input)) {
  maxNum += 6 * answer;
  answer++;
}

console.log(answer);