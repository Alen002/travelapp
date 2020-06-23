const pixabayData = async ( url = '') => {
    const response = await fetch(url);
    try {
      const data = await response.json();
      return data;
    }catch(error) {
    console.log("error", error);
    }
};

function pixabay(urlPixabay){
    pixabayData(urlPixabay)  
    .then((data) => {
        console.log(data);
        console.log(data.hits[0].webformatURL);
        document.getElementById('travel-image').src=`${data.hits[0].webformatURL}`;
        return data;
    });
    
};

export { pixabay };
