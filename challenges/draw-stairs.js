/* Write a function that console logs a staircase of any given height where 1 <= N <= 100.
 The staircase must climb up from left to right. The last line should only consist of asterisks,
 without any leading/trailing spaces.
 
 For example:     
 drawStairs(6) ->          
     *
    **
   ***
  ****
 *****
******

*/

function drawStairs(n) {
    if (n >= 1 && n <= 100) {
        let stairs = '';
        for (let i = 1; i <= n; i++) {
            stairs += (' '.repeat(n - i) + '*'.repeat(i));
            if (n !== i) {
                stairs += '\n'
            }
        }

        return stairs;
    }
    return undefined;
}



var output = (drawStairs(6));
console.log('------------------------------------');
console.log(output);
console.log('------------------------------------');


module.exports = drawStairs;
