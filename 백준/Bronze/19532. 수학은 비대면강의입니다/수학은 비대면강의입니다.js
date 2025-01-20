const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [a, b, c, d, e, f] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

//const y = (a * f - c * d) / (a * e - b * d);
//const x = (c - b * y) / a;
//console.log(x, y);

for (let x = -999; x < 1000; x++) {
  for (let y = -999; y < 1000; y++) {
    if (a * x + b * y === c && d * x + e * y === f) {
      console.log(`${x} ${y}`);
      break;
    }
  }
}
