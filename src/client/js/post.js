// Send fetch results to the server
const post = async (url, data) => {
    const res = await fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
        "Content-Type": "application/json"
    },
    body: JSON.stringify({data})
    });
    try {
        const data = await res.json();
        return data;
      }catch(error) {
      console.log("Server message: Something went wrong", error);
      }
  };

export { post }