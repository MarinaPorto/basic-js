const { NotImplementedError } = require('../extensions/index.js');

/**
 * Implement class DepthCalculator with method calculateDepth
 * that calculates deoth of nested array
 * 
 * @example
 * 
 * const depthCalc = new DepthCalculator();
 * depthCalc.calculateDepth([1, 2, 3, 4, 5]) => 1
 * depthCalc.calculateDepth([1, 2, 3, [4, 5]]) => 2
 * depthCalc.calculateDepth([[[]]]) => 3
 *
 */

 class DepthCalculator {
  maxLevel = 1;
  currentLevel = 1;
   result = 0;
  calculateDepth(arr) {
   
    arr.forEach((element, index, array) => {
      if (Array.isArray(element)) {
        this.currentLevel += 1;
        this.calculateDepth(element)
      }
      if (index === array.length-1 && this.currentLevel === 1) {
                this.result = this.maxLevel;
        this.maxLevel = 1;
      }
     
    });
    if (this.currentLevel > this.maxLevel) {
      this.maxLevel = this.currentLevel
     
    }
    if (this.currentLevel > 1) {
       this.currentLevel = this.currentLevel - 1;
    }
  
    return this.result
  }

}

module.exports = {
  DepthCalculator
};
