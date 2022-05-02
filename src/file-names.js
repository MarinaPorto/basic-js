const { NotImplementedError } = require('../extensions/index.js');

/**
 * There's a list of file, since two files cannot have equal names,
 * the one which comes later will have a suffix (k),
 * where k is the smallest integer such that the found name is not used yet.
 *
 * Return an array of names that will be given to the files.
 *
 * @param {Array} names
 * @return {Array}
 *
 * @example
 * For input ["file", "file", "image", "file(1)", "file"],
 * the output should be ["file", "file(1)", "image", "file(1)(1)", "file(2)"]
 *
 */
function renameFiles( names ) {

  function makeFilesMap(names) {
    let files = new Map();
  
    names.forEach(element => {
      if (files.has(element)) {
        let value = files.get(element)
        let newName = element + "(" + value + ")";
        files.set(element, value + 1)
        files.set(newName, 1)
      } else {
        files.set(element, 1)
      }
  
    });
  
    return files
  }
  
  
  function renameFiles(names, files) {
    let result = [];
    for (let i = names.length - 1; i >= 0; i--) {
      if (files.get(names[i]) > 1) {
        let value = files.get(names[i]) -1 ;
        let newName = names[i] + "(" + value + ")";
        result.unshift(newName);
        files.set(names[i], value)
      } else {
        result.unshift(names[i]);
      }
    }
  return result
  }

  return renameFiles(names, makeFilesMap(names))
}

module.exports = {
  renameFiles
};
