import {useState, useEffect} from 'react';

const useFetch = (url) => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = (true);

  const getData = async() => {
    const response = await fetch(url);
    const data = await response.json();
    setData(data);
    setIsLoading(false);
  }

  useEffect(() => getData(), []);
  
  return {data, isLoading}
}

export default useFetch