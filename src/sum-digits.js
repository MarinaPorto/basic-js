const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a number, replace this number with
 * the sum of its digits until we get to a one digit number.
 *
 * @param {Number} n
 * @return {Number}
 *
 * @example
 * For 100, the result should be 1 (1 + 0 + 0 = 1)
 * For 91, the result should be 1 (9 + 1 = 10, 1 + 0 = 1)
 *
 */
function getSumOfDigits(n) {

  let arr = [..."" + n];
  let rez = getSum(arr)
  while (rez >= 10) {
    arr = [..."" + rez];
    rez = getSum(arr)

  }


  function getSum(arr) {
    console.log(arr)
    let result = 0;
    arr.forEach((el) => {
      result += +el
    })
    return result
  }

  console.log(rez)
  return rez
}

module.exports = {
  getSumOfDigits
};
