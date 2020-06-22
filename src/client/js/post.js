const post = async ( url = '', data = {})=>{
  const response = await fetch(url, {
  method: 'POST', 
  credentials: 'same-origin',
  headers: {},
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