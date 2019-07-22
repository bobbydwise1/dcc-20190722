/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Airbnb.

Given a list of integers, write a function that returns the largest sum of non-adjacent numbers. Numbers can be 0 or negative.

For example, [2, 4, 6, 2, 5] should return 13, since we pick 2, 6, and 5. [5, 1, 1, 5] should return 10, since we pick 5 and 5.

Follow-up: Can you do this in O(N) time and constant space?
*/

const makeRandomNumber = (value) => {
  return Math.ceil(Math.random()*value);
}

const randomArray = (length) => {
  output = [];
  for ( i = 0; i < length; i++ ) {
    output.push(makeRandomNumber(10));
  }
  return output;
}

//1st case: solve for largest 2 numbers in array

let ignoreArray = [];

const findLargest = (myArray) => {
  let first = 0;
  let firstIndex = 0;
  for ( i = 0; i < myArray.length; i++ ) {
    if (myArray[i] >= first) {
      first = myArray[i];
      firstIndex = i;
    };
  };
  ignoreArray.push(firstIndex);
  return [first,firstIndex];
};

const findNextLargest = (myArray, ignoreIndex) => {
  let second = 0;
  let secondIndex = 0;
  for ( i = 0; i < myArray.length; i++ ) {
    for ( j = 0; j < ignoreIndex.length; j++ ) {
      if (((i === ignoreIndex[j]) || (i === ignoreIndex[j]-1)) || (i === ignoreIndex[j]+1))  {
        continue;
      };
      if (myArray[i] >= second) {
        second = myArray[i];
        secondIndex = i;
      };
    };
  };
  ignoreArray.push(secondIndex);
  return [second, secondIndex];
};

//let testArray = randomArray(makeRandomNumber(7)+3);
let testArray = [2, 4, 6, 2, 5];
console.log('test Array = ', testArray);
let biggest = findLargest(testArray);
console.log('largest, index = ', biggest);

let secondBiggest = findNextLargest(testArray,ignoreArray);
console.log('second largest, index =', secondBiggest);

console.log('ignoreArray =', ignoreArray)
let thirdBiggest = findNextLargest(testArray,ignoreArray);
console.log('third largest, index =', thirdBiggest);

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  });
