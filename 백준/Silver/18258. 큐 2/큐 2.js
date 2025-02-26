const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const [count, ...input] = fs
  .readFileSync(filePath)
  .toString()
  .trim()
  .split('\n')
  .map((v) => v.trim());

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  push(data) {
    const node = new Node(data);
    if (this.head) {
      this.tail.next = node;
    } else {
      this.head = node;
      this.head.next = null;
    }

    this.tail = node;
    this.length += 1;
  }

  pop() {
    if (this.length === 0) return -1;
    if (this.length === 1) {
      this.tail = null;
    }
    const poped = this.head;
    this.head = this.head.next;
    this.length -= 1;
    return poped.data;
  }

  size() {
    return this.length;
  }

  empty() {
    return this.length === 0 ? 1 : 0;
  }

  front() {
    return this.head ? this.head.data : -1;
  }

  back() {
    return this.tail ? this.tail.data : -1;
  }
}

let answer = [];
let linedList = new LinedList();
input.forEach((v) => {
  const [cmd, val] = v.split(' ');
  switch (cmd) {
    case 'push':
      linedList.push(Number(val));
      break;
    case 'pop':
      answer.push(linedList.pop());
      break;
    case 'size':
      answer.push(linedList.size());
      break;
    case 'empty':
      answer.push(linedList.empty());
      break;
    case 'front':
      answer.push(linedList.front());
      break;
    case 'back':
      answer.push(linedList.back());
      break;
  }
});

console.log(answer.join('\n'));
