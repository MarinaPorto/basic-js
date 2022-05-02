const { NotImplementedError } = require('../extensions/index.js');

/**
 * Given a string, return its encoding version.
 *
 * @param {String} str
 * @return {String}
 *
 * @example
 * For aabbbc should return 2a3bc
 *
 */
function encodeLine(str) {
  let newStr = "";
  let count = 1;


  for (let i = 1; i <= str.length; i++) {

    if (str[i] === str[i - 1]) {
      count += 1;
    } else {

      if (count < 2) {
        newStr += str[i - 1]
      } else {
        newStr += count + str[i - 1];
      }
      count = 1;
    }
  }
  return newStr
}

module.exports = {
  encodeLine
};
