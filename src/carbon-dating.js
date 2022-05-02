const { NotImplementedError } = require('../extensions/index.js');

const MODERN_ACTIVITY = 15;
const HALF_LIFE_PERIOD = 5730;

/**
 * Determine the age of archeological find by using
 * given MODERN_ACTIVITY and HALF_LIFE_PERIOD values
 * 
 * @param {String} sampleActivity string representation of current activity 
 * @return {Number | Boolean} calculated age in years or false
 * in case of incorrect sampleActivity
 *
 * @example
 * 
 * dateSample('1') => 22387
 * dateSample('WOOT!') => false
 *
 */
function dateSample(sampleActivity) {

  let reg = /^\d+\.?\d*$/gm;
  let initialActivity = 15;
  if (arguments.length === 0 || isNaN(sampleActivity) || typeof (sampleActivity) !== "string" ||
    +sampleActivity > initialActivity || +sampleActivity <= 0) {
    return false
  }

  if (typeof (sampleActivity) === "string" && sampleActivity.match(reg) === null) {
    return false
  }

  let finalActivity = +sampleActivity;
  let result = Math.ceil(Math.log(initialActivity / finalActivity) / (0.693 / 5730))
  return result
}


module.exports = {
  dateSample
};
