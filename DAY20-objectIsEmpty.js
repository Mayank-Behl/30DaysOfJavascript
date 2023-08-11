/**
 * @param {Object | Array} obj
 * @return {boolean}
 */
var isEmpty = function (obj) {
  for (let exisitingElement in obj) return false;
  return true;
};
