const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...tests] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = [];
for (let test of tests) {
  while (!isPrime(test)) {
    test++;
  }
  answer.push(test);
}

console.log(answer.join('\n'));

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
