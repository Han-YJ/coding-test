const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCount, numbers] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = numbers.split('').reduce((res, curr) => res + ~~curr, 0);

console.log(answer);
