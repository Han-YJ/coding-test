const fs = require('fs');
const filePath = 'dev/stdin';
const input = fs.readFileSync(filePath).toString().trim().split(' ');
let answer = input + '??!';
console.log(answer);
