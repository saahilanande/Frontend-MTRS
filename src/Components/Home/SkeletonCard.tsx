import { Skeleton, Stack } from "@mui/material";
import React from "react";

function SkeletonCard() {
  return (
    <Stack spacing={2}>
      <Skeleton variant="rectangular" width={300} height={400} />
      <Skeleton variant="rectangular" width={300} height={30} />
      <Skeleton variant="rectangular" width={150} height={30} />
    </Stack>
  );
}

export default SkeletonCard;
