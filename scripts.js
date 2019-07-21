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

const sumLargestTwo = (myArray) => {
  let first = 0;
  let firstIndex = 0;
  let second = 0;
  if (myArray.length == 2) {return myArray[0]+myArray[1];} else if (myArray.length < 2) {return false;}
  for ( i = 0; i < myArray.length; i++ ) {
    if (myArray[i] >= first) {
      first = myArray[i];
      firstIndex = i;
      };
    };
  for ( i = 0; i < myArray.length; i++ ) {
    if (i === firstIndex) {continue;}
    if (myArray[i] >= second) {
      second = myArray[i];
      };
    };
  console.log('first: ', first);
  console.log('second: ', second);
  return first+second;
};

let testArray = randomArray(makeRandomNumber(8)+2);
console.log('test Array = ', testArray);

let summed = sumLargestTwo(testArray);
console.log('summed = ', summed);

$(document).ready(function() {
  $('#output-section-1').text(1);
  $('#output-section-2').text(2);
  });
