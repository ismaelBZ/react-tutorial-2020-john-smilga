import { useState, useEffect } from "react";

const url = "https://api.github.com/users/mojodna";

const MultipleReturns = () => {

  const [isLoading, setIsLoading] = useState(true);
  const [isError, setIsError] = useState(false);
  const [user, setUser] = useState('default user');
  const [errorMessage, setErrorMessage] = useState('Error')
  
  useEffect(()=>{
    fetch(url)
    .then((response)=>{
      if (response.status >= 200 && response.status <= 299) {
        return response.json();
      } else {
        setIsLoading(false);
        setIsError(true);
        throw new Error(response.statusText);
      }
    })
    .then((user) => {
      setUser(user.login)
      setIsLoading(false)
    })
    .catch((error) => {
      setErrorMessage(error.message);
      console.log(error.message);
    } )
  },[])
  
  console.log('render');
  if (isLoading) {
    return <h2>Loading.....</h2>;
  }
  if (isError) {
    return <h1>{errorMessage}</h1>
  }
  return <h2>{user}</h2>;

};

export default MultipleReturns;
