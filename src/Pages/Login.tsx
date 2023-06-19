import React from "react";
import Navbar from "../Components/Navbar";
import { Grid } from "@mui/material";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <>
      <Grid container>
        <Grid item sm={12} bgcolor={"red"}>
          <Navbar />
        </Grid>
        <Grid item sm={12} bgcolor={"blue"}>
          <LoginForm />
        </Grid>
        <Grid item sm={12} bgcolor={"gold"}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
