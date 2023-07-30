import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";
import { MovieDataSchema } from "../Hooks/useFetchMovie";

interface props {
  movieData: MovieDataSchema | undefined;
}

function MovieDetail({ movieData }: props) {
  return (
    <Container sx={{ padding: "16px" }}>
      <Stack direction={"row"} spacing={2} marginTop={5}>
        <Box
          component="img"
          src={movieData?.movieImg}
          sx={{
            maxHeight: { xs: 250, md: 350 },
            maxWidth: { xs: 100, md: 200 },
            m: 2,
            ":hover": { cursor: "pointer" },
          }}
        />

        <Stack>
          <Box marginTop={2}>
            <Typography
              sx={{
                fontSize: "36px",
                fontWeight: 600,
                lineHeight: 1,
                marginBottom: "8px",
              }}
            >
              {movieData?.title}
            </Typography>
            <Typography> Duration: {movieData?.duration}</Typography>
            <Typography marginTop={5}>
              DESCRIPTION {movieData?.description}
            </Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default MovieDetail;
