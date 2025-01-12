const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((s) => Number(s.trim()));

let answer = [];
for (let i = 1; i < parseInt(N / 2); i++) {
  if (answer.length / 2 > K) break;

  if (N % i === 0) {
    answer.push(i, N / i);
  }
}
console.log([...new Set(answer)].sort((a, b) => a - b)[K - 1] ?? 0);