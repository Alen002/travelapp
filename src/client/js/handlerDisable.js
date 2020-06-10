/**** Global Variables ****/

import { save } from "./save";

// Geonames.org variables
const apiGeonamesURL = 'http://api.geonames.org/';
const apiGeonamesUser = process.env.APIGEONAMES;
const apiWeatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const apiWeatherbitUser = process.env.APIWEATHERBIT;

// **** Fetch results from the APIs are posted to the server ****
function handleSubmit(event) {
    event.preventDefault();
    let cityName = document.getElementById('city-name').value
    // Input validation
    if (cityName.length == 0) {alert('Please enter a city');} 

    
    let userData = {}; 
    
    // Fetch data from geonames.org
    const apiGeonamesPath = `${apiGeonamesURL}postalCodeSearchJSON?placename=${cityName}&username=${apiGeonamesUser}`;
    
    geonames(apiGeonamesPath)
    .then(data => {
        console.log('Output on geonames: ',data.postalCodes[0]);
        document.getElementById('geo-longitude').innerHTML= data.postalCodes[0].lat;
        document.getElementById('geo-latitude').innerHTML= data.postalCodes[0].lng;
        document.getElementById('geo-country').innerHTML= data.postalCodes[0].countryCode;
        
        userData.latitude = data.postalCodes[0].lat;
        userData.longitude = data.postalCodes[0].lng;
        
        console.log('It worked', userData.latitude);
    });
    
    // Fetch data from weatherbit.io
    const apiWeatherbitPath = `${apiWeatherbitURL}&lat=${userData.latitude}&lon=${userData.longitude}&key=${apiWeatherbitUser}`;
    /* const testing = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=47.558395&lon=7.573271&key=${apiWeatherbitUser}`; */

    /* lat=38.123&lon=-78.543 */
    weatherbit(apiWeatherbitPath)
    .then(data => {
        console.log('Output on weatherbit: ',data);
        document.getElementById('weather-longitude').innerHTML= data.lon;
        document.getElementById('weather-latitude').innerHTML= data.lat;
        console.log("Weatherbit", userData.latitude);
    });



    




    // Fetch data from pixabay
    save();
    // Process finished
    console.log('The following city was entered:', cityName);
    console.log("::: City has been submitted :::");
};

const processData = async (url) => {
    try {
        const response = await fetch(url);
        const data = await response.json();
        return data;
    } 
        catch (error) {
        console.log(error);
    }
};




// **** Fetch geonames.org ****
const geonames = async (url) => {
    try {
        const response = await fetch(url);
        const cityData = await response.json();
        return cityData;
    } 
        catch (error) {
        console.log(error);
    }
};

// **** Fetch Weatherbit.io ****
const weatherbit = async (url) => {
    try {
        const response = await fetch(url);
        const weatherData = await response.json();
        console.log('weatherData: ',weatherData);
        return weatherData;
    }
        catch (error) {
            console.log(error);
        }
};

export { handleSubmit };

