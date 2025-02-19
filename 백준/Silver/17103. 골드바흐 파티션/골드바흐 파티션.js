const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const maxInput = Math.max(...input);
const primes = getPrimes(maxInput);

let answer = [];
for (let num of input) {
  let gbp = [];
  for (let i = 1; i <= num / 2; i++) {
    if (primes[i] && primes[num - i]) gbp.push(i);
  }
  answer.push(gbp.length);
}

console.log(answer.join('\n'));

function getPrimes(n) {
  let primes = new Array(n + 1).fill(true);
  primes[0] = primes[1] = false;

  for (let i = 2; i <= n; i++) {
    if (primes[i]) {
      let j = 2;
      while (i * j <= n) {
        primes[i * j] = false;
        j++;
      }
    }
  }

  return primes;
}