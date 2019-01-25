// ==== Callbacks ====  

/* Step 1: Create a higher-order function that accepts a callback
  * Create a higher-order function named consume that can take 3 parameters.
  * The first two parameters can accept any argument
  * The last parameter accepts a callback 
  * In the body of the function return the callback with the two parameters that you created
*/

const consume = (x, y, fn) => fn(x, y)

/* Step 2: Create several functions to callback with consume();
  * Create a function named add that returns the sum of two numbers
  * Create a function named multiply that returns the product of two numbers 
  * Create a function named greeting that accepts a first and last name and returns "Hello first-name last-name, nice to meet you!"
*/

const add = (x, y) => x + y
const multiply = (x, y) => x * y
const greeting = (first, last) => `Hello ${first} ${last}, nice to meet you!`

/* Step 3: Check your work by un-commenting the following calls to consume(): */
consume(2,2,add);
consume(10,16,multiply);
consume("Mary","Poppins", greeting);


// ==== Closures ==== 

// Explain in your own words why `nestedfunction()` can access the variable `internal`.

// Explanation: 
/*
Because `nestedFunction` is declared in the same scope as `internal`, it has access to it. This is the concept of closure: the ability of a function to "remember" the value of variables in the context in which it was declared. It has access to any variable binding at the same level of scope or higher, but not lower.
*/

const external = "I'm outside the function";

function myFunction() {
  console.log(external);
  const internal = "Hello! I'm inside myFunction!";

  function nestedFunction() {
    console.log(internal);
  };
  nestedFunction();
}
myFunction();