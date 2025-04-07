const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);
let anwer = 1;
for (let i = 1; i <= N; i++) {
  anwer *= i;
}

console.log(anwer);
