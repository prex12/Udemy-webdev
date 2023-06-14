const express = require('express');
// here were using the express node module or library so we first had to create a json file and also install 
// express as a dependant. after that i needed to import the library into my file as shown above
const app = express();
// here is just another thiing that is need to be done before we can now say we have done the needful
// using the get method we're basically giving the server information to display to the user from the server
// this inlcudes specifying that the route "/" (the route is basically a page of a site) and a callback to a response to be sent to the local computer
app.get("/", function(req, res){
    res.send("<h1>Hello World</h1>");
})

app.get("/contact", function(req,res){
    res.send("<p>Contact me o via ChillTube</p>")
})

app.get("/about", function(req,res){
    res.send("<h1>my name is Huzzain</h1><p>Contact me o via ChillTube</p>");
})

app.listen(3000, function(){
    console.log("server started on port 3000");
})