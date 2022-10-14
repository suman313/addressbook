import React from "react";
import { useSelector } from "react-redux";

function Home() {
  const token = useSelector((state) => state.auth.accessToken);
  return (
    <>
      <div>Please remember this token to move forward with further process</div>
      <div>"{token}"</div>
    </>
  );
}

export default Home;
