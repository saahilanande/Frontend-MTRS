import { Stack } from "@mui/material";
import React from "react";
import ThemeSwitch from "./ThemeSwitch";

interface props {
  handleSwitch: () => void;
}

function Navbar({ handleSwitch }: props) {
  return (
    <Stack direction={"row"} spacing={2}>
      <ThemeSwitch handleSwitch={() => handleSwitch()} />
    </Stack>
  );
}

export default Navbar;
