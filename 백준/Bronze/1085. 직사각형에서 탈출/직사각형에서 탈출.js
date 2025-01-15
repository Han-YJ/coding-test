const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [x, y, w, h] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

const minX = Math.abs(x - w) < x ? Math.abs(x - w) : x;
const minY = Math.abs(y - h) < y ? Math.abs(y - h) : y;

console.log(minX > minY ? minY : minX);