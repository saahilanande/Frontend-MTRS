import { Box, Container, Grid, Stack, Typography } from "@mui/material";
import React, { useState } from "react";
import Seat from "../Components/Seat";

function SeatBooking() {
  const rows = 10; // Change this value to set the number of rows
  const columns = 12; // Change this value to set the number of columns

  // Create a 2D array to represent the seating arrangement
  const initialSeats = Array.from({ length: rows }, () =>
    Array.from({ length: columns }, () => "available")
  );

  const [seats, setSeats] = useState(initialSeats);

  const handleSeatClick = (rowIndex: number, columnIndex: number) => {
    const seatStatus = seats[rowIndex][columnIndex];
    if (seatStatus === "available") {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][columnIndex] = "selected";
      setSeats(updatedSeats);
    } else if (seatStatus === "selected") {
      const updatedSeats = [...seats];
      updatedSeats[rowIndex][columnIndex] = "available";
      setSeats(updatedSeats);
    }
  };

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
          <Seat status="available" onClick={() => {}} />
          <Typography>N/A</Typography>
          <Seat status="selected" onClick={() => {}} />
          <Typography>Selected</Typography>
          <Seat status="booked" onClick={() => {}} />
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

      <Container
        sx={{ justifyContent: "center", display: "flex", marginBottom: 5 }}
      >
        <div>
          {seats.map((row, rowIndex) => (
            <div key={rowIndex}>
              {row.map((seatStatus, columnIndex) => (
                <Seat
                  key={columnIndex}
                  status={seatStatus}
                  onClick={() => handleSeatClick(rowIndex, columnIndex)}
                />
              ))}
            </div>
          ))}
        </div>
      </Container>
    </Container>
  );
}

export default SeatBooking;
