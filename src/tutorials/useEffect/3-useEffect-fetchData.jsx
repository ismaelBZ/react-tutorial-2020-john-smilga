import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    getusers();
  })

  const getusers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    // setUsers(users) -> This will ocasionate an infinite loop
    console.log(users);
    return users;
  };

  return (
    <>
      <h2>GitHub Users</h2>
      <h3></h3>
    </>
  );
};

export default UseEffectFetchData;
