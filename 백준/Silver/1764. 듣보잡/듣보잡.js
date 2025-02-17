const fs = require('fs');
const filePath =
  process.platform === 'linux' ? 'dev/stdin' : '../../example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');
const [N, M] = input[0].split(' ');
const people = input.slice(1).map((person) => person.trim());
const nPeople = new Map();
for (let i = 0; i < N; i++) {
  nPeople.set(people[i]);
}

let answer = [];
for (let i = N; i < people.length; i++) {
  if (nPeople.has(people[i])) {
    answer.push(people[i]);
  }
}
console.log(answer.length);
console.log(answer.sort().join('\n'));
