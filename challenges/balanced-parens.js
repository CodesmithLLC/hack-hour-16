/*
 * write a function that takes a string of text and returns true if
 * the parentheses are balanced and false otherwise.
 *
 * Example:
 *   balancedParens('(');  // false
 *   balancedParens('()'); // true
 *   balancedParens(')(');  // false
 *   balancedParens('(())');  // true
 *
 * Step 2:
 *   make your solution work for all types of brackets
 *
 * Example:
 *  balancedParens('[](){}'); // true
 *  balancedParens('[({})]');   // true
 *  balancedParens('[(]{)}'); // false
 *
 * Step 3:
 * ignore non-bracket characters
 * balancedParens(' var wow  = { yo: thisIsAwesome() }'); // true
 * balancedParens(' var hubble = function() { telescopes.awesome();'); // false
 *
 *
 */

const openParens = '{[('
const closedParens = '}])'
const allParens = openParens + closedParens;

function balancedParens(input) {
  input = input.split('').filter(char => allParens.includes(char)).join('');
  const stack = [];

  for (let i = 0; i < input.length; i += 1) {
    if (openParens.includes(input[i])) {
      stack.push(input[i]);
    }
    if (closedParens.includes(input[i])) {
      if (stack.length === 0) {
        return false;
      }
      if (closedParens.indexOf(input[i]) === openParens.indexOf(stack[stack.length - 1])) {
        stack.pop()
      }
    }
  }
  return !stack.length;
}

module.exports = balancedParens;
