const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const A = input[1].split(' ').map(Number);
const B = input[2].split(' ').map(Number);
let answer = new Set();

for (let num of A) {
  answer.add(num);
}

for (let num of B) {
  if (answer.has(num)) {
    answer.delete(num);
  } else {
    answer.add(num);
  }
}

console.log(answer.size);
