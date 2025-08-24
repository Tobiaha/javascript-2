'use strict';
const numbers = [];

while (numbers.length < 5) {
  const number = parseFloat(prompt('Enter a number:'));
  numbers.push(number);
}
console.log(numbers);
const numCheck = parseFloat(
  prompt('Enter a number to check if it exists in the array:')
);
if (numbers.includes(numCheck)) {
  console.log(numCheck + ' exists in the array.');
} else {
  console.log(numCheck + ' does not exist in the array.');
}

numbers.pop();

console.log('Last element has been removed: ' + numbers);
numbers.sort((a, b) => a - b);
console.log('Sorted array: ' + numbers);
