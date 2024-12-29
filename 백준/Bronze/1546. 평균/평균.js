const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCount, scores] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

const highScore = Math.max(...scores);
const lastScores = scores.map((s) => (s / highScore) * 100);

console.log(lastScores.reduce((res, curr) => res + curr, 0) / totCount[0]);
