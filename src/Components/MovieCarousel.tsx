import React from "react";
import Carousel from "react-material-ui-carousel";
import { MovieDataSchema } from "../Hooks/useFetchMovie";
import { Box, Card, CardMedia, Container, Paper } from "@mui/material";

interface props {
  items: MovieDataSchema[];
}

function MovieCarousel({ items }: props) {
  return (
    <Container
      sx={{
        p: 10,
      }}
    >
      <Carousel>
        {items.map((data) => (
          <Box
            component="img"
            src={data.movieImg}
            sx={{
              height: 400,
              width: 350,
              maxHeight: { xs: 400, md: 400 },
              maxWidth: { xs: 350, md: 250 },
            }}
          />
        ))}
      </Carousel>
    </Container>
  );
}

export default MovieCarousel;
