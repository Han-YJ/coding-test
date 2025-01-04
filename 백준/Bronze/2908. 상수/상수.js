const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [firstNo, secondNo] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map((no) => {
    let [x, y, z] = no.split('');
    return Number(z + y + x);
  });

console.log(Math.max(firstNo, secondNo));
