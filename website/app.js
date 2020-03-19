//import fetch from "node-fetch";

// OpenWeatherMap API
const baseURL = 'http://localhost:8000/all/';

/* Global Variables */
// Get the inputs from the user

const dateContainer = document.getElementById('entry-date')
const tempContainer = document.getElementById('entry-temp')
const contentContainer = document.getElementById('entry-content')
let feelings = document.getElementById('feelings');
let zipcode = document.getElementById('zip');




// Create a new date instance dynamically with JS
let d = new Date();
let newDate = (d.getMonth()+1) + '.' + d.getDate() + '.' + d.getFullYear();

const getWeather = async (baseURL, zipcode) => {
    const url = `${baseURL}zipcode=${zipcode}`
    const response = await fetch(url)
    let weatherData = await response.json()
    console.log(weatherData)
    return weatherData
};


// Post



const updateUI = async () => {
    let opts = {
        'zipcode': zipcode.value,
        'feelings': feelings.value,
        'date': newDate
    }

    fetch(baseURL, {
        method: 'POST',
        credentials: 'same-origin',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(opts)
    })
        .then((response) => response.json())
        .then((data) => {
            //res.send(projectData);
            dateContainer.innerHTML = `<p class="entry-item">Today's Date: </p>${data.date}`
            contentContainer.innerHTML = `<p class="entry-item">You are feeling: </p>${data.feelings}`
            tempContainer.innerHTML = `<p class="entry-item">Temperature: </p>${data.temp}`
        })
}

document.getElementById('generate').addEventListener('click', updateUI);