import { Button, Container, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";
import { showtimeShema } from "../Hooks/useFetchShowtime";

interface props {
  data: showtimeShema;
}

function ShowtimeCard({ data }: props) {
  let timings = data.startTimes.split(",");
  return (
    <Container>
      <Stack marginBottom={2}>
        <Stack direction={"row"}>
          <LocationOnOutlinedIcon fontSize="large" />
          <Typography marginLeft={2} fontSize={"24px"} fontWeight={900}>
            {data.name}
          </Typography>
        </Stack>
        <Typography marginBottom={2} marginLeft={6}>
          {data.address}
        </Typography>
        <Stack direction={"row"} spacing={2} marginLeft={6}>
          {timings.map((time) => (
            <Button
              size="large"
              variant="outlined"
              sx={{ borderRadius: 5, borderWidth: 2 }}
              color="inherit"
            >
              {time}
            </Button>
          ))}
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShowtimeCard;
