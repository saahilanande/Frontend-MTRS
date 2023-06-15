import React from "react";
import Navbar from "../Components/Navbar";
import { Grid } from "@mui/material";

function Login() {
  return (
    <>
      <Grid container>
        <Grid item sm={12} bgcolor={"red"}>
          NavBAr
        </Grid>
        <Grid item sm={12} bgcolor={"blue"}>
          Main
        </Grid>
        <Grid item sm={12} bgcolor={"gold"}>
          Footer
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
