/**
 * @param {Array} arr
 * @param {number} size
 * @return {Array[]}
 */
var chunk = function (arr, size) {
  let chunkedArray = [];
  let index = 0;

  while (index < arr.length) {
    chunkedArray.push(arr.slice(index, index + size));
    index += size;
  }

  return chunkedArray;
};
