import { Box, Container, Grid, Skeleton, Typography } from "@mui/material";
import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import { useParams } from "react-router-dom";
import MovieDetail from "../Components/MovieDetail";
import ShowtimeCard from "../Components/ShowtimeCard";
import useDetailMovie, { MyParams } from "../Hooks/useDetailMovie";
import useFetchShowtime from "../Hooks/useFetchShowtime";
import MovieDetailSkeleton from "../Components/MovieDetailSkeleton";
import ShowtimeSkeleton from "../Components/ShowtimeSkeleton";

function Showtime() {
  const { id } = useParams<keyof MyParams>() as MyParams;
  const { movieData, isLoading, isError } = useDetailMovie(id);
  const { showtimeData, isTimeLoading, isTimeError } = useFetchShowtime(id);

  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Navbar />
        </Grid>
        <Grid item sm={12}>
          {isError ||
            (isTimeError && (
              <Typography variant="h1" fontSize={200}>
                {isError}
                {isTimeError}
              </Typography>
            ))}
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
          {isLoading ? (
            <MovieDetailSkeleton />
          ) : (
            <MovieDetail movieData={movieData} />
          )}

          {isTimeLoading ? (
            <ShowtimeSkeleton />
          ) : showtimeData.length > 0 ? (
            showtimeData.map((data) => <ShowtimeCard data={data} />)
          ) : (
            <Container>
              <Typography variant="h1"> No Showtime</Typography>
            </Container>
          )}
        </Grid>
        <Grid item sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Showtime;
