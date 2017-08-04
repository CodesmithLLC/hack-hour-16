

/**
 * Write a function to reverse an array in place
 *
 * "In place" means "without creating a new object in memory"
 *
 * In some languages, strings are mutable (like in Ruby). In other languages,
 * such as Python and Javascript, strings are immutable, meaning they cannot
 * be changed after they're created.
 *
 * Since strings are immutable in javascript, we will be reversing an array of characters instead.
 *
 * DO NOT USE THE BUILT IN REVERSE METHOD
 */

const char = ['a', 'b', 'c', 'd'];

function reverseInPlace(array) {
  if (array.length === 0 || null) return [];
  for (let i = 0; i < array.length; i += 1) {
    array.splice(i, 0, array.pop());
  }
  return array;
}

// console.log(reverseInPlace(char));
module.exports = reverseInPlace;
