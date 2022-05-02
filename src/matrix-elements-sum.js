const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given matrix, a rectangular matrix of integers,
 * just add up all the values that don't appear below a "0".
 *
 * @param {Array<Array>} matrix
 * @return {Number}
 *
 * @example
 * matrix = [
 *  [0, 1, 1, 2],
 *  [0, 5, 0, 0],
 *  [2, 0, 3, 3]
 * ]
 *
 * The result should be 9
 */
function getMatrixElementsSum( matrix) {
  let excludeIndexes = []
  let totalSum = 0;
    
  function findZero(arr) {
    let arrInd = []
    arr.forEach((elem, index) => {
      if (elem === 0) {
        arrInd.push(index)
      }
    })
    return arrInd
  }
    
  function sum(arr, excludeIndexes) {
    let result = 0;
    arr.forEach((el, index) => {
      if (!excludeIndexes.includes(index)) {
        result += el
      }
    })
    return result
  }
  
  matrix.forEach(el => {
    totalSum += sum(el, excludeIndexes)
    excludeIndexes = findZero(el)
  })
  return totalSum
}

module.exports = {
  getMatrixElementsSum
};
