const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

input.forEach((str) => {
  let stack = [];
  let result = 'YES';
  for (let i = 0; i < str.length; i++) {
    if (str[i] === '(') {
      stack.push(i);
    } else {
      if (stack.length === 0) {
        result = 'NO';
        break;
      } else {
        stack.pop();
      }
    }
  }
  if (stack.length !== 0) {
    result = 'NO';
  }
  console.log(result);
});