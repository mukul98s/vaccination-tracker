import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to Get the Data");
          }
          return res.json();
        })
        .then((data) => setData(data))
        .catch((error) => console.log(error.message));
    };
    fetchData();
  }, [url]);

  return data;
}

export default useFetch;
