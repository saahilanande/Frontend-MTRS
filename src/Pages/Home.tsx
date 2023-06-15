import { Grid } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";

function Home() {
  return (
    <Grid container>
      <Grid item sm={12} bgcolor={"red"}>
        <Navbar />
      </Grid>
      <Grid item sm={12} bgcolor={"blue"}>
        Main
      </Grid>
      <Grid item sm={12} bgcolor={"gold"}>
        Footer
      </Grid>
    </Grid>
  );
}

export default Home;
