const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const totalPrice = Number(input[0]);

let mdTotal = 0;
for (let i = 2; i < input.length; i++) {
  mdTotal += input[i]
    .toString()
    .trim()
    .split(' ')
    .reduce((curr, prev) => prev * Number(curr), 1);
}

const answer = totalPrice === mdTotal ? 'Yes' : 'No';
console.log(answer);