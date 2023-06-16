import { AppBar, Divider, Stack, Toolbar } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import MyAvatar from "./MyAvatar";
import CompanyLogo from "./CompanyLogo";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <CompanyLogo />
        <ThemeSwitch />
        <MyAvatar />
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
