const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const N = parseInt(fs.readFileSync(filePath).toString().trim());

let answer = 0;
for (let i = 1; i * i <= N; i++) {
  answer++;
}

console.log(answer);
