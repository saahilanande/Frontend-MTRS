import React from "react";
import useFetchMovie from "../Hooks/useFetchMovie";
import MovieDetail from "./MovieDetail";

function MovieGrid() {
  const { movieData, isLoading, isError } = useFetchMovie(0, 20);
  return (
    <>
      {movieData.map((data) => (
        <MovieDetail movieData={data} />
      ))}
    </>
  );
}

export default MovieGrid;
