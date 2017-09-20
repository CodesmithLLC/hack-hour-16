'use strict';
// If we list all the natural numbers below 10 that are multiples of 3 or 5,
// we get 3, 5, 6 and 9. The sum of these multiples is 23.

// write a function that will find the sum of all the multiples of 3 or 5
// below 1000 and return that sum.

function sumMultiples3Or5Below1000() {
  let sum = 0;
  
  for(var i = 1; i < 1000; i++){
    if(i % 3 === 0 || i % 5 === 0){
      console.log(i)
      sum = sum + i
    }
  }
  return sum
}


// extension make it dynamic function that takes input x,y,z
// and returns the sum of multiples of x and y below z
function sumMultiplesXOrYBelowZ(x, y, z) {
  let sum = 0;


  if(x > y){
    j = x;
    i = y;
  } else {
    j = y;
    i = x;
  }
  
  var j = y; 
  
  for(var i = x; i < 1000; i=i+x){
  if(j < z){
  sum = sum + i + j;
  j = j + y;
  } else {
    sum = sum + i
  }
  }

  return sum;
}

const objectToExport = {
  sumMultiples3Or5Below1000,
  sumMultiplesXOrYBelowZ,
};

module.exports = objectToExport;
