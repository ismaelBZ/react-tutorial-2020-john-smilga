import { useState, useEffect } from "react";

const url = "https://api.github.com/users";

const UseEffectFetchData = () => {
  const [users, setUsers] = useState([]);
  useEffect( () => {
    getusers();
  }, [])

  const getusers = async () => {
    const response = await fetch(url);
    const users = await response.json();
    setUsers(users)
    return users;
  };

  return (
    <>
      <h2>GitHub Users</h2>
      <ul className='users'>
        {users.map(({id, login, avatar_url, html_url}) => {
          return (
            <li key={id}>
              <img src={avatar_url} alt={login} />
              <div>
                <h3>
                  {login} 
                </h3>
                <a href={html_url}>Profile</a>
              </div>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default UseEffectFetchData;
