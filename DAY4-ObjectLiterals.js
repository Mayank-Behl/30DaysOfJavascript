class Counter {
  constructor(init) {
    this.init = init;
    this.presentCount = init;
  }

  increment() {
    this.presentCount += 1;
    console.log(this.presentCount);
    return this.presentCount;
  }

  decrement() {
    this.presentCount -= 1;
    console.log(this.presentCount);
    return this.presentCount;
  }

  reset() {
    this.presentCount = this.init;
    console.log(this.presentCount);
    return this.presentCount;
  }
}

var createCounter = function (init) {
  return new Counter(init);
};
/*To create an object based on a class we use the new operator i.e. we create an object called createCounter based on the Counter class,
 passing in the init*/

const newCounter = createCounter(6);

newCounter.increment();
newCounter.reset();
newCounter.decrement();
