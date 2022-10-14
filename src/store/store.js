import { configureStore } from "@reduxjs/toolkit";
import addressbook from "../reducers/addresesReducer";
import auth from "../reducers/Auth";

const rootReducer = {
  addressbook,
  auth,
};

export const store = configureStore({
  reducer: rootReducer,
});
