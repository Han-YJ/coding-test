const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();
let title = 665;
let titleCnt = 0;
while (titleCnt !== parseInt(input)) {
  title++;
  if (title.toString().includes('666')) titleCnt++;
}

console.log(title);
