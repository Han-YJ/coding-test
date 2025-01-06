const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';

const input = fs.readFileSync(filePath).toString().trim().split(' ');

let answer = [];
let totCnt = Number(input);
for (let i = 1; i < totCnt; i++) {
  let starCnt = 2 * i - 1;
  let spaceCnt = totCnt - i;
  answer.push(' '.repeat(spaceCnt) + '*'.repeat(starCnt));
}

for (let j = Number(input); j > 0; j--) {
  let starCnt = 2 * j - 1;
  let spaceCnt = totCnt - j;
  answer.push(' '.repeat(spaceCnt) + '*'.repeat(starCnt));
}

console.log(answer.join('\n'));