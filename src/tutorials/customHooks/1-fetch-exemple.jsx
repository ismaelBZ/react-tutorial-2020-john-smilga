import {useState, useEffect} from 'react';

const url = "https://course-api.com/react-store-products";

const FetchExemple = () => {
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(true)
  
  const getData = async() => {
    try {
      const response = await fetch(url);
      const json = await response.json();
      setData(json) 
      setIsLoading(false)
    } catch (error) {
      console.log(error.message)
    }
  }

  useEffect(() => {
    getData(url);
  }, [])

  return (
    <>
      {isLoading ? 
        <h2>Loading...</h2>
      :
      <h2>Data</h2>}
    </>
  );

}

export default FetchExemple;