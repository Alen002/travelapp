function handleSubmit(event) {
    event.preventDefault()
    // check what text was put into the form field
    let cityName = document.getElementById('city-name').value
    if (cityName.length == 0) {alert('Please enter a city');} // Validates whether user entered some text
    
    console.log('The following city was entered:', cityName);
    postCity('http://localhost:8080/api', cityName);  ///Constructor function defined below is executed - POST request in index.js
    console.log("::: City has been submitted :::");
}

// constructor function for fetching the data
const postCity = async (url, data) => {
    const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({
        text: data})
    });

    try {
        const data = await res.json();
        // Some results of the fetch response are displayed in index.html
        document.getElementById('geoname').innerHTML = `City: ${data}</br>`;
      }catch(error) {
      console.log("Something went wrong", error);
      }
  };

export { handleSubmit }