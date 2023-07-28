/*
    Given an integer n, return a counter function.
    This counter function initially returns n and then returns 1 more than the previous value every subsequent time 
    it is called (n, n + 1, n + 2, etc).
*/
function createCounter(val) {
  return function () {
    return val++;
  };
}
const counterIncrement = createCounter(10);
console.log(counterIncrement()); //10
console.log(counterIncrement()); //11
console.log(counterIncrement()); //12
