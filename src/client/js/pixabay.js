const pixabayData = async ( url = '') => {
    const response = await fetch(url);
    try {
      const newData = await response.json();
      return newData;
    }catch(error) {
    console.log("error", error);
    }
};

function pixabay(urlPixabay){
    pixabayData(urlPixabay)  
    .then((data) => {
        console.log(data);
        document.getElementById('pixabay-img').innerHTML = data.hits[0].webformatURL;
        document.getElementById('travel-image').src=`${data.hits[0].webformatURL}`;
        return data;
    });
    
};

export { pixabay };
