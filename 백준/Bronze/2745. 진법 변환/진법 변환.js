const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [str, antilog] = fs.readFileSync(filePath).toString().trim().split(' ');

console.log(parseInt(str, Number(antilog)));