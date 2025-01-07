const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((result) => result.split(' ').map((s) => s.trim()));

const valueDict = {
  'A+': '4.5',
  A0: '4.0',
  'B+': '3.5',
  B0: '3.0',
  'C+': '2.5',
  C0: '2.0',
  'D+': '1.5',
  D0: '1.0',
  F: '0.0',
};

const { totCnt, totScore } = input.reduce(
  (res, curr) => {
    const [_, score, value] = curr;
    if (value !== 'P') {
      res.totCnt += Number(score);
      res.totScore += Number(score) * Number(valueDict[value]);
    }
    return res;
  },
  { totCnt: 0, totScore: 0 }
);
console.log((totScore / totCnt).toFixed(6));