const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

let answer = 0;
//gcd : 최대공약수
let [num1, num2] = input
  .split(' ')
  .map(Number)
  .sort((a, b) => b - a);

let [temp1, temp2] = [num1, num2];
while (temp2 > 0) {
  let rest = temp1 % temp2;
  [temp1, temp2] = [temp2, rest];
}
answer = (num1 * num2) / temp1;

console.log(answer);