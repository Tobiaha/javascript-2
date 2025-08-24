'use strict';

const numbers = [];
let evennum = [];
let input = true;
let target = document.querySelector('#target');

while (input) {
  const number = +prompt('Enter a number or "stop" to finish:');
  console.log(number);

  if (number === null || isNaN(number) || number === 'stop') {
    input = false;
  } else {
    numbers.push(number);
  }
}

console.log(numbers);
for (let i of numbers) {
  if (i % 2 === 0) {
    evennum.push(i);
  }
}

numbers.sort((a, b) => a - b);

target.innerHTML = 'Here are the even numbers: ' + evennum;
