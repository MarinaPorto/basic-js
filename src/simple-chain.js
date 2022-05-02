const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement chainMaker object according to task description
 *    `'( 1 )~~( 2 )~~( 3 )'`
 */


const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length

  },
  addLink(value) {
    if (arguments.length === 0) {
      this.chain.push(" ")
    }  else if (value == null) {
      this.chain.push("null")
    }else {
      this.chain.push(value)
    }
    return this
  },
  removeLink(position) {
    if (position > this.chain.length || position <= 0 || typeof (position) !== "number") {
      this.chain = []
      throw new Error('You can\'t remove incorrect link!')

    }
    this.chain.splice(position-1, 1)
    return this
  },
  reverseChain() {
    this.chain.reverse()
    return this
  },
  finishChain() {
    let result = "( " + this.chain.join(" )~~( ") + " )";
    this.chain = []
    return result
  }
};

module.exports = {
  chainMaker
};
