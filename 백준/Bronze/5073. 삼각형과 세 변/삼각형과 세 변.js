const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
input.pop();
input.forEach((item) => {
  item = item.split(' ').map(Number);

  item.sort((a, b) => a - b);

  let set_item = new Set(item);

  if (item[0] + item[1] <= item[2]) console.log('Invalid');
  else if (set_item.size === 1) console.log('Equilateral');
  else if (set_item.size === 2) console.log('Isosceles');
  else console.log('Scalene');
});
