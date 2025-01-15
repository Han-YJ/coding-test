const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const positions = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((s) => s.split(' ').map((v) => Number(v.trim())));

let positionX = [];
let positionY = [];
for (let position of positions) {
  const [x, y] = position;
  positionX.push(x);
  positionY.push(y);
}
positionX = positionX.sort();
positionY = positionY.sort();

const newX = positionX[0] === positionX[1] ? positionX[2] : positionX[0];
const newY = positionY[0] === positionY[1] ? positionY[2] : positionY[0];
console.log(`${newX} ${newY}`);