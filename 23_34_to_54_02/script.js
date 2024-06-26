"use strict";
// use strict is help you to write error-free code.

console.log("Hello World");
// console.log can print somethng on console 

//=================================== intro to variables===================================

// variables can store some information
// we can use that information later
// we can change that information later

// declare a variable
// variable name is case-sensative

var firstName = "Sihab";


// use a variable 
console.log(firstName);


// change value 
firstName = "Sifat";
console.log(firstName);

//==================================== rules for naming variable=========================//

// you cannot start with number
// example:-
// 1value(invalid)
// value1(valid)

// you can use only underscore _ or dollar symbol $
// first_name (valid)
// _firstname (valid)

// first$name (valid)
// $firstname (valid)

// you cannot use spaces

// first name (invalid)


// convention 
// start with small letter and use camelCase

var first_name = "sihab"; // snake_case writing
var firstName = "sihab"; // camelCase writing

// =========================================== let keyword =================================
// declare variable with let keyword

let SecondName = "sihab";
SecondName = "Sifat";
console.log(SecondName);

// declare variable with const keyword
const pi = 3.14;
console.log(pi);