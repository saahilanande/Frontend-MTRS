import { AppBar, Divider, Stack, Toolbar } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import MyAvatar from "./MyAvatar";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <ThemeSwitch />
        <MyAvatar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
