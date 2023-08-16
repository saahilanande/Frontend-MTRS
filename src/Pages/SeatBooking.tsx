import { Box, Container, Divider, Stack, Typography } from "@mui/material";
import { useState } from "react";
import Seat from "../Components/Seat";
import { useParams } from "react-router-dom";
import { seatParams } from "../Hooks/useFetchSeat";
import useDetailMovie from "../Hooks/useDetailMovie";
import useFetchTheater from "../Hooks/useFetchTheater";
import MovieDetailSkeleton from "../Components/MovieDetailSkeleton";

function SeatBooking() {
  const { movieId, theaterId, movieDate } = useParams<
    keyof seatParams
  >() as seatParams;

  const { movieData, isLoading, isError } = useDetailMovie(movieId);
  const { theaterData } = useFetchTheater(theaterId);

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
    console.log(rowIndex, columnIndex);
  };

  return (
    <Container>
      {isLoading ? (
        <MovieDetailSkeleton />
      ) : (
        <Box marginTop={2}>
          <Stack direction={"row"}>
            <Box
              component="img"
              src={movieData?.movieImg}
              sx={{
                maxWidth: { xs: 20, md: 50 },
                borderRadius: "50%",
              }}
            ></Box>
            <Stack marginLeft={2}>
              <Typography
                variant="h3"
                fontWeight={"600"}
                textTransform={"uppercase"}
              >
                {movieData?.title}
              </Typography>
              <Stack
                direction={"row"}
                spacing={2}
                divider={<Divider orientation="vertical" flexItem />}
              >
                <Typography
                  fontFamily={"gordita,Helvetica,sans-serif"}
                  textTransform={"uppercase"}
                >
                  {theaterData?.name}
                </Typography>
                <Typography
                  fontFamily={"gordita,Helvetica,sans-serif"}
                  textTransform={"uppercase"}
                >
                  {theaterData?.city}
                </Typography>
                <Typography
                  fontFamily={"gordita,Helvetica,sans-serif"}
                  textTransform={"uppercase"}
                >
                  {movieData?.genre}
                </Typography>
                <Typography
                  fontFamily={"gordita,Helvetica,sans-serif"}
                  textTransform={"uppercase"}
                >
                  {movieData?.duration}
                </Typography>
                <Typography
                  fontFamily={"gordita,Helvetica,sans-serif"}
                  textTransform={"uppercase"}
                >
                  %{movieData?.rating}0
                </Typography>
              </Stack>
            </Stack>
          </Stack>
        </Box>
      )}
      <Container
        sx={{ justifyContent: "center", display: "flex", marginBottom: 5 }}
      >
        <Box
          sx={{
            background: "#3b3b3b",
            justifyContent: "center",
            display: "flex",
            borderRadius: "4px",
            padding: "12px",
            color: "#7e7e7e",
            marginBottom: 2,
            marginTop: 5,
            width: "60%",
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
      </Container>
      <Container
        sx={{ justifyContent: "center", display: "flex", marginBottom: 5 }}
      >
        <Box
          sx={{
            height: "50px",
            background: "white",
            width: "60%",
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
