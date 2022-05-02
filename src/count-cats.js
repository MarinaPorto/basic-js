const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix where you have to find cats by ears "^^"
 *
 * @param {Array<Array>} matrix 
 * @return {Number} count of cats found
 *
 * @example
 * countCats([
 *  [0, 1, '^^'],
 *  [0, '^^', 2],
 *  ['^^', 1, 2]
 * ]) => 3`
 *
 */
function countCats(cats) {
  let numberOfCats = 0;
  cats.forEach(element => {
    element.forEach((el) => {
      if (el === '^^') {
        numberOfCats += 1;
      }
    })
  });

  return numberOfCats

}

module.exports = {
  countCats
};
