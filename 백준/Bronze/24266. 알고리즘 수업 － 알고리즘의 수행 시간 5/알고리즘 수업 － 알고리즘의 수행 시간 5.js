const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let inputNum = BigInt(input);
inputNum = inputNum ** 3n;
console.log(inputNum.toString());
console.log(3);