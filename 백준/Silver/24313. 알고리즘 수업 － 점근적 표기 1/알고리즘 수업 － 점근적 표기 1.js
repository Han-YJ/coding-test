const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [a, c, n] = fs.readFileSync('./dev/stdin').toString().trim().split('\n');
const aa = a.split(' ').map(Number);
const a1 = Number(aa[0]);
const a0 = Number(aa[1]);

if (a1 * Number(n) + a0 <= Number(c) * Number(n) && Number(c) >= a1) {
  console.log(1);
} else {
  console.log(0);
}
