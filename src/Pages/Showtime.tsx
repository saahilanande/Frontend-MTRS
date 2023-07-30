import { Box, Grid } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import ShowtimeCard from "../Components/ShowtimeCard";
import useDetailMovie, { MyParams } from "../Hooks/useDetailMovie";

function Showtime() {
  const { id } = useParams<keyof MyParams>() as MyParams;
  const { movieData, isLoading, isError } = useDetailMovie(id);

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
              backgroundImage: `url(${movieData?.movieImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `blur(100px)`,
              zIndex: -1,
              backgroundColor: "rgba(0,0,0, 0.4)",
            }}
          ></Box>
          <MovieDetail movieData={movieData} />
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
