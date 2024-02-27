import { useLayoutEffect, useState } from "react";

const MultipleInputs = () => {
  const [people, setPeople] = useState([]);
  const [person, setPerson] = useState({ id: new Date().getTime().toString(), firstName: "", email: "", age: "" });

  const { firstName, email, age } = person;

  const handleChange = (e) => {
    const inputName = e.target.name;
    const inputValue = e.target.value;
    setPerson({...person, [inputName]: inputValue})
  }
  

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && age && email) {
      setPeople((people) => [...people, person]);
      setPerson({ id: new Date().getTime().toString(), firstName: "", email: "", age: "" });
      console.log("Send Successfully");
    } else {
      console.log("Some Data is Empy!");
    }
  };

  return (
    <>
      <form className="form">
        <div className="form-control">
          <label htmlFor="name">Name: </label>
          <input
            type="text"
            name="firstName"
            id="fisrtName"
            value={firstName}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input
            type="text"
            name="email"
            id="email"
            value={email}
            onChange={handleChange}
          />
        </div>
        <div className="form-control">
          <label htmlFor="age">Age: </label>
          <input
            type="text"
            name="age"
            id="age"
            value={age}
            onChange={handleChange}
          />
        </div>
        <button type="submit" onClick={handleSubmit}>
          Send
        </button>
      </form>
      <ul style={{ backgroundColor: "var(--clr-grey-8)", margin: "10%", padding: "1rem", borderRadius: "5px" }}>
        {people.map(({ id, firstName, age, email }) => {
          return (
            <li key={id} className="item">
              <h2>{firstName}</h2>
              <p>{email}</p>
              <p>{age}</p>
            </li>
          );
        })}
      </ul>
    </>
  );
};

export default MultipleInputs;
