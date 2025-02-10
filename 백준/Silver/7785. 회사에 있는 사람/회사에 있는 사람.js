const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...recordings] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n');
const ACTION = {
  enter: 'enter',
  leave: 'leave',
};
const currentEmplyee = new Set();
recordings.forEach((recording) => {
  const [name, action] = recording.split(' ');
  if (action.trim() === ACTION.enter) currentEmplyee.add(name);
  else currentEmplyee.delete(name);
});

const result = Array.from(currentEmplyee).sort().reverse();
console.log(result.join('\n'));
