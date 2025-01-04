const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

const dialDict = [
  'ABC',
  'DEF',
  'GHI',
  'JKL',
  'MNO',
  'PQRS',
  'TUV',
  'WXYZ',
].reduce((res, curr, idx) => {
  let currentDict = curr
    .split('')
    .reduce((tot, s) => ({ ...tot, [s]: idx + 3 }), {});
  return Object.assign(res, currentDict);
}, {});

const answer = input.split('').reduce((tot, curr) => tot + dialDict[curr], 0);
console.log(answer);