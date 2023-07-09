import React from "react";
import Carousel from "react-material-ui-carousel";
import { MovieDataSchema } from "../Hooks/useFetchMovie";
import { Box, Divider, Stack, Typography } from "@mui/material";

interface props {
  items: MovieDataSchema[];
}

function MovieCarousel({ items }: props) {
  return (
    <Carousel>
      {items.map((data) => (
        <Box display="flex" justifyContent="center" alignItems="center">
          <Box
            key={data.movie_id}
            style={{
              position: "absolute",
              height: "100%",
              width: "100%",
              backgroundImage: `url(${data.movieImg})`,
              backgroundSize: "cover",
              backgroundPosition: "center",
              filter: `blur(50px)`,
              zIndex: -1,
            }}
          ></Box>
          <Stack>
            <Box
              component="img"
              src={data.movieImg}
              sx={{
                height: 450,
                width: 400,
                maxHeight: { xs: 450, md: 400 },
                maxWidth: { xs: 350, md: 250 },
                m: 2,
              }}
            />
            <Typography
              align="center"
              variant="h3"
              sx={{
                fontSize: "19px",
                fontWeight: "900",
                fontFamily: "gordita,Helvetica,sans-serif",
                ":hover": { cursor: "pointer" },
              }}
            >
              {data.title}
            </Typography>
            <Stack>
              <Stack
                justifyContent="center"
                spacing={0.5}
                divider={<Divider orientation="vertical" flexItem />}
                direction="row"
              >
                <Typography variant="caption" color={"gainsboro"}>
                  {data.duration}
                </Typography>
                <Typography variant="caption" color={"gainsboro"}>
                  {data.genre}
                </Typography>
              </Stack>
              <Stack justifyContent="center" direction="row">
                <Typography variant="caption" color={"gainsboro"}>
                  Released {data.releaseDate}
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      ))}
    </Carousel>
  );
}

export default MovieCarousel;
