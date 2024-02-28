import { useState, useReducer } from "react";
import { Modal } from "./Modal";
import { data } from "./../../data";

/* AS THE APP GROW WE NEED SOME KIND OF BETTER STRUCTURE TO STATE*/
// It allow to do some intermediate steps, different from useState, where we just change the data
// I undestand that is indicated for projects where we have much useState

const reducerFunction = (currentState, activatingAction) => {
  // EVER we have to return an state, because all our application is based on a state
  console.log(currentState, activatingAction);
  return currentState
};

const defaultState = {
  people: [],
  isModalOpen: false,
  modalContent: "",
};

const UseReducer = () => {
  const [name, setName] = useState("");
  // It's a common practice to use [currentState, dispatch] / i used just to see that can be everything
  const [currentState, activeReducer] = useReducer(reducerFunction, defaultState);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (name) {
      // activeReducer or commonly called dispatch is an function that has an object with property of type, and commonly value is in uppercase
      activeReducer({ type: "TESTING" });
    } else {
    }
  };

  return (
      <>
        {currentState.isModalOpen && <Modal modalContent={currentState.modalContent} />}
        <form className="form" onSubmit={handleSubmit}>
          <div>
            <input type="text" name="" id="" value={name} onChange={(e) => setName(e.target.value)} />
          </div>
          <button type="submit" className="btn">
            submit
          </button>
        </form>
        {currentState.people.map(({ id, name }) => (
          <h2 key={id} style={{ fontSize: "1.25rem" }}>
            {name}
          </h2>
        ))}
      </>
    );
  };

export default UseReducer;
