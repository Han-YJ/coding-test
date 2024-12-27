const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [[totCount, tryCount], ...games] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

let arr = new Array(totCount).fill(0);
for (let [i, j, k] of games) {
  for (let idx = i; idx <= j; idx++) {
    arr[idx - 1] = k;
  }
}

console.log(arr.join(' '));
