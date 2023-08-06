import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React from "react";
import Seat from "../Components/Seat";

function SeatBooking() {
  const seats = Array.from({ length: 8 * 8 }, (_, i) => i);

  return (
    <Container>
      <Box
        sx={{
          background: "#3b3b3b",
          justifyContent: "center",
          display: "flex",
          borderRadius: "4px",
          padding: "12px",
          color: "#7e7e7e",
          marginBottom: 7,
          marginTop: 5,
        }}
      >
        <Stack direction={"row"} spacing={4}>
          <Seat seatColor="#626262" />
          <Typography>N/A</Typography>
          <Seat seatColor="#7bc47f" />
          <Typography>Selected</Typography>
          <Seat seatColor="#cfcfcf" />
          <Typography>Occupied</Typography>
        </Stack>
      </Box>
      <Container
        sx={{ justifyContent: "center", display: "flex", marginBottom: 5 }}
      >
        <Box
          sx={{
            height: "50px",
            background: "white",
            width: "80%",
            transform: "rotateX(-30deg) scale(1.1)",
            boxShadow: "0 3px 10px 2px",
          }}
        ></Box>
      </Container>
      <Container>
        <Grid container spacing={1}>
          {seats.map((seatNo) => (
            <>
              <Grid item xs={3}>
                <Stack direction={"row"} spacing={1}>
                  <Seat seatColor="#626262"></Seat>
                  <Seat seatColor="#626262"></Seat>
                </Stack>
              </Grid>
              <Grid item xs={6}>
                <Stack direction={"row"} spacing={1}>
                  <Seat seatColor="#626262"></Seat>
                  <Seat seatColor="#626262"></Seat>
                  <Seat seatColor="#626262"></Seat>
                  <Seat seatColor="#626262"></Seat>
                </Stack>
              </Grid>
              <Grid item xs={3}>
                <Stack direction={"row"} spacing={1}>
                  <Seat seatColor="#626262"></Seat>
                  <Seat seatColor="#626262"></Seat>
                </Stack>
              </Grid>
            </>
          ))}
        </Grid>
      </Container>
    </Container>
  );
}

export default SeatBooking;
