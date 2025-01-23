const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...members] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' '));

const answer = members.sort((a, b) => {
  return a[0] === b[0] ? 1 : a[0] - b[0];
});

console.log(answer.map((s) => s.join(' ')).join('\n'));
