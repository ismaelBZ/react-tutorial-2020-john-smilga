import { useState } from "react";

const ControlledInputs = () => {
  const [firstName, setFirstName] = useState("");
  const [email, setEmail] = useState("");
  const [people, setPeople] = useState([])

  const handleSubmit = (e) => {
    e.preventDefault();
    if (firstName && email) {
      // const person = {firstName, email} //The same as above
      const person = {firstName: firstName, email: email, id: new Date().getTime().toString()}
      const newPeople = [...people, person]
      setPeople(newPeople);
      setFirstName('');
      setEmail('');
      console.log(person);
      console.log('Submited Successfuly');
    } else {
      console.log('Form has empty values');
    }
  };

  return (
    <>
      <form className="form" onSubmit={handleSubmit}>
        <div className="form-control">
          <label htmlFor="firstName">Name: </label>
          <input type="text" name="firstName" id="firstName" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
        </div>
        <div className="form-control">
          <label htmlFor="email">Email: </label>
          <input type="text" name="email" id="email" value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <button type="submit" className="submit">
          Submit
        </button>
      </form>
      {people.map( ({id, firstName, email}) => {
        return (
            <li key={id} className='item'>
              <h2>{firstName}</h2>
              <p>{email}</p>
            </li>
        );
      })}
    </>
  );
}

export default ControlledInputs;


