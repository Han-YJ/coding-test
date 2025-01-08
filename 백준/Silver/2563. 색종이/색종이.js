const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [_, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim().split(' '));

const PAPER_LEN = 10;
let canvas = Array.from(Array(100), () => Array(100).fill(0));
const papers = input.map((i) => i.map(Number));
let answer = 0;
for (let paper of papers) {
  const [x, y] = paper;
  for (let i = x; i < x + PAPER_LEN; i++) {
    for (let j = y; j < y + PAPER_LEN; j++) {
      if (canvas[i][j] === 1) continue;
      canvas[i][j] = 1;
      answer++;
    }
  }
}

console.log(answer);
