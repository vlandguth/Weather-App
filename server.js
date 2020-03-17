// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

// Start up an instance of app
const app = express();

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listener);

//Get route
const weatherData = [];

app.get('/all', sendData);

function sendDate(request, response) {
    response.send(projectData);
    console.log(projectData);
}

//Post route
app.post('/addWeather', addWeather);

function addWeather(req,res){
    newEntry = {
    weather: req.body.weather,
    date: req.body.date,
    content: req.body.content
    }

    weatherData.push(newEntry)
    res.send(weatherData)
    console.log(weatherData)
}
