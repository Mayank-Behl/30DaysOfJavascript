/*
Given a function fn, return a memoized version of that function.

A memoized function is a function that will never be called twice with the same inputs. Instead it will return a cached value.

You can assume there are 3 possible input functions: sum, fib, and factorial.

sum accepts two integers a and b and returns a + b.
fib accepts a single integer n and returns 1 if n <= 1 or fib(n - 1) + fib(n - 2) otherwise.
factorial accepts a single integer n and returns 1 if n <= 1 or factorial(n - 1) * n otherwise.
 
*/
function memoize(fn) {
  const cache = {};

  return function (...args) {
    const key = JSON.stringify(args);

    if (key in cache) {
      return cache[key];
    }

    const result = fn.apply(this, args);
    cache[key] = result;

    return result;
  };
}

/*
Approach
Define a function called memoize that takes in a function fn as its parameter.

Create an empty object called cache to store previously computed results.

Return a new function that takes in any number of arguments using the spread syntax.

Use JSON.stringify() to convert the arguments into a string to use as a key for the cache object

Check if the key already exists in the cache object. If it does, return the cached value.

If the key doesn't exist in the cache, call the original function fn using apply() to pass the arguments and store the result in the cache object using the key as the property name.

Finally, return the computed result.
 */

let callCount = 0;
const memoizedFn = memoize(function (a, b) {
  callCount += 1;
  return a + b;
});
memoizedFn(2, 3); // 5
memoizedFn(2, 3); // 5
console.log(callCount); // 1
