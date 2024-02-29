import { useState, useEffect } from "react";

// Custom hooks every has to start with use

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const getData = async () => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  };

  useEffect(() => {getData()}, [url]);

  return { data, isLoading };
};

export {useFetch};
