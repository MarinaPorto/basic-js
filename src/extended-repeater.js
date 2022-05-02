const { NotImplementedError } = require('../extensions/index.js');

/**
 * Create a repeating string based on the given parameters
 *  
 * @param {String} str string to repeat
 * @param {Object} options options object 
 * @return {String} repeating string
 * 
 *
 * @example
 * 
 * repeater('STRING', { repeatTimes: 3, separator: '**', 
 * addition: 'PLUS', additionRepeatTimes: 3, additionSeparator: '00' })
 * => 'STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS**STRINGPLUS00PLUS00PLUS'
 *
 */
function repeater(str, options) {
  let strParam;
  if (typeof (str) === 'object') {
    strParam = `${str}`
  } else {
    strParam = str !== null ? str.toString() : "null"
  }
  let repeatTimes = options.repeatTimes ? options.repeatTimes : 1
  let separator = options.separator ? options.separator : '+'
  let addition = options.addition ? options.addition.toString() : ''
  if (typeof (options.addition) === 'object') {
    addition = `${options.addition}`
  }
  if (options.addition == false) {
    addition = "false"
  }
  if (options.addition === null) {
    addition = "null"
  }
  let additionRepeatTimes = options.additionRepeatTimes ? options.additionRepeatTimes : 1
  let additionSeparator = options.additionSeparator ? options.additionSeparator : '|'
  let additionString = additionRepeatTimes > 1 ? (addition + additionSeparator).repeat(additionRepeatTimes - 1) + addition : additionRepeatTimes === 1 ? addition : ""
  let mainString = strParam + additionString
  let result = repeatTimes > 1 ? (mainString + separator).repeat(repeatTimes - 1) + mainString : repeatTimes === 1 ? mainString : ""
  return result

}

module.exports = {
  repeater
};
