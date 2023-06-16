import Typography from "@mui/material/Typography";
import CameraIcon from "@mui/icons-material/Camera";
import React from "react";

function CompanyLogo() {
  return (
    <div>
      <CameraIcon sx={{ display: { xs: "none", md: "flex" }, mr: 1 }} />
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
    </div>
  );
}

export default CompanyLogo;
