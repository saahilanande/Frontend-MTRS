import { Box, Container, Stack, Typography } from "@mui/material";
import React from "react";

function MovieDetail() {
  return (
    <Container sx={{ padding: "16px" }}>
      <Stack direction={"row"} spacing={2} marginTop={5}>
        <Box
          component="img"
          src={
            "https://amc-theatres-res.cloudinary.com/image/upload/f_auto,fl_lossy,h_465,q_auto,w_310/v1686579651/amc-cdn/production/2/movies/69700/69662/PosterDynamic/153519.jpg"
          }
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
              TEST TEST
            </Typography>
            <Typography> Duration:</Typography>
            <Typography marginTop={5}> DESCRIPTION</Typography>
          </Box>
        </Stack>
      </Stack>
    </Container>
  );
}

export default MovieDetail;
