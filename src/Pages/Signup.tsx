import { Grid } from "@mui/material";
import React from "react";
import SignupForm from "../Components/SignupForm";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";

function Signup() {
  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Navbar />
        </Grid>
        <Grid item sm={12}>
          <SignupForm />
        </Grid>
        <Grid item sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Signup;
