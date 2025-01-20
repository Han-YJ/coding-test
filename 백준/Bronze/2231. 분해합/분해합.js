const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

let answer = -1;
for (let i = 0; i < parseInt(input); i++) {
  let sum =
    i +
    i
      .toString()
      .split('')
      .reduce((tot, curr) => tot + ~~curr, 0);

  if (sum === parseInt(input)) {
    answer = i;
    break;
  }
}

console.log(answer > -1 ? answer : 0);
