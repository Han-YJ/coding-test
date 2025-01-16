const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number)
  .sort((a, b) => a - b);

let [x, y, z] = input;
if (z >= x + y) {
  z = x + y - 1;
}
console.log(x + y + z);
