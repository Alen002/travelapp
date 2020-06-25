// Posts empty object to the route remove on the server.js and deletes output on the webpage
import { post } from "./post";

const path = 'http://localhost:8080/remove';

function remove(event) {
    document.getElementById('city-name').value = "";
    document.getElementById('city-date').value = "";
    document.getElementById('info-days').innerHTML = "";
    document.getElementById('weather-description').innerHTML = "";
    document.getElementById('weather-max-temp').innerHTML = "";
    document.getElementById('weather-low-temp').innerHTML = ""; 
    document.getElementById('info-trip').innerHTML = ""; 
    document.getElementById('info-departure').innerHTML = ""; 
    document.getElementById('travel-image').src="";
    post(path, {});
};

export { remove };