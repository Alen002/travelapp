/*** Global Variables ***/
// Geonames.org variables
const apiURL = 'http://api.geonames.org/'
const api = process.env.APIGEONAMES;

const apiPath = `http://api.geonames.org/postalCodeSearchJSON?placename=raleigh&username=${api}`;

// Post fetch results to the server
function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let cityName = document.getElementById('city-name').value
    // User validation
    if (cityName.length == 0) {alert('Please enter a city');} 

    console.log(geonames(apiPath));

    console.log('The following city was entered:', cityName);
    console.log("::: City has been submitted :::");
    

};


// Fetch from geonames.org
async function geonames(url) {
   
    try {
        const response = await fetch(url);
        const cityData = await response.json();  
        console.log(cityData);
        return cityData;
    } 
        catch (error) {
        console.log(error);
    }
}










export { handleSubmit };

