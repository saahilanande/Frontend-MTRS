import { Grid } from "@mui/material";
import React from "react";
import SignupForm from "../Components/SignupForm";
import Footer from "../Components/Footer";

function Signup() {
  return (
    <>
      <Grid container>
        <Grid item sm={12} bgcolor={"red"}>
          NavBAr
        </Grid>
        <Grid item sm={12}>
          <SignupForm />
        </Grid>
        <Grid item sm={12} bgcolor={"gold"}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
