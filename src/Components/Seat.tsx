import { Box } from "@mui/material";
import React from "react";

interface props {
  seatColor: string;
}

function Seat({ seatColor }: props) {
  return (
    <Box
      sx={{
        display: "inline-block",
        background: seatColor,
        width: "20px",
        height: "18px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        position: "relative",
        top: "1px",
        ":nth-of-type(8n + 2)": { marginRight: "12px" },
        ":nth-of-type(8n + 6)": { marginRight: "12px" },
        gridTemplateColumns: "repeat(8, min-content)",
      }}
    ></Box>
  );
}

export default Seat;
