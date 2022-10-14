const defaultState = {
  contacts: [],
};

const addressbook = (state = defaultState, action) => {
  switch (action.type) {
    case "FETCH_ALL":
      return { ...state, contacts: action.payload };
    case "UPDATE_POST":
      return state;
    // {
    //   let newContacts = state.contacts.map((item)=> item._id == payload._id)
    // }
    case "SEARCH":
      return { ...state, contacts: action.payload };
    case "DELETE":
      return {
        ...state,
        contacts: [
          ...state.contacts.filter((contact) => contact._id !== action.payload),
        ],
      };
    default:
      return state;
  }
};

export default addressbook;
