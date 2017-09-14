// Write a function "countTwos" that takes a number as an argument, n. The function will return the number of 2s encountered when counting from 1 to n (inclusive). 2222 counts as having 4 2s.

// countTwos(1);  -> 0
// countTwos(3);  -> 1
// countTwos(13);  -> 2
// countTwos(1000);  -> 300
// countTwos(11420);  -> 4483

/** shit is done */
function countTwos(num) {
  if (isNaN(num)) return undefined; // only do nums
  if (num < 0) num = Math.abs(num); // flip negatives

  let numTwos = 0;
  
  // loop through all nums
  for (let i = 0; i <= num; i++) {
    const numString = String(i);
    const arr = numString.split('');
    // go through digits and check for twos
    arr.forEach((digit) => { 
      if (digit == 2) numTwos++;
    });
  }
  return numTwos;
}

console.log(countTwos(1) === 0);
console.log(countTwos(3) === 1);
console.log(countTwos(13) === 2);
console.log(countTwos(1000) === 300);
console.log(countTwos(11420) === 4483);
console.log(countTwos(-13) === 2);

module.exports = countTwos;
