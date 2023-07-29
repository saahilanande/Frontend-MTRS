import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import ShowtimeCard from "../Components/ShowtimeCard";

function Showtime() {
  const { id } = useParams();

  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Navbar />
        </Grid>
        <Grid item sm={12}>
          <Box
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundImage: `url(${"https://images.pexels.com/photos/1025349/pexels-photo-1025349.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `blur(100px)`,
              zIndex: -1,
              backgroundColor: "rgba(0,0,0, 0.4)",
            }}
          ></Box>
          <MovieDetail />
          <ShowtimeCard />
        </Grid>
        <Grid item sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Showtime;
