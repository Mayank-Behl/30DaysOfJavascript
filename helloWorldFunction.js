var createHelloWorld = function () {
  return () => "Hello World";
};

// Call the createHelloWorld function to get the returned arrow function
const helloFunction = createHelloWorld();

// Call the returned function to get the final result
const message = helloFunction();

console.log(message); // This will log "Hello World" to the console
