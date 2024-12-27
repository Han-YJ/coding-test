const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const targetInt = Number(input[2]);
const inputLine = input[1].split(' ').map((n) => Number(n));
const answer = inputLine.filter((i) => i === targetInt).length;
console.log(answer);
