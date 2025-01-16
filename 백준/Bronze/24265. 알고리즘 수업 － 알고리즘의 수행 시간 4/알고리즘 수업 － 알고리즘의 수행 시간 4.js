const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
const num = Number(input);

console.log((num * (num - 1)) / 2);
console.log(2);