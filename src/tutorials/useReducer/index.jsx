import { useState, useReducer } from "react";
import { Modal } from "./Modal";
import { data } from "./../../data";

const UseReducer = () => {
  const [name, setName] = useState("");
  const [people, setPeople] = useState(data);
  const [showModal, setShowModal] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      setShowModal(true);
      setPeople([...people, { id: new Date().getTime().toString(), name }]);
      setName('')
    } else {
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && <Modal />}
      <form className="Form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn" >
          submit
        </button>
      </form>
      {people.map(({id, name}) => <h2 key={id}>{name}</h2>)}
    </>
  );
};

export default UseReducer;
