/**
 * @param {Array} arr1
 * @param {Array} arr2
 * @return {Array}
 */
var join = function (arr1, arr2) {
  const result = {};

  //making up the initial object map
  arr1.forEach((item) => {
    result[item.id] = item;
    //result[key] = value
    //result object has the [key] against which the value is mapped
  });

  arr2.forEach((item) => {
    //if key exists update if present / add if not present
    if (result[item.id]) {
      Object.keys(item).forEach((key) => {
        result[item.id][key] = item[key];
      });
    } else {
      result[item.id] = item;
    }
  });

  return Object.values(result);
  //returns the values form the object map
};
