const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const M = parseInt(input[0].split(' ')[1]);
const cards = input[1].split(' ').map(Number);

let max = 0;
for (let i = 0; i < cards.length - 2; i++) {
  for (let j = i + 1; j < cards.length - 1; j++) {
    for (let k = j + 1; k < cards.length; k++) {
      let sum = cards[i] + cards[j] + cards[k];
      if (M >= sum && sum > max) {
        max = sum;
      }
    }
  }
}
console.log(max);