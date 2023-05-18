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

// the Math.random() method generates numbers between 0 and 0.9 and not 1 in 16 decimal places
// the number can then be scaled depending on our usage or functionality. Below i would scale the number generated to 100

var num = Math.floor(Math.random() * 100);

console.log(num);

// arrays in js are a collection of items that are closely related
var eggs = ["alli", 12, "me"];
// prints the element of the array eggs conatained in the position 2
console.log(eggs[2]);
// practical examnple of Array

var guestList = ["alli", "huzzain", "opeyemi"];

var guest = prompt("give me your name so i can check the guest list to see if you're on it: ");

if (guestList.includes(guest)){
  alert("welcome in guest");
  var prob = guestList.includes(guest);
}else{
  alert("imposter alert!");
  var prob = guestList.includes(guest);
}
