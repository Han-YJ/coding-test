const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
console.log(Math.pow(Math.pow(2, Number(input)) + 1, 2));
