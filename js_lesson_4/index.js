var myName;
myName = prompt("what is your name?");

alert("your name is " + myName);

myName.lenght;
// the length function returns the length of a string in number form
myName.slice(0, 140);
// the slice function prints only characters of a string contained within a range

myName.toUpperCase();
myName.toLowerCase();
// these 2 functions convert characters of a string to upper and lower case respectively

// Arithmetric operators include the +, -, *, /, % operators that work exactly like in C language
var newNum = 3 + 2;
var newNum = 3 - 2;
var newNum = 3 / 2;
var newNum = 3 % 2;
var newNum = 3 * 2;

// using and creating functions in javascript

weight = prompt("what is the weight value: ");
height = prompt("what is the weight value: ");
// we then call our function here passing in arguements but in this case the user will be
// be prompted for the argument
var bmi = bmiCalculator(weight, height);

console.log("BMI value is " + Math.floor(bmi));


// functions can be below or above function calls. user may do as they wish.
function bmiCalculator(weight, height){
  
  var calc = weight / (Math.pow(height, 2));
  calc = Math.round(calc);
  return calc;
}