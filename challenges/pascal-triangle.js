/*
  Construct Pascal's Triangle up to n levels deep, starting from n = 1. Each row
  is represented as an array of numbers.

  https://en.wikipedia.org/wiki/Pascal%27s_triangle

  e.g.
  pascalTriangle(1):
  [[1]]

  pascalTriangle(2):
  [
    [1],
    [1, 1]
  ]

  pascalTriangle(3) :
  [
    [1],
    [1,1],
    [1,2,1]
  ]

  pascalTriangle(6) :
  [
    [1],
    [1,1],
    [1,2,1],
    [1,3,3,1],
    [1,4,6,4,1],
    [1,5,10,10,5,1]
  ]
*/

function pascalTriangle(numRows) {
  let acc = []
  for (let i = 1; i <= numRows; i++) {
    console.log('acc: ', acc)
    let rows = new Array(i)
    // console.log('rows: ', rows)
    for (let j = 0; j < rows.length; j++) {
      console.log(rows)
      if (j === rows.length - 1) {
        rows[j] = 1
        acc.push(rows)
        break;
      }
      else if (j === 0) {
        rows[j] = 1
      }
      else {
        console.log('middle', i)
        console.log('j: ', j)
        let val = acc[i-2][j-1] + acc[i-2][j]
        rows[j] = val
      }
    }
  }
  return acc
}
console.log(pascalTriangle(6))




module.exports = pascalTriangle;
