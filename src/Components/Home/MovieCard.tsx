import { Box, Stack, Typography, Divider, Button } from "@mui/material";
import React from "react";
import { MovieDataSchema } from "../../Hooks/useFetchMovie";

interface props {
  data: MovieDataSchema;
}

function MovieCard({ data }: props) {
  return (
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
          filter: `blur(100px)`,
          zIndex: -1,
          backgroundColor: "rgba(0,0,0, 0.4)",
        }}
      ></Box>
      <Stack>
        <Box
          component="img"
          src={data.movieImg}
          sx={{
            maxHeight: { xs: 350, md: 450 },
            maxWidth: { xs: 200, md: 300 },
            m: 2,
            ":hover": { cursor: "pointer" },
          }}
        />
        <Typography
          align="center"
          variant="h3"
          sx={{
            fontSize: "24px",
            fontWeight: "900",
            fontFamily: "gordita,Helvetica,sans-serif",
            ":hover": { cursor: "pointer" },
          }}
        >
          {data.title}
        </Typography>
        <Stack mt={2} mb={1}>
          <Stack
            justifyContent="center"
            spacing={0.5}
            direction="row"
            divider={<Divider orientation="vertical" flexItem />}
          >
            <Typography
              fontSize={".75rem"}
              fontFamily={"gordita,Helvetica,sans-serif"}
            >
              {data.duration}
            </Typography>
            <Typography
              fontSize={".75rem"}
              fontFamily={"gordita,Helvetica,sans-serif"}
            >
              {data.genre}
            </Typography>
          </Stack>
          <Stack justifyContent="center" direction="row">
            <Typography
              fontSize={".75rem"}
              fontFamily={"gordita,Helvetica,sans-serif"}
            >
              Released {data.releaseDate}
            </Typography>
          </Stack>
        </Stack>
        <Box textAlign="center">
          <Button
            variant="contained"
            sx={{
              backgroundColor: "#e51937",
              color: "white",
              fontWeight: "600",
              fontSize: "12px",
              fontFamily: "gordita,Helvetica,sans-serif",
              borderRadius: "38px",
              maxWidth: "50%",
              padding: "12px 24px",
              marginBottom: "20px",
            }}
          >
            Get Tickets
          </Button>
        </Box>
      </Stack>
    </Box>
  );
}

export default MovieCard;
