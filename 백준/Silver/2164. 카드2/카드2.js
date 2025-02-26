const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim();

class Node {
  constructor(data) {
    this.data = data;
    this.next = null;
  }
}

class LinkedList {
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

  throwTop() {
    this.head = this.head.next;
    this.length -= 1;
  }

  getHead() {
    return this.head.data;
  }

  size() {
    return this.length;
  }
}

const linkedList = new LinkedList();
for (let i = 1; i <= Number(input); i++) {
  linkedList.push(i);
}

while (linkedList.size() > 1) {
  linkedList.throwTop();
  linkedList.push(linkedList.getHead());
  linkedList.throwTop();
}
console.log(linkedList.head.data);
