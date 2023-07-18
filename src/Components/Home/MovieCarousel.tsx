import React from "react";
import Carousel from "react-material-ui-carousel";
import { MovieDataSchema } from "../../Hooks/useFetchMovie";
import MovieCard from "./MovieCard";
import { Box } from "@mui/material";

interface props {
  items: MovieDataSchema[];
}

function MovieCarousel({ items }: props) {
  return (
    <Box sx={{ backgroundColor: "rgba(0,0,0, 0.4)" }}>
      <Carousel IndicatorIcon={false}>
        {items.map((data) => (
          <MovieCard data={data} />
        ))}
      </Carousel>
    </Box>
  );
}

export default MovieCarousel;
