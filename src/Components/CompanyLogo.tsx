import Typography from "@mui/material/Typography";
import CameraIcon from "@mui/icons-material/Camera";
import React from "react";
import { Stack } from "@mui/material";

function CompanyLogo() {
  return (
    <div>
      <Stack
        direction={"row"}
        alignContent={"flex-start"}
        sx={{ display: "flex", alignItems: "center", flexWrap: "wrap" }}
      >
        <CameraIcon
          sx={{ display: { xs: "none", md: "flex" }, mr: 1 }}
          color="error"
        />
        <Typography
          variant="h6"
          noWrap
          component="a"
          href="/"
          sx={{
            mr: 2,
            display: { xs: "none", md: "flex" },
            fontFamily: "monospace",
            fontWeight: 700,
            letterSpacing: ".3rem",
            color: "inherit",
            textDecoration: "none",
          }}
        >
          MOVIE
        </Typography>
      </Stack>
    </div>
  );
}

export default CompanyLogo;
