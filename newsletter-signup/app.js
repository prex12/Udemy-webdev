const express = require('express');
const app = express();
const bodyParser = require('body-parser');
const request = require('request');

app.use(bodyParser.urlencoded({extended: true}));

// i have noticed before that when trying to bring in all the other files that affect like the stylesheet and co. we can't get them cos we haven't referred to them
// to don this we need the static method of out express module

app.use(express.static("public"));
// so basically we've refered to a folder which contains the files needed to form the site up

app.get("/", (req, res)=>{
    res.sendFile(__dirname + "/signup.html");
})

app.post("/", (req, res)=>{
    const firstName = req.body.firstName;
    const lastName = req.body.lastName;
    const email = String(req.body.email);
    console.log("welcome " + firstName + " " + lastName + " " + email);

    
})

app.listen(3000, () =>{
    console.log("server up and running on port 3000");
})