import { Box, Container, Stack, Typography } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

function ShowtimeCard() {
  return (
    <Container>
      <Stack>
        <Stack direction={"row"}>
          <LocationOnOutlinedIcon fontSize="large" />
          <Typography marginLeft={2} fontSize={"24px"} fontWeight={900}>
            THEATER NAME
          </Typography>
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShowtimeCard;
