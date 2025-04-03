const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';

const [N, ...input] = fs.readFileSync(filePath).toString().trim().split('\n');

const nums = input.map((v) => v.trim());
let answer = [];

class Node {
  constructor(val) {
    this.value = val;
    this.next = null;
    this.prev = null;
  }
}

class Deque {
  constructor() {
    this.head = null;
    this.tail = null;
    this.size = 0;
  }

  push(data, loc) {
    const node = new Node(data);
    if (this.size === 0) {
      this.head = node;
      this.tail = node;
    } else {
      if (loc === 'front') {
        node.next = this.head;
        this.head.prev = node;
        this.head = node;
      } else {
        node.prev = this.tail;
        this.tail.next = node;
        this.tail = node;
      }
    }

    this.size++;
  }

  pop(loc) {
    if (this.size === 0) return answer.push(-1);
    let node = null;
    if (loc === 'front') {
      node = this.head;
      this.head = this.head.next;
      if (this.head) this.head.prev = null;
    } else {
      node = this.tail;
      this.tail = this.tail.prev;
      if (this.tail) this.tail.next = null;
    }
    answer.push(node.value);
    this.size--;
  }

  len() {
    return this.size;
  }

  print(loc) {
    if (this.size === 0) return answer.push(-1);

    if (loc === 'front') {
      answer.push(this.head.value);
    } else {
      answer.push(this.tail.value);
    }
  }
}

const deque = new Deque();
for (let i = 0; i < Number(N); i++) {
  const [cmd, val] = nums[i].split(' ').map(Number);
  switch (cmd) {
    case 1:
      deque.push(val, 'front');
      break;
    case 2:
      deque.push(val, 'back');
      break;
    case 3:
      deque.pop('front');
      break;
    case 4:
      deque.pop('back');
      break;
    case 5:
      answer.push(deque.len());
      break;
    case 6:
      answer.push(deque.len() === 0 ? 1 : 0);
      break;
    case 7:
      deque.print('front');
      break;
    case 8:
      deque.print('back');
      break;

    default:
      break;
  }
}

console.log(answer.join('\n'));