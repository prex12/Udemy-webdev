const express = require('express');
const app = express();
const https = require('https');

app.get("/", (req, res)=>{
    https.get("https://api.openweathermap.org/data/2.5/weather?q=London&appid=061230294bc4b7f52f36eddac6bab20c", (response) =>{
        response.on("data", (data) => {
            const weatherData = JSON.parse(data);
            const temp = weatherData.main.temp;
            const description = weatherData.weather[0].description;
            const icon = weatherData.weather[0].icon;
            const weatherIcon = "https://openweathermap.org/img/wn/" + icon + "@2x.png";

            res.write("<p>the temperature is " + temp + " degrees celsius.</p>");
            res.write("<h1>with " + description + "</h1>");
            res.write("<img src =" + weatherIcon + ">");
            res.send();
        })
    })

    
})



app.listen(3000, function(){
    console.log("this server is now online for the weather app project");
})