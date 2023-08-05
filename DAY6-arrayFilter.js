var filter = function (arr, fn) {
  return arr.reduce((result, value, index) => {
    if (fn(value, index)) {
      result.push(value);
    }
    return result;
  }, []);
};
//Reduce stores the result in the result and only pushes thoese elements which meet the criteria.
