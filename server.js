// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

// Start up an instance of app
const app = express();
app.use(express.static('website'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Initialize the main project folder
app.use(express.static('website'));

// Setup Server
const port = 8000;
const server = app.listen(port, listener);

function listener() {
    console.log('server running');
    console.log('running on localhost: ${port}');
}

//Get route
const projectData = [];

app.get('/all', sendData);

function sendData(request, response) {
    response.send(weatherData);
    console.log(weatherData);
}

//Post route
app.post('/add', addWeather);

function addWeather(request, response){
    newEntry = {
    weather: request.body.weather,
    date: request.body.date,
    content: request.body.content
    }

    weatherData.push(newEntry)
    response.send(weatherData)
    console.log(weatherData)
}

projectData.unshift(newEntry);
