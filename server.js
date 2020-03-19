const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = '&appid=a688bc9c10fc383bf3bd7bda058fb72a';

// Setup empty JS object to act as endpoint for all routes
let projectData = {};

// Require Express to run server and routes
const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const fetch = require("node-fetch");

// Start up an instance of app
const app = express();
app.use(express.static('website'));

/* Middleware*/
//Here we are configuring express to use body-parser as middle-ware.
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// Cors for cross origin allowance
app.use(cors());

// Setup Server
const port = 8000;
const server = app.listen(port, listener);

function listener() {
    console.log('server running');
    console.log(`running on localhost: ${port}`);
}

// Get Route
app.post('/all', getData);

function getData(request, res) {
    console.log('string' + JSON.stringify(request.body))
    let zipcode = request.body.zipcode;
    fetch(baseURL + zipcode + '&units=imperial' + apiKey)
        .then((response) => response.json())
        .then((data) => {
            projectData.temp = data.main.temp;
            projectData.feelings = request.body.feelings;
            projectData.date = request.body.date;
            res.send(projectData);
        })
}