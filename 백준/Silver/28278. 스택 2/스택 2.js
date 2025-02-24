const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

let answer = [];
let stack = [];
input.forEach((row) => {
  let [cmd, value] = row.split(' ').map(Number);
  switch (cmd) {
    case 1:
      stack.push(value);
      break;
    case 2:
      answer.push(stack.length > 0 ? stack.pop() : -1);
      break;
    case 3:
      answer.push(stack.length);
      break;
    case 4:
      answer.push(stack.length === 0 ? 1 : 0);
      break;
    case 5:
      answer.push(stack.length > 0 ? stack[stack.length - 1] : -1);
      break;
  }
});

console.log(answer.join('\n'));
