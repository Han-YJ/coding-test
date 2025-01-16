const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [A, B, C] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => Number(s.trim()));

let message = '';
if (A + B + C !== 180) {
  message = 'Error';
} else {
  if (A === B && B === C) {
    message = 'Equilateral';
  } else if (A === B || B === C || A === C) {
    message = 'Isosceles';
  } else {
    message = 'Scalene';
  }
}
console.log(message);