/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

//No GUI is assummed.

const randomFunction = () => {
  console.log('done')
  //return -1*someValue;
}

let value = 0;
let n = 5000;

const jobQueue = (value) => {
  setTimeout(randomFunction(value), n);
  console.log('value =',value)
  return value;
}

$(document).ready(function() {
  $('#output-section-1').text(value);
  $('#output-section-2').text(2);
  });
