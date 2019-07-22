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

const findLargest = (myArray) => {
  let first = 0;
  let firstIndex = 0;
  let indexArray = [];
  for ( i = 0; i < myArray.length; i++ ) {
    indexArray.push(i);
  };
    console.log('made it', indexArray)
  for ( i = 0; i <= myArray.length; i++ ) {
    if (first <= myArray[i]) {
      first = myArray[i];
      firstIndex = i;
    }
  };
  indexArray.splice(firstIndex-1,3)
  return [first,indexArray];
};

//let testArray = randomArray(makeRandomNumber(7)+3);
let testArray = [2,4,6,2,5];
console.log('testArray = ',testArray)
let largest = findLargest(testArray);
console.log('largest = ',largest)

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  });
