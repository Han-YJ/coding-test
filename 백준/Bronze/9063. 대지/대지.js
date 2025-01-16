const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCnt, ...dots] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim().split(' '));

let dotX = [];
let dotY = [];
for (let dot of dots) {
  const [x, y] = dot;
  dotX.push(Number(x));
  dotY.push(Number(y));
}

console.log(
  (Math.max(...dotX) - Math.min(...dotX)) *
    (Math.max(...dotY) - Math.min(...dotY))
);