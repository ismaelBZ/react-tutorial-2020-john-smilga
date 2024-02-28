import { useState, useReducer } from "react";
import { Modal } from "./Modal";
import { reducer, defaultState } from "./reducer";

const UseReducer = () => {
  const [name, setName] = useState("");
  const [state, dispatch] = useReducer(reducer, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name.toUpperCase() === "TEST") {
      dispatch({ type: "TEST", payload: "testing" });
    } else if (name) {
      const newItem = { id: new Date().getTime().toString(), name };
      dispatch({ type: "ADD_ITEM", payload: newItem });
      setName("");
    } else {
      dispatch({ type: "NO_VALUE" });
    }
  };

  const closeModal = () => {
    dispatch({ type: "CLOSE_MODAL" });
  };

  return (
    <>
      {state.isModalOpen && <Modal closeModal={closeModal} modalContent={state.modalContent} />}
      <form className="form" onSubmit={handleSubmit}>
        <div>
          <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
        </div>
        <button type="submit" className="btn">
          submit
        </button>
      </form>
      {state.people.map(({ id, name }) => (
        <div key={id} className='item'>
          <h2 style={{ fontSize: "1.25rem" }}>
            {name}
          </h2>
          <button type="button" className="btn" onClick={() => dispatch({ type: "REMOVE_ITEM", payload: id })}>
            Remove
          </button>
        </div>
      ))}
    </>
  );
};

export default UseReducer;
