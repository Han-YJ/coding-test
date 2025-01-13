const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [M, N] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map(Number);

let [x, y] = [M, N].sort((a, b) => a - b);
const array = new Array(y - x + 1).fill(x).map((v, idx) => v + idx);
const filtered = array.filter((num) => {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) return false;
  }
  return num > 1;
});

if (filtered.length === 0) {
  console.log(-1);
} else {
  console.log(filtered.reduce((sum, curr) => sum + curr));
  console.log(filtered[0]);
}