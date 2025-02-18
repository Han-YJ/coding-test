const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [T, ...tests] = fs.readFileSync(filePath).toString().trim().split('\n');

let answer = [];
for (let test of tests) {
  let [num1, num2] = test
    .split(' ')
    .map(Number)
    .sort((a, b) => b - a);
  let [temp1, temp2] = [num1, num2];
  while (temp2 > 0) {
    let rest = temp1 % temp2;
    [temp1, temp2] = [temp2, rest];
  }
  answer.push((num1 * num2) / temp1);
}
console.log(answer.join('\n'));