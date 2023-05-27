var newEventButton = document.querySelectorAll(".drum").length;

for (var i = 0; i < newEventButton; i++){
    document.querySelectorAll(".drum")[i].addEventListener("click", function (){
        // audio.play();
        var buttonPressed = this.textContent;
        pressed(buttonPressed);
        buttonAnimation(buttonPressed);
       
    });
}

document.addEventListener("keypress", function(event){
    pressed(event.key);
    buttonAnimation(event.key);
})

function pressed(keys){
    switch(keys){
        case "w" :
            var tom1 = new Audio("/sounds/tom-1.mp3");
            tom1.play();
        break;
        case "a" :
            var tom1 = new Audio("sounds/tom-2.mp3");
            tom1.play();
        break;
        case "s" :
            var tom1 = new Audio("sounds/tom-3.mp3");
            tom1.play();
        break;
        case "d" :
            var tom1 = new Audio("sounds/tom-4.mp3");
            tom1.play();
        break;
        case "j" :
            var tom1 = new Audio("sounds/snare.mp3");
            tom1.play();
        break;
        case "k" :
            var tom1 = new Audio("sounds/crash.mp3");
            tom1.play();
        break;
        case "l" :
            var tom1 = new Audio("sounds/kick-bass.mp3");
            tom1.play();
        break;

        default: console.log(buttonPressed);
    }
}
//adding animations to buttons
function buttonAnimation(vibe){
    var but = document.querySelector("." + vibe).classList;
    but.add("pressed");
    setTimeout(function(){
        but.remove("pressed");
    }, 100)
}

// Higher order functions take functions as argument/ parameter
// function add (num1, num2){
//     return num1 + num2;
// }

// function subtract(num1, num2){
//     return num1 - num2;
// }
// function divide(num1, num2){
//     return num1 / num2;
// }
// function multiply(num1, num2){
//     return num1 * num2;
// }
// function modulo(num1, num2){
//     return num1 % num2;
// }

// function calc(num1, num2, operator){
//     return operator(num1, num2);
// }

// calc(12, 4, subtract);

// constructor fuunctions are functions that allow us to define and add objects without having to create new indvidual objects each time

// to create normal objects we do
// var newObject = {
//     name: "alli"
//     age: 21
// }

// constructor objects

// function NewBoy(name, age, level, tasks, clean){
//     this.name = name;
//     this.age = age;
//     this.level =level;
//     this.tasks = tasks;
//      this.clean = function (){
//          alert("cleaning")
//      }
// }

// calling the function we do:

// var boy1 = new NewBoy("alli Huzzain", 12, 300, ["acquire data", "filter data"]);