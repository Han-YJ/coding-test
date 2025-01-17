const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let inputNum = BigInt(input);

inputNum = ((inputNum - 2n) * (inputNum - 1n) * inputNum) / 6n;

console.log(inputNum.toString());
console.log(3);