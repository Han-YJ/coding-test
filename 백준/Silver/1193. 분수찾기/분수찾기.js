const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

let loof = 1;
let total = 0;
while (total < Number(input)) {
  total += loof;
  loof++;
}
const N = total - input + 1;
const M = loof - N;
console.log(loof % 2 === 0 ? `${N}/${M}` : `${M}/${N}`);