// General function used for the fetch requests
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

export { processData };