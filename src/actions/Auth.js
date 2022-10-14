import { login } from "../api";
const loginC = (username) => async (dispatch) => {
  try {
    const { data } = await login(username);
    dispatch({ type: "LOGIN", payload: data.accessToken });
    return data.accessToken;
  } catch (error) {
    console.log(error);
  }
};

export default loginC;
