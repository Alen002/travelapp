
  const post = async (url) => {
    //console.log(JSON.stringify(geodata));
    const response = await fetch(url, {
      method: "POST",
      mode: "cors",
      credentials: "same-origin",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({a: 5})
    })
    try {
      const newData = await response.json();
      return newData;
    } catch (error) {
      console.log("error", error);
    }
  };

  export { post };