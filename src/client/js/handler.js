import { save } from "./save";
import { post } from "./post";

/**** Global Variables ****/
const apiGeonamesURL = 'http://api.geonames.org/';
const apiGeonamesUser = process.env.APIGEONAMES;
const apiWeatherbitURL = 'https://api.weatherbit.io/v2.0/forecast/daily?';
const apiWeatherbitUser = process.env.APIWEATHERBIT;
const postPath = 'http://localhost:8080/save';

// **** Fetch results from the APIs are posted to the server ****
function handleSubmit(event) {
    event.preventDefault();
    let cityName = document.getElementById('city-name').value
    // Input validation
    if (cityName.length == 0) {alert('Please enter a city');} 
    
    const apiGeonamesPath = `${apiGeonamesURL}postalCodeSearchJSON?placename=${cityName}&username=${apiGeonamesUser}`;
    
    /* const testing = `https://api.weatherbit.io/v2.0/forecast/daily?&lat=47.558395&lon=7.573271&key=${apiWeatherbitUser}`; */
    /* lat=38.123&lon=-78.543 */
   
    // data is stored in the object
    let userData = {}; 
    
    // Fetching data from geonames, weatherbit and pixabay
    processData(apiGeonamesPath)
    .then(data => {
        console.log('Output on geonames: ',data.postalCodes[0]);
        document.getElementById('geo-longitude').innerHTML= data.postalCodes[0].lat;
        document.getElementById('geo-latitude').innerHTML= data.postalCodes[0].lng;
        document.getElementById('geo-country').innerHTML= data.postalCodes[0].countryCode;

        userData.latitude = data.postalCodes[0].lat;
        userData.longitude = data.postalCodes[0].lng;
        console.log('It worked', userData.latitude);
        
        return data; 
    })
    // latitude and longitude are used in the second fetch after first one is settled
    .then(data => {
        const apiWeatherbitPath = `${apiWeatherbitURL}&lat=${userData.latitude}&lon=${userData.longitude}&key=${apiWeatherbitUser}`;
        processData(apiWeatherbitPath)
        .then(data => {
            console.log('Output on weatherbit: ',data);
            document.getElementById('weather-longitude').innerHTML= data.lon;
            document.getElementById('weather-latitude').innerHTML= data.lat;
            console.log("Weatherbit", userData.latitude);
            // Fetch results are send to the server
            post(postPath, userData);
        });
    });
    

    

    // Fetch data from pixabay
  /*   save(); */
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





export { handleSubmit };

