const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, input] = fs.readFileSync(filePath).toString().trim().split('\n');

let initLine = input.split(' ').map(Number);
let waitings = [];
let flag = true;
const maxNum = Math.max(...initLine);
let currentNum = 0;

while (flag) {
  if (
    (initLine.length === 0 && waitings.length === 0) ||
    (initLine.length === 0 &&
      waitings[waitings.length - 1] !== currentNum + 1) ||
    maxNum === currentNum
  ) {
    flag = false;
    break;
  }
  if (initLine[0] === currentNum + 1) {
    initLine = initLine.slice(1);
    currentNum++;
  } else if (waitings[waitings.length - 1] === currentNum + 1) {
    waitings.pop();
    currentNum++;
  } else {
    waitings.push(initLine[0]);
    initLine = initLine.slice(1);
  }
}

if (initLine.length === 0 && waitings.length === 0) console.log('Nice');
else console.log('Sad');
