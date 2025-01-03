const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

const answer = new Array(26)
  .fill()
  .map((_, idx) => input.indexOf(String.fromCharCode(idx + 97)))
  .join(' ');

console.log(answer);
