const express = require("express");
const app = express();
const bodyParser = require("body-parser");
// the body parser module allows us to take inout from forms in webpage

app.use(bodyParser.urlencoded({extended: true}));

app.get("/", function(req, res){
    res.sendFile(__dirname + "/index.html");
})
// here we use the sendFile method because the send mothod enables us to pass just little code
// the __dirName variable is jsut like a script that hold the path to which our file is basically if our file
// is not in the same directory as our server file we need to make it look for it andywhere in the server

app.post("/", function(req, res){
    // the post method is used to get information input from users of site
    // it alse takes a route and callback funtion like the get method
    var num1 = Number(req.body.num1);
    var num2 = Number(req.body.num2);

    var result = num1 + num2;

    res.send("the result is "+result);
})

app.get("/BMICalculator", function(req, res){
    res.sendFile(__dirname + "/BMICalculator.html")
})

app.post("/BMICalculator", function(req, res){
    var height = Number(req.body.height);
    var weight = Number(req.body.weight);

    var result = weight / Math.pow(height, 2);

    res.send("your BMI reading is " + result);
})
app.listen(3000, function(){
    console.log("This server is now connected to port 3000");
})