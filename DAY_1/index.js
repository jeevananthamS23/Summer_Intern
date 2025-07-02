//named functions
function Hello() {
  console.log("Hello, world!");
}

Hello();


//arrow functions ES6 features.
const a = () => {
  console.log("Hi there!");
};

a(); 

//functions expressions
const add = function(a, b) {
  return a + b;
};

console.log(add(5, 3));


//call back functons
function user(name, callback) {
  console.log("Hello " + name);
  callback();
}

function fun() {
  console.log("Goodbye!");
}
user("Rock", fun);


// functions hoisting
// In JavaScript, Can call a named function even before it is defined.
sayHi();  

function sayHi() {
  console.log("Hi!");
}

// IIFE -Immediately Invoked Function Expression:

//A function that runs immediately after it’s defined.
(function() {
  console.log("I run automatically!");
})();


// (function() { })() define and run at the same time.
// Good for hiding variables and not polluting the global space.