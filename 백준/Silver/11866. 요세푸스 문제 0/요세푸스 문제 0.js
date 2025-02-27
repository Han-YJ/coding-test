const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [N, K] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split(' ')
  .map(Number);

class Queue {
  constructor() {
    this.queue = [];
  }

  push(data) {
    this.queue.push(data);
  }

  pop() {
    return this.queue.shift();
  }

  front() {
    return this.queue[0];
  }

  size() {
    return this.queue.length;
  }
}

const list = new Queue();
for (let i = 1; i <= N; i++) {
  list.push(i);
}

let answer = [];
let count = 1;
while (list.size() > 0) {
  if (count % K === 0) {
    answer.push(list.pop());
  } else {
    list.push(list.pop());
  }
  count++;
}
console.log(`<${answer.join(', ')}>`);
