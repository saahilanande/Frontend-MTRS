import { Box } from "@mui/material";
import React from "react";

interface props {
  status: string;
  onClick: () => void;
}

function Seat({ status, onClick }: props) {
  let seatColor;
  switch (status) {
    case "available":
      seatColor = "#626262";
      break;
    case "selected":
      seatColor = "#7bc47f";
      break;
    case "booked":
      seatColor = "#cfcfcf";
      break;
    default:
      seatColor = "#808080";
      break;
  }

  return (
    <Box
      onClick={onClick}
      sx={{
        display: "inline-block",
        background: seatColor,
        width: "20px",
        height: "18px",
        borderTopLeftRadius: "10px",
        borderTopRightRadius: "10px",
        transition: "transform 0.3s ease-in-out",
        backgroundColor: seatColor,
        position: "relative",
        margin: "5px",
        top: "1px",
        ":nth-of-type(8n + 2)": { marginRight: 5 },
        ":nth-of-type(8n + 6)": { marginRight: 5 },
        gridTemplateColumns: "repeat(8, min-content)",
        ":hover": {
          cursor: "pointer",
          background: "#c1eac5",
          transform: "scale(1.2)",
        },
      }}
    ></Box>
  );
}

export default Seat;
