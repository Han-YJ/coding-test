const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let answer = [];
for (let num of input) {
  if (num === 0) break;

  let prime = [];
  for (let i = num + 1; i <= 2 * num; i++) {
    if (isPrime(i)) prime.push(i);
  }
  answer.push(prime.length);
}

console.log(answer.join('\n'));

function isPrime(num) {
  if (num < 2) return false;
  for (let i = 2; i <= Math.sqrt(num); i++) {
    if (num % i === 0) return false;
  }
  return true;
}
