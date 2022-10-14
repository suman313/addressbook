import React from "react";
import { BrowserRouter, Route, Routes, Navigate } from "react-router-dom";
import Container from "@mui/material/Container";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import Add from "./components/Add";
import Update from "./components/Update";
import ViewAll from "./components/ViewAll";
import { useSelector } from "react-redux";
import Auth from "./components/Auth";
function App() {
  const accessToken = useSelector((state) => state.auth.accessToken);
  return (
    <BrowserRouter>
      <Container maxWidth="xl">
        <main>
          {accessToken != null && <Navbar />}
          <Routes>
            <Route
              exact
              path="/"
              element={!accessToken ? <Auth /> : <Home />}
            />
            <Route
              exact
              path="/add"
              element={!accessToken ? <Auth /> : <Add />}
            />
            <Route
              exact
              path="/viewAll"
              element={!accessToken ? <Auth /> : <ViewAll />}
            />
            <Route exact path="/update/:id" element={<Update />} />
          </Routes>
        </main>
        <footer>copyright author:suman</footer>
      </Container>
    </BrowserRouter>
  );
}

export default App;
