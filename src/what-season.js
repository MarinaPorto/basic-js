const { NotImplementedError } = require('../extensions/index.js');

/**
 * Extract season from given date and expose the enemy scout!
 * 
 * @param {Date | FakeDate} date real or fake date
 * @returns {String} time of the year
 * 
 * @example
 * 
 * getSeason(new Date(2020, 02, 31)) => 'spring'
 * 
 */
 

 function testDate (date) {
  try {
    date.getTime() 
  } catch {
    return false
  }
  return true
  }
  


function getSeason(date) {
  let season = ""
  
  // if (Object.prototype.toString.call(date) === '[object Date]' || typeof(date) === "number") {
  //   throw new Error('Invalid date!');
  // } 
   if (arguments.length == 0) {
    return season = 'Unable to determine the time of year!';
  }




   if (isNaN(Date.parse(date)) || !testDate(date)) {
    throw new Error('Invalid date!');
  }



  let month = date.getMonth() + 1;


  if (month === 12 || month === 1 || month === 2) {
    season = 'winter'
  } else if (month >= 3 && month <= 5) {
    season = 'spring'
  } else if (month >= 6 && month <= 8) {
    season = 'summer'
  }
  else if (month >= 9 && month <= 11) {
    season = 'autumn'
  } else {
    season = "Invalid date!"
  }

  return season
}

module.exports = {
  getSeason
};
