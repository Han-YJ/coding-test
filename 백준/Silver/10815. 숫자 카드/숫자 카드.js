const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

let dictionary = {};
input[1].split(' ').forEach((n) => (dictionary[n] = 1));

let answer = [];

input[3].split(' ').forEach((n) => {
  answer.push(dictionary[n] === 1 ? 1 : 0);
});

console.log(answer.join(' '));