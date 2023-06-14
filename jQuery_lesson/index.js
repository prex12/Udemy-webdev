// // the $ or jQuery == document.querySelectorAll();
// $("button").addClass("new");
// // adds new class
// $("buttton").removeClass("new");
// // removes class
// $("h1").css("color", "purple");
// // taps into the css and modifies it using the css as a function

// $("h1").text("HI");
// // allows us to manipulate text content of an element
// $("button").html("<em>hi</em>");
// // allows us to manipulate the innerHTML of an element

// $("img").attr("src");
// // this returns the value of the attribut src. basically getAttribute function
// $("img").attr("src","me.png");
// // this is the setAttribute function

$("body").keypress(function(event){
    $("h1").text(event.key);
})

// another way of writing the above code to addEventListeners is 
$("body").on("type", function(){})