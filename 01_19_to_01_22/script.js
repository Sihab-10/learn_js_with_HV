// template string

let age = 22;
let firstName = "Harshit"

// "my name is harshit and my age is 22 "

// let aboutMe = "my name is " + firstName + " and my age is " + age ;

let aboutMe = `my name is ${firstName} and my age is ${age}`;
console.log(aboutMe)

// আমরা মাঝে মাঝে template use করতে পারি string এর জন্য এর জন্য যেটা করতে হবে তা হল 
// আমাদের string এর value dynamically নেয়ার জন্য ${variable_name} এভাবে নিব 
// আর পুরো string টাকে ` ` back quote দিয়ে বন্ধ করতে হবে। 

// =========== Undefine =============
let myName;
console.log(typeof (myName));
/*
যখন আমরা variable কে বানিয়ে ফেলবো কিন্তু কোনো value assign
করবো না তখন আমরা তাকে বলবো undefine 
আরেকটা বিষয় let keywork এর ক্ষেত্রে যদি variable এর মধ্যে কিছু assign করা না হয় তাহলে 
কোন সমস্যা নাই কিন্তু const এর ক্ষেত্রে আমাকে অবশ্যই value assign করতে হবে 
*/ 
myName = "Sihab";
console.log(typeof myName)

// ============ Null ===========
let myVariable = null;
console.log(myVariable);
console.log(typeof myVariable) // its a bug or error in javaScript 
myVariable = "Sihab"
console.log(myVariable, typeof myVariable)

//  BigInt

let myNumber = 123;

// console.log(myNumber)
console.log("Max safe integer in javaScript is ",Number.MAX_SAFE_INTEGER);
/*
javaScript এ safely 9007199254740991 number পর্যন্ত integer নিতে পারবে এবং এর বেশি হলে আমরা তখন BigInt use করবো 
*/ 
let theNumber = BigInt(4000);
let numberIs = 100n;
console.log(theNumber)
console.log(numberIs)
console.log(theNumber + numberIs)

/*
BigInt define করার উপায় হচ্ছে just number এর আগে BigInt লিখে Parentheses মধ্যে সেই number আমরা দিয়ে দিব অথবা একটা number নিয়ে last এ n দিতে হবে। 
*/ 


