const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [[totCount], ...tests] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim().split(' '));

for (let [repeatCnt, str] of tests) {
  console.log(
    str
      .split('')
      .map((s) => s.repeat(Number(repeatCnt)))
      .join('')
  );
}
