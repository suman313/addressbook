const auth = (state = { accessToken: null }, action) => {
  switch (action.type) {
    case "LOGIN":
      return { accessToken: action.payload };

    default:
      return state;
  }
};

export default auth;
