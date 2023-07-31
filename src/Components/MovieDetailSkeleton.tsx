import { Container, Skeleton, Stack } from "@mui/material";
import React from "react";

function ShowtimeSkeleton() {
  return (
    <Container sx={{ padding: "16px" }}>
      <Stack direction={"row"} spacing={2} marginTop={5}>
        <Skeleton variant="rectangular" width={200} height={350} />
        <Stack>
          <Skeleton animation="wave" sx={{ marginBottom: "8px" }} width={500} />
          <Skeleton width={200} sx={{ marginBottom: "8px" }} />
          <Skeleton width={200} sx={{ marginBottom: "8px" }} />
        </Stack>
      </Stack>
    </Container>
  );
}

export default ShowtimeSkeleton;
