const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCnt, tests] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' ').map(Number));

const answer = tests.filter((number) => {
  for (let i = 2; number > i; i += 1) {
    if (number % i === 0) {
      return false;
    }
  }
  return number > 1;
}).length;

console.log(answer);