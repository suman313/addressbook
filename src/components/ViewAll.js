import React, { useEffect, useState } from "react";
import Box from "@mui/material/Box";
import { useDispatch, useSelector } from "react-redux";
import { deleteContact, getAll, searchByQuery } from "../actions/address";
import { Button } from "@mui/material";
import "./style.css";
import { Link, useNavigate } from "react-router-dom";
function ViewAll() {
  const contacts = useSelector((state) => state.addressbook.contacts);
  const token = useSelector((state) => state.auth.accessToken);
  const [searchTerm, setSearchTerm] = useState("");
  console.log(contacts);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    dispatch(getAll());
  }, []);

  const deleteOnClick = (id) => {
    dispatch(deleteContact(id, token));
    navigate("/viewAll");
  };

  const searchOnClick = (e) => {
    e.preventDefault();
    let CurrentSearchTerm = searchTerm.trim();
    dispatch(searchByQuery(CurrentSearchTerm, token));
  };

  return (
    <Box sx={{ height: 300, width: "100%" }}>
      <Box>
        <form onSubmit={searchOnClick}>
          <label htmlFor="search">Search by name or Email</label>
          <input
            type="text"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
          <Button type="submit">Search</Button>
        </form>
      </Box>
      <table>
        <tr>
          <th>Name</th>
          <th>Contact No</th>
          <th>Email id</th>
          <th>Address</th>
        </tr>
        {contacts.map((item) => (
          <tr>
            <td>{item.name}</td>
            <td>{item.contact_no}</td>
            <td>{item.email}</td>
            <td>{item.address}</td>
            <td>
              <Button variant="contained">
                <Link to={`/update/${item._id}`} state={{ data: item }}>
                  Update
                </Link>
              </Button>
            </td>
            <td>
              <Button
                variant="contained"
                color="error"
                onClick={() => deleteOnClick(item._id)}
              >
                Delete
              </Button>
            </td>
          </tr>
        ))}
      </table>
    </Box>
  );
}

export default ViewAll;
