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

export {reducer, defaultState}