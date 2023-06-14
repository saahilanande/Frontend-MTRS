import { Stack } from "@mui/material";
import { useContext } from "react";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {

  return (
    <Stack direction={"row"} spacing={2}>
      <ThemeSwitch/>
    </Stack>
  );
}

export default Navbar;
