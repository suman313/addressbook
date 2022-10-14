import { Button, Grid } from "@mui/material";
import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import loginC from "../actions/Auth";

function Auth() {
  const [user, setUser] = useState("");
  const dispatch = useDispatch();
  const handleSubmit = (e) => {
    e.preventDefault();

    dispatch(loginC(user));
    // alert(
    //   `Please Remember this token to move forward with further processes = ${token}`
    // );
  };
  return (
    <Grid container>
      <form onSubmit={handleSubmit}>
        <Grid item>
          <label htmlFor="token">
            Enter user name and generate token to access addressbook
          </label>
          <input
            id="token"
            type="text"
            onChange={(e) => setUser(e.target.value)}
          />
        </Grid>
        <Grid item>
          <Button type="submit" variant="contained">
            Generate session with jwt token
          </Button>
        </Grid>
      </form>
    </Grid>
  );
}

export default Auth;
