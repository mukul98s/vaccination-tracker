import { useState, useEffect } from "react";

function useFetch(url) {
  const [data, setData] = useState();
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      await fetch(url)
        .then((res) => {
          if (!res.ok) {
            throw Error("Unable to Get the Data");
          }
          return res.json();
        })
        .then((data) => {
          setData(data);
          setIsLoading(false);
          setError(null);
        })
        .catch((error) => {
          setIsLoading(false);
          setError(error.message);
        });
    };
    fetchData();
  }, [url]);

  return { data, isLoading, error };
}

export default useFetch;
