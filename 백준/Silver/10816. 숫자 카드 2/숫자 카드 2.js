const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let dictionary = {};
input[1].split(' ').forEach((n) => {
  n = n.trim();
  if (!dictionary[n]) dictionary[n] = 0;
  dictionary[n] += 1;
});

let answer = [];
input[3].split(' ').forEach((n) => {
  answer.push(dictionary[n] ?? 0);
});

console.log(answer.join(' '));
