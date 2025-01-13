const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => Number(s.trim()));

let answer = [];
for (let num of input) {
  if (num === -1) break;
  let divisor = [1];
  for (let i = 2; i < num / 2; i++) {
    if (num % i === 0) {
      divisor.push(i, num / i);
    }
  }
  divisor = [...new Set(divisor)];
  if (num === divisor.reduce((res, curr) => res + curr)) {
    answer.push(`${num} = ${divisor.sort((a, b) => a - b).join(' + ')}`);
  } else {
    answer.push(`${num} is NOT perfect.`);
  }
}
console.log(answer.join('\n'));