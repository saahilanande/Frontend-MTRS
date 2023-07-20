import { Button, Grid, List, ListItem } from "@mui/material";
import React from "react";
import Navbar from "../Components/Navbar";
import { useSignOut } from "react-auth-kit";
import { useNavigate } from "react-router-dom";
import MovieCarousel from "../Components/Home/MovieCarousel";
import Slideshow from "../Components/Home/Slideshow";

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
      <Grid item sm={12}>
        <Slideshow />
        <MovieCarousel />
      </Grid>
      <Grid item sm={12} bgcolor={"gold"}>
        Footer
      </Grid>
    </Grid>
  );
}

export default Home;
