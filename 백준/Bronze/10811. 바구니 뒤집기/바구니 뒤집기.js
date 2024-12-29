const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [[totCount, _], ...games] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

let basket = new Array(totCount)
  .fill()
  .reduce((res, _, idx) => ({ ...res, [idx + 1]: idx + 1 }), {});

for (let [i, j] of games) {
  while (i < j) {
    [basket[i], basket[j]] = [basket[j], basket[i]];
    i++;
    j--;
  }
}

console.log(Object.values(basket).join(' '));
