import { Container, Skeleton, Stack } from "@mui/material";
import LocationOnOutlinedIcon from "@mui/icons-material/LocationOnOutlined";
import React from "react";

function ShowtimeSkeleton() {
  return (
    <Container>
      <Stack marginBottom={2}>
        <Stack direction={"row"}>
          <LocationOnOutlinedIcon fontSize="large" />
          <Skeleton animation="wave" width={500} />
        </Stack>
        <Stack direction={"row"} spacing={2} marginLeft={6}>
          <Skeleton width={50} sx={{ borderRadius: 5, borderWidth: 2 }} />
          <Skeleton width={50} sx={{ borderRadius: 5, borderWidth: 2 }} />
          <Skeleton width={50} sx={{ borderRadius: 5, borderWidth: 2 }} />
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShowtimeSkeleton;
