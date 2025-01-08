const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim());

const rows = input.map((i) => i.split(' '));
const [rowInfo, columnInfo] = info.split(' ').map((i) => Number(i));

let answer = [];
for (let i = 0; i < rowInfo; i++) {
  let row = [];
  for (let j = 0; j < columnInfo; j++) {
    const value = Number(rows[i][j]) + Number(rows[i + rowInfo][j]);
    row.push(value);
  }
  answer.push(row);
}

answer.map((row) => console.log(row.join(' ')));