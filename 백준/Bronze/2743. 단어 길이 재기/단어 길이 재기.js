const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const word = fs.readFileSync(filePath).toString().trim();

console.log(word.length);
