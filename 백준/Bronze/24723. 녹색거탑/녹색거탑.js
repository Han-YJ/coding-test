const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
const N = Number(input);

console.log(Math.pow(2, N));
