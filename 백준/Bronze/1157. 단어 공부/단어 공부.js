const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().toUpperCase();

const sortedByChar = input.split('').reduce((res, curr) => {
  if (!res[curr]) {
    res = { ...res, [curr]: 0 };
  }
  res[curr] += 1;
  return res;
}, {});
const sortedKeyByValue = Object.keys(sortedByChar).sort(
  (a, b) => sortedByChar[b] - sortedByChar[a]
);

console.log(
  sortedByChar[sortedKeyByValue[0]] === sortedByChar[sortedKeyByValue[1]]
    ? '?'
    : sortedKeyByValue[0]
);
