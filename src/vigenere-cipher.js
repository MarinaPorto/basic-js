const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class VigenereCipheringMachine that allows us to create
 * direct and reverse ciphering machines according to task description
 * 
 * @example
 * 
 * const directMachine = new VigenereCipheringMachine();
 * 
 * const reverseMachine = new VigenereCipheringMachine(false);
 * 
 * directMachine.encrypt('attack at dawn!', 'alphonse') => 'AEIHQX SX DLLU!'
 * 
 * directMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => 'ATTACK AT DAWN!'
 * 
 * reverseMachine.encrypt('attack at dawn!', 'alphonse') => '!ULLD XS XQHIEA'
 * 
 * reverseMachine.decrypt('AEIHQX SX DLLU!', 'alphonse') => '!NWAD TA KCATTA'
 * 
 */
class VigenereCipheringMachine {
  direct;
  
  constructor(direct) {
    if (direct !== undefined) {
      this.direct = direct;
    } else {
      this.direct = true
    }    
  }

   encrypt(input, keyword) {

    if (input == null|| keyword == null) {
      throw new Error(`Incorrect arguments!`)
    }
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    let inputLetters = [];
    let excludedСharacters = new Map();
    let result = [];
    let keyIndex = 0;

    Array.from(input).forEach((element, index) => {
      if (alphabet.includes(element)) {
        inputLetters.push(element);
      } else {
        excludedСharacters.set(index, element)
      }
    });

    inputLetters.forEach((el) => {
      let c = (alphabet.indexOf(el) + alphabet.indexOf(keyword[keyIndex])) % alphabet.length
      result.push(alphabet[c]);
      keyIndex++;
      if ((keyIndex) === keyword.length)
        keyIndex = 0;
    })

    excludedСharacters.forEach((value, key) => {
      result.splice(key, 0, value)
    })

    if (this.direct === true) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
    
  }

  decrypt(input, keyword) {
    if (input == null|| keyword == null) {
      throw new Error(`Incorrect arguments!`)
    }
    let alphabet = ["A", "B", "C", "D", "E", "F", "G", "H", "I", "J", "K", "L", "M", "N", "O", "P", "Q", "R", "S", "T", "U", "V", "W", "X", "Y", "Z"];
    input = input.toUpperCase();
    keyword = keyword.toUpperCase();
    let inputLetters = [];
    let excludedСharacters = new Map();
    let result = [];
    let keyIndex = 0;

    Array.from(input).forEach((element, index) => {
      if (alphabet.includes(element)) {
        inputLetters.push(element);
      } else {
        excludedСharacters.set(index, element)
      }
    });

    inputLetters.forEach((el) => {
      let p = (alphabet.indexOf(el) + alphabet.length -
        alphabet.indexOf(keyword[keyIndex])) % alphabet.length;

      result.push(alphabet[p]);
      keyIndex++;
      if ((keyIndex) === keyword.length)
        keyIndex = 0;
    })
    excludedСharacters.forEach((value, key) => {
      result.splice(key, 0, value)
    })

    if (this.direct === true) {
      return result.join("");
    } else {
      return result.reverse().join("");
    }
    

  }
}

module.exports = {
  VigenereCipheringMachine
};
