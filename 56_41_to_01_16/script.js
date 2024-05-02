/*
=================================================================================================================
string indexing, useful string method, typeof, string to number , number to string conversion, string concatination
=================================================================================================================
*/ 

// String indexing
// space is also included in string indexing
let firstName = "Sihab"
console.log("firstName is ", firstName)


//  s    i   h   a   b
//  0    1   2   3   4

console.log("The 3rd index of firstName string is ",firstName[3]);

// length of string
// firtName.length

// last Index : length - 1

console.log("the length of firstName is ", firstName.length);
console.log("the last index value of firstName variable is ",firstName[firstName.length-1]);

// String methods

// trim()
// trim() -> এই  String method এর কাজ হলো যত প্রকার এর space আছে সেগুলো remove করে দেয় । 
// toUpperCase()
// toUpperCase() -> এই String method এর কাজ হলো String এর প্রত্যেকটা লেটারকে upper case এ নিয়ে যাওয়া ।  
// toLowerCase()
// toLowerCase() -> এই String method এর কাজ হলো String এর প্রত্যেকটা লেটারকে lower case এ নিয়ে যাওয়া । 
// slice()

let SecondName = "   Sarar   ";
console.log(SecondName.length);

let newString = SecondName.trim(); // "sarar" 
console.log(newString)
console.log(firstName.length)

console.log(SecondName.toUpperCase());
console.log(SecondName.toLowerCase());

// start index
// slice(0,6) -> 0 1 2 3 4 5
// slice(1) -> start 1 to the end index
// end index
let myString = "IloveBD";
myString = myString.slice(0,6); // Sar
console.log(myString);

// typeof operator

// data types (primitive)
// n -> null
// n -> number
// b -> BigInt
// b -> boolean
// s -> string
// s -> symbol
// u -> undefine

// data types (non-primitive)

// object

let age = 22;
let myName = "sihab";
console.log(typeof(age))
console.log(typeof(myName))

// convert number to string

age = age + ""; // converted int to string
console.log(typeof(age)) // "22"

// convert string to number

let myStr = +"34";
console.log(typeof myStr);

// number to string conversion
let myAge = 18;
myAge = String(myAge);
console.log(typeof myAge);
// string to number conversion
let myMoney = "20";
myMoney = Number(myMoney);
console.log(typeof myMoney);

// string concatenation

let string1 = "Sihab";
let string2 = "Sarar";

let fullName = string1 + " " +string2;
console.log(fullName);

// some fun

let string3 = "17";
let string4 = "10";
let add = Number(string3) + Number(string4); 
console.log(add);

// same fun

let string5 = "18";
let string6 = "10";
let sum = +string5 + +string6;
console.log(sum);