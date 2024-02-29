import {useState, useEffect} from 'react';
import {useFetch} from './2-customHook-useFecth';

const url = "https://course-api.com/react-store-products";

const FetchExemple = () => {
  const {isLoading, data} = useFetch(url);
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