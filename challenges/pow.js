/* Write a function that calculates x^y, where x is given as the base and y is given as the power.
 * Use recursion!
 */

function pow(base, power) {
	return power === 1 ? base * power : base * pow(base, power - 1)

	

}

module.exports = pow;
