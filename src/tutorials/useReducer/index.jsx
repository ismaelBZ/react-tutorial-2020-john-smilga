import { useState, useReducer } from "react";
import { Modal } from "./Modal";
import { data } from "./../../data";

const reducer = (state, action) => {
  // EVER we have to return an state, because all our application is based on a state

  if (action.type === "NO_VALUE") {
    return {
      ...state,
      isModalOpen: true,
      modalContent: "Please Insert Item",
    };
  }

  if (action.type === "ADD_ITEM") {
    const currentPeople = [...state.people, action.payload];
    return {
      ...state,
      people: currentPeople,
      isModalOpen: true,
      modalContent: "Item added!",
    };
  }

  if (action.type === "REMOVE_ITEM") {
    const newPeople = state.people.filter((person) => person.id !== action.payload);
    return {
      ...state,
      people: newPeople
    }
  }

  if (action.type === "CLOSE_MODAL") {
    return { ...state, isModalOpen: false, modalContent: "" };
  }

  if (action.type === "TEST") {
    console.log(state, action);
    return {
      ...defaultState,
    };
  }
  throw new Error("NO REDUCERT ACTION TYPE MATCHING");
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

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
