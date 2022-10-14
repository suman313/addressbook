import * as api from "../api/index";

export const getAll = () => async (dispatch) => {
  try {
    const getAllAdrrs = await api.fetchAllAdrs();
    dispatch({ type: "FETCH_ALL", payload: getAllAdrrs.data });
    console.log(getAllAdrrs.data);
  } catch (error) {
    console.log(error);
  }
};

export const createContact = (contact, token) => async (dispatch) => {
  try {
    const createNewContact = await api.createLatestContact(contact, token);
    console.log(createNewContact);
  } catch (error) {
    console.log(error);
  }
};

export const updateContact = (id, contact, token) => async (dispatch) => {
  try {
    const updatedContact = await api.updatedContact(id, contact, token);
    console.log(updatedContact);
    dispatch({ type: "UPDATE_POST", payload: updatedContact.data });
  } catch (error) {
    console.log(error);
  }
};

export const deleteContact = (id, token) => async (dispatch) => {
  try {
    await api.deleteContact(id, token);
    dispatch({ type: "DELETE", payload: id });
  } catch (error) {
    console.log(error);
  }
};

export const searchByQuery = (searchTerm, token) => async (dispatch) => {
  try {
    const contacts = await api.searchByTerm(searchTerm, token);
    console.log(contacts);
    dispatch({ type: "SEARCH", payload: contacts.data });
  } catch (error) {
    console.log(error);
  }
};
