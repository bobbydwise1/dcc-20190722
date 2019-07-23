/*
Good morning! Here's your coding interview problem for today.

This problem was asked by Apple.

Implement a job scheduler which takes in a function f and an integer n, and calls f after n milliseconds.
*/

const randomFunction = () => {
  console.log('button clicked')
  return true;
}

const jobSched = (f, n) => {
  setTimeout(f, n); //f is your funciton, n is time in milliseconds
}

$(document).ready(function() {
  let timeElapsed = 0;
  $('#button1').click(function() {
    event.preventDefault();
    let n = 5000;
    jobSched(randomFunction, n);
    $('#output-section-1').text('START');
    setTimeout(function() {$('#output-section-2').text('END');}, n );
  })
  });
