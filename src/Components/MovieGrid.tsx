import React from "react";
import useFetchMovie from "../Hooks/useFetchMovie";
import MovieDetail from "./MovieDetail";
import MovieDetailSkeleton from "./MovieDetailSkeleton";
import { Typography } from "@mui/material";

function MovieGrid() {
  const { movieData, isLoading, isError } = useFetchMovie(0, 10);
  let skeletonArray = [1, 2, 3, 4, 5];
  return (
    <>
      {isError && <Typography variant="h1">{isError}</Typography>}
      {isLoading
        ? skeletonArray.map(() => <MovieDetailSkeleton />)
        : movieData.map((data) => <MovieDetail movieData={data} />)}
    </>
  );
}

export default MovieGrid;
