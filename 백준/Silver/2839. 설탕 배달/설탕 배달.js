const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
const totWeight = parseInt(input);
const SUGAR = { '5k': 5, '3k': 3 };

let totBagCnt = -1;
for (let i = Math.floor(totWeight / SUGAR['5k']); i > -1; i--) {
  const isFit = (totWeight - i * SUGAR['5k']) % SUGAR['3k'] === 0;
  if (isFit) {
    totBagCnt = i + (totWeight - i * SUGAR['5k']) / SUGAR['3k'];
    break;
  }
}
console.log(totBagCnt);
