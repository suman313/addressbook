import axios from "axios";

const API = axios.create({
  baseURL: "http://localhost:5000/",
});

const checkUser = (token) => {
  API.interceptors.request.use((req) => {
    if (token) {
      req.headers.authorization = `Bearer ${token}`;
    }
    return req;
  });
};

export const fetchAllAdrs = () => API.get("/contact");

export const createLatestContact = (contact, token) => {
  checkUser(token);
  return API.post("/contact/add", contact);
};

export const updatedContact = (id, contact, token) => {
  checkUser(token);
  return API.patch(`/contact/update/${id}`, contact);
};

export const deleteContact = (id, token) => {
  checkUser(token);
  return API.delete(`/contact/${id}`);
};

export const searchByTerm = (searchTerm, token) => {
  checkUser(token);
  return API.post(`/contact/search?searchQuery=${searchTerm}`);
};

export const login = (username) => API.post(`/contact/login/${username}`);
