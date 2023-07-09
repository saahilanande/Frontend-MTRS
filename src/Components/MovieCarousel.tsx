import React from "react";
import Carousel from "react-material-ui-carousel";
import { MovieDataSchema } from "../Hooks/useFetchMovie";
import { Box } from "@mui/material";

interface props {
  items: MovieDataSchema[];
}

function MovieCarousel({ items }: props) {
  return (
    <Carousel>
      {items.map((data) => (
        <Box
          key={data.movie_id}
          display="flex"
          justifyContent="center"
          alignItems="center"
          style={{
            backgroundImage: `url(${data.movieImg})`,
          }}
        >
          <Box
            component="img"
            src={data.movieImg}
            sx={{
              height: 400,
              width: 350,
              maxHeight: { xs: 400, md: 400 },
              maxWidth: { xs: 350, md: 250 },
              m: 5,
            }}
          />
        </Box>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
