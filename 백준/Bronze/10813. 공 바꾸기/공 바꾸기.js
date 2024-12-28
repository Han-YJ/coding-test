const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [[totCount, tryCount], ...games] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((x) => x.split(' ').map(Number));

let bags = new Array(totCount)
  .fill()
  .reduce((res, _, idx) => ({ ...res, [idx + 1]: idx + 1 }), {});

for (let [x, y] of games) {
  [bags[x], bags[y]] = [bags[y], bags[x]];
}

console.log(Object.values(bags).join(' '));
