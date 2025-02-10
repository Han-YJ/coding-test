const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [info, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');

const [N, M] = info.split(' ');
const dictionary = new Map();

for (let i = 0; i < Number(N); i++) {
  dictionary.set(input[i].trim(), i + 1);
}
const tests = input.slice(N, input.length);
for (let test of tests) {
  if (isNaN(Number(test))) console.log(dictionary.get(test.trim()));
  else console.log(input[Number(test) - 1]);
}
