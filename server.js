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
app.get('/all', sendData);

function sendDate(request, response) {
    response.send(projectData);
};

//Post route
app.post('/add', callBack);

function callBack(req,res){
    res.send('Post Recieved');
}

//Post weather
const data=[];

app.post('/weather', addWeather);

function addWeather (req,res){
    data.push(req,body);
};