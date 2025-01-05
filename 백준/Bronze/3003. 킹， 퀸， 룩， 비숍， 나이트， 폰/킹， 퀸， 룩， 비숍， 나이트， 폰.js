const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [sets] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' '));

const completeSets = [1, 1, 2, 2, 2, 8];
let answer = [];
for (let i = 0; i < completeSets.length; i++) {
  answer.push(completeSets[i] - Number(sets[i]));
}
console.log(answer.join(' '));