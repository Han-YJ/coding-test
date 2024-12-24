const fs = require('fs');
const filePath = process.platform === 'linux' ? 'dev/stdin' : 'example.txt';
const input = fs.readFileSync(filePath).toString().trim().split('\n');

const startTime = input[0].split(' ');
const cookingTime = Number(input[1]);

const startHour = Number(startTime[0]);
const startMin = Number(startTime[1]);

const endMin = (startMin + cookingTime) % 60;
const endHour = (startHour + Math.floor((startMin + cookingTime) / 60)) % 24;

const answer = `${endHour} ${endMin}`;
console.log(answer);