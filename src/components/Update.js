import { Button, Grid } from "@mui/material";
import React, { useEffect, useState } from "react";
import { useDispatch } from "react-redux";
import { useLocation, useNavigate } from "react-router-dom";
import { updateContact } from "../actions/address";

const formData = {
  name: "",
  email: "",
  contact_no: "",
  address: "",
};

function Update() {
  const location = useLocation();
  const { data } = location.state;
  const [dataToUpdate, setDataToUpdate] = useState(formData);
  const [token, setToken] = useState("");
  const dispatch = useDispatch();
  const navigate = useNavigate();
  useEffect(() => {
    setDataToUpdate({
      name: data.name,
      email: data.email,
      contact_no: data.contact_no,
      address: data.address,
    });
  }, []);

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(updateContact(data._id, dataToUpdate, token));
    navigate("/viewAll");
  };

  const clear = () => {
    setDataToUpdate(formData);
  };

  return (
    <Grid container>
      <form onSubmit={handleSubmit}>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="token">Enter token</label>
          <input
            type="text"
            value={token}
            id="token"
            required
            onChange={(e) => setToken(e.target.value)}
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="name">Name</label>
          <input
            type="text"
            value={dataToUpdate.name}
            id="name"
            required
            onChange={(e) =>
              setDataToUpdate({ ...dataToUpdate, name: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="email">Email</label>
          <input
            type="text"
            value={dataToUpdate.email}
            id="email"
            required
            onChange={(e) =>
              setDataToUpdate({ ...dataToUpdate, email: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="contact_no">Contact No</label>
          <input
            type="tel"
            value={dataToUpdate.contact_no}
            id="contact_no"
            placeholder="012-345-6789"
            pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
            required
            onChange={(e) =>
              setDataToUpdate({ ...dataToUpdate, contact_no: e.target.value })
            }
          />
        </Grid>
        <Grid item xs={12} sm={8} md={4} sx={{ m: 1 }}>
          <label htmlFor="address">Enter Address</label>
          <textarea
            rows="4"
            columns="50"
            value={dataToUpdate.address}
            id="address"
            required
            onChange={(e) =>
              setDataToUpdate({ ...dataToUpdate, address: e.target.value })
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

export default Update;
