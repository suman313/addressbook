import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { createContact } from "../actions/address";

const formData = {
  name: "",
  email: "",
  contact_no: "",
  address: "",
};

function Add() {
  const [contactData, setContactData] = useState(formData);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(createContact(contactData, token));
    clear();
    console.log(contactData);
  };

  const clear = () => {
    setContactData(formData);
  };

  return (
    <Grid container>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={12} md={6} sx={{ m: 1 }}>
          <label htmlFor="token">Enter token</label>
          <input
            type="text"
            value={token}
            id="token"
            required
            onChange={(e) => setToken(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={12} md={6} sx={{ m: 1 }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={contactData.name}
            id="name"
            required
            onChange={(e) =>
              setContactData({ ...contactData, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ m: 1 }}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={contactData.email}
            id="email"
            required
            onChange={(e) =>
              setContactData({ ...contactData, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={12} md={4} sx={{ m: 1 }}>
          <label htmlFor="contact_no">Contact No</label>
          <input
            type="tel"
            value={contactData.contact_no}
            id="contact_no"
            placeholder="012-345-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={(e) =>
              setContactData({ ...contactData, contact_no: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="address">Enter Address</label>
          <textarea
            rows="4"
            columns="50"
            value={contactData.address}
            id="address"
            required
            onChange={(e) =>
              setContactData({ ...contactData, address: e.target.value })
            }
          >
            Enter your permanent address
          </textarea>
        </Grid>
        <Grid
          item
          xs={8}
          sx={{
            display: "flex",
            flexDirection: "row",
            justifyContent: "space-around",
            m: 1,
          }}
        >
          <Button type="submit" variant="contained">
            Submit
          </Button>
          <Button
            onClick={clear}
            variant="contained"
            size="small"
            color="error"
          >
            Reset
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default Add;
