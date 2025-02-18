const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [N, ...trees] = fs.readFileSync(filePath).toString().trim().split('\n');

let diff = [];
for (let i = 0; i < trees.length - 1; i++) {
  diff.push(parseInt(trees[i + 1]) - parseInt(trees[i]));
}

let num = 0;
for (let i = 0; i < diff.length; i++) {
  num = getGcd(num, diff[i]);
}

let answer = 0;
diff.forEach((v) => {
  if (v > num) answer += v / num - 1;
});

console.log(answer);

function getGcd(num1, num2) {
  return num2 > 0 ? getGcd(num2, num1 % num2) : num1;
}