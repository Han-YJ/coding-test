const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [totCnt, ...cases] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.trim());

let answer = 0;
for (let i = 0; i < Number(totCnt); i++) {
  const word = cases[i];
  let groupLetter = [];
  let isGroup = 1;
  for (let j = 0; j < word.length; j++) {
    const letter = word[j];
    if (!groupLetter.includes(letter)) {
      groupLetter.push(letter);
    } else if (letter !== word[j - 1]) {
      isGroup = 0;
      break;
    }
  }

  if (isGroup) {
    answer++;
  }
}

console.log(answer);