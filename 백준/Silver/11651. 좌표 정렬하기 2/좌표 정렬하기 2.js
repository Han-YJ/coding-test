const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...positions] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' ').map(Number));

const answer = positions.sort((a, b) => {
  return a[1] === b[1] ? a[0] - b[0] : a[1] - b[1];
});
console.log(answer.map((v) => v.join(' ')).join('\n'));
