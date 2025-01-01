const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [[_], ...tests] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim());

for (let test of tests) {
  console.log(test.charAt(0) + test.charAt(test.length - 1));
}