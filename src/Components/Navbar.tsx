import { AppBar, Box, Toolbar } from "@mui/material";
import ThemeSwitch from "./ThemeSwitch";
import MyAvatar from "./MyAvatar";
import CompanyLogo from "./CompanyLogo";

function Navbar() {
  return (
    <AppBar position="static">
      <Toolbar>
        <Box>
          <CompanyLogo />
        </Box>
        <Box sx={{ marginLeft: "auto" }}>
          <ThemeSwitch />
          <MyAvatar />
        </Box>
      </Toolbar>
    </AppBar>
  );
}

export default Navbar;
