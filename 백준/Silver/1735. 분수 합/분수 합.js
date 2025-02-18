const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [num1, num2] = input.map((num) => num.split(' ').map(Number));

let deno = getLcmNum(num1[1], num2[1]);
let numer = (deno / num1[1]) * num1[0] + (deno / num2[1]) * num2[0];
const lastGcd = getGcdNum(deno, numer);
if (lastGcd > 1) {
  deno /= lastGcd;
  numer /= lastGcd;
}
console.log(`${numer} ${deno}`);

function getLcmNum(a, b) {
  return (a * b) / getGcdNum(a, b);
}

function getGcdNum(a, b) {
  let [temp1, temp2] = [a, b].sort((a, b) => b - a);
  while (temp2 > 0) {
    let rest = temp1 % temp2;
    [temp1, temp2] = [temp2, rest];
  }
  return temp1;
}