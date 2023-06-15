import { AppBar, Divider, Stack } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";

function Navbar() {
  return (
    <AppBar position="static">
      <ThemeSwitch />
    </AppBar>
  );
}

export default Navbar;
