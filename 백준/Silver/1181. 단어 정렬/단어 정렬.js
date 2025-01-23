const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...words] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const answer = [...new Set(words)].sort((a, b) => {
  return a.length === b.length
    ? a > b
      ? 1
      : a < b
      ? -1
      : 0
    : a.length - b.length;
});
console.log(answer.join('\n'));
