/**** Global Variables ****/
// Geonames.org variables
const apiGeonamesURL = 'http://api.geonames.org/'
const apiGeonamesUser = process.env.APIGEONAMES;

// **** Fetch results from the APIs are posted to the server ****
function handleSubmit(event) {
    event.preventDefault();
    let cityName = document.getElementById('city-name').value
    // Input validation
    if (cityName.length == 0) {alert('Please enter a city');} 

    // Fetch data from geonames.org
    const apiGeonamesPath = `${apiGeonamesURL}postalCodeSearchJSON?placename=${cityName}&username=${apiGeonamesUser}`;
    geonames(apiGeonamesPath)
    .then(data => {
        console.log('Output on client: ',data.postalCodes[0]);
        document.getElementById('geo-longitude').innerHTML= data.postalCodes[0].lat;
        document.getElementById('geo-latitude').innerHTML= data.postalCodes[0].lng;
        document.getElementById('geo-country').innerHTML= data.postalCodes[0].countryCode;
    });
    
    
    // Process finished
    console.log('The following city was entered:', cityName);
    console.log("::: City has been submitted :::");
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









export { handleSubmit };

