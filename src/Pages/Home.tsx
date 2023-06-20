import { Button, Grid } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";

function Home() {
  const signOut = useSignOut();
  const navigate = useNavigate();

  const handleLogout = () => {
    navigate("/Login");
    signOut();
  };

  return (
    <Grid container>
      <Grid item sm={12} bgcolor={"red"}>
        <Navbar />
      </Grid>
      <Grid item sm={12} bgcolor={"blue"}>
        <Button onClick={() => handleLogout()}>LOG out</Button>
      </Grid>
      <Grid item sm={12} bgcolor={"gold"}>
        Footer
      </Grid>
    </Grid>
  );
}

export default Home;
