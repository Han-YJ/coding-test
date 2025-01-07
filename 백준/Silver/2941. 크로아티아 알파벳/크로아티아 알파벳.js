const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';

let input = fs.readFileSync(filePath).toString().trim();
const croaDict = ['c=', 'c-', 'dz=', 'd-', 'lj', 'nj', 's=', 'z='];
for (let i of croaDict) {
  input = input.replaceAll(i, 'a');
}
console.log(input.length);