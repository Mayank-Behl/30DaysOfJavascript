/**
 * Given a function fn, return a new function that is identical to the original function except that it ensures fn is called at most once.

The first time the returned function is called, it should return the same result as fn.
Every subsequent time it is called, it should return undefined.
 */
var once = function (fn) {
  let usedOnce = false;
  let result;
  return function (...args) {
    if (!usedOnce) {
      result = fn(...args);
      usedOnce = true;
      return result;
    }
    return undefined;
  };
};

var myFunc = function (a, b, c) {
  return a + b + c;
};
var onceFunc = once(myFunc);
console.log(onceFunc(1, 2, 3)); // O/P:6
console.log(onceFunc(4, 5, 6));

/**
 * let fn = (a,b,c) => (a + b + c)
 * let onceFn = once(fn)
 *
 * onceFn(1,2,3); // 6
 * onceFn(2,3,6); // returns undefined without calling fn
 */
