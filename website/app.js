import { request } from "express";

// OpenWeatherMap API
const baseURL = 'http://api.openweathermap.org/data/2.5/weather?zip=';
const apiKey = 'a688bc9c10fc383bf3bd7bda058fb72a';

document.getElementById('generate'),addEventListener('click', performAction);

/* Global Variables */
// Get the inputs from the user
const zipcode = document.getElementById('zip');
const feelings = document.getElementById('feelings');

// Create a new date instance dynamically with JS
let d = new Date();
let newDate = d.getMonth() + '.' + d.getDate() + '.' + d.getFullYear();

// Get the weather data from OpenWeatherMap
function performAction(e) {
    getWeatherInfo(baseURL, zipcode, apiKey)

}
const getWeatherInfo = async (baseURL, zipcode, key) => {

    const request = await fetch(baseURL + zipcode + key)
    try {
        const data = await res.json();
        console.log(data)
        return data;
    } catch (error) {
        console.log("error", error);
    }
};

const updateUI = async () => {
    const request = await fetch('/all')
    try{
        const allData = await request.json()
        console.log(allData);
        document.getElementById('date').innerHTML = allData[0].date;
        document.getElementById('temp').innerHTML = allData[0].weather;
        document.getElementById('content').innerHTML = allData[0].content;
    }

    catch(error){
        console.log('error', error)
    }
}