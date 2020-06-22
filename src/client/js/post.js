// Function is sending data to the server.js
const post = async ( url = '', data = {})=>{
  const response = await fetch(url, {
  method: 'POST', 
  mode: 'cors',
  credentials: 'same-origin',
  headers: { "Content-Type": "application/json" },
  body: JSON.stringify(data) 
});
  try {
    const newData = await response.json();
    return newData;
  }catch(error) {
    console.log("error", error);
  }
}

export { post };