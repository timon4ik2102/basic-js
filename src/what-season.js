module.exports = function getSeason(date) {
  if (!date) return 'Unable to determine the time of year!'
  // if (isNaN(date)) throw new Error
  if (Object.prototype.toString.call(date) !== '[object Date]') throw new Error();
  let curMonth = date.getMonth()
  if (curMonth == 0 || curMonth == 1 || curMonth == 11) return 'winter';
  if (curMonth == 2 || curMonth == 3 || curMonth == 4) return 'spring'
  if (curMonth == 5 || curMonth == 6 || curMonth == 7) return 'summer'
  if (curMonth == 8 || curMonth == 9 || curMonth == 10) return 'autumn'
  // remove line with error and write your code here
};
