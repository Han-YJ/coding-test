const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCnt, ...tests] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

const exchange = {
  Quarter: 25,
  Dime: 10,
  Nickel: 5,
  Penny: 1,
};

let answer = [];
for (let test of tests) {
  let result = '';
  let last = test;
  Object.keys(exchange).forEach((v) => {
    const value = exchange[v];
    if (last >= value) {
      result += `${parseInt(last / value)} `;
      last = last % value;
    } else {
      result += `0 `;
    }
  });
  answer.push(result);
}

console.log(answer.join('\n'));
