const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) =>
    s
      .trim()
      .split(' ')
      .map((e) => Number(e))
  );

let maxValue = 0;
let rowId = 1,
  columnId = 1;
for (let i = 0; i < input.length; i++) {
  const row = input[i];
  for (let j = 0; j < row.length; j++) {
    if (row[j] > maxValue) {
      [maxValue, rowId, columnId] = [row[j], i + 1, j + 1];
    }
  }
}
console.log(maxValue);
console.log(rowId, columnId);