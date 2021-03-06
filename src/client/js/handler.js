import { post } from "./post";
import { pixabay } from "./pixabay";
import { date } from "./date";
import { processData } from "./processData";
import { forecast } from "./forecast";


/**** Global Variables ****/
const apiGeonamesURL = 'http://api.geonames.org/';
const apiGeonamesUser = process.env.APIGEONAMES;
const apiWeatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const apiWeatherbitUser = process.env.APIWEATHERBIT;
const apiPixabayUser = process.env.APIPIXABAY;
const postPath = 'http://localhost:8080/save';

function handleSubmit(event) {
    event.preventDefault();
    // User input for city and departure date
    let cityName = document.getElementById('city-name').value
    let inputDate = document.getElementById('city-date').value
    console.log(inputDate);

    //set min-heigt of image to 550px
    const showImage = document.querySelector('#travel-image');
    showImage.style.minHeight = '550px';


    // Input validation
    if (cityName.length == 0) {alert('Please enter a city');} 
    if (inputDate.length == 0) {alert('Please enter your departure date');} 
    
    const apiGeonamesPath = `${apiGeonamesURL}postalCodeSearchJSON?placename=${cityName}&username=${apiGeonamesUser}`;
    
    let userData = {}; 

    // Fetch data from the pixabay API
    const urlPixabay = `https://pixabay.com/api/?key=${apiPixabayUser}&q=${cityName}&image_type=photo`;
    pixabay(urlPixabay);
      
    // Fetching data from geonames, weatherbit and pixabay
    processData(apiGeonamesPath)
    .then(data => {
        console.log('Output on geonames: ',data.postalCodes[0]);
           
        document.getElementById('info-trip').innerHTML = `My trip to: ${cityName}, ${data.postalCodes[0].countryCode}`;
        // geonames data is saved in the userData object
        userData.latitude = data.postalCodes[0].lat;
        userData.longitude = data.postalCodes[0].lng;
        userData.country = data.postalCodes[0].countryCode;
        userData.city = cityName;

        return data; 
    })
    // lat and lon from geonames are used for the weatherbit API after previous fetch has been settled
    .then(data => {
        const apiWeatherbitPath = `${apiWeatherbitURL}&lat=${userData.latitude}&lon=${userData.longitude}&key=${apiWeatherbitUser}`;
        processData(apiWeatherbitPath)
        .then(data => {
            let dateResult = date(inputDate);
            let i = forecast(dateResult);
           
            userData.days = dateResult;
            console.log('Output on weatherbit: ',data);
            // HTML output
            document.getElementById('info-days').innerHTML = `${cityName}, ${userData.country} is ${userData.days} days away`;
            document.getElementById('weather-description').innerHTML = `Weather Forecast is ${data.data[i].weather.description}`;
            document.getElementById('weather-max-temp').innerHTML = `High: ${data.data[i].max_temp}` + "<span>&#176;</span>";
            document.getElementById('weather-low-temp').innerHTML = `Low: ${data.data[i].low_temp}` + "<span>&#176;</span>";
        });

    })
    // Post userData object to server.js
    .then(data => {
        post(postPath, userData);
    });
};

export { handleSubmit };