const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';

const passNums = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => Number(x))
  .sort((a, b) => a - b);

for (let i = 1; i < 31; i++) {
  if (!passNums.includes(i)) {
    console.log(i) + '\n';
  }
}
