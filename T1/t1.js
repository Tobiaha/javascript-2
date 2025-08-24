'use strict';

const fruits = ['apple', 'banana', 'orange', 'grape', 'kiwi'];
console.log(fruits);
console.log('length of fruits: ' + fruits.length);
console.log('Element at index 2: ' + fruits[2]);
console.log('last element: ' + fruits[fruits.length - 1]);

const vegetables = [];

while (vegetables.length < 3) {
  const vegetable = prompt('Enter a vegetable:');
  vegetables.push(vegetable);
}
console.log(vegetables);
console.log('length of vegetables: ' + vegetables.length);
