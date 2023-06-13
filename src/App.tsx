import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

function App() {
  const [colorMode, setColorMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: colorMode ? "dark" : "light",
    },
  });

  const onSwitch = () => setColorMode(!colorMode);

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />
      <>
        <Navbar handleSwitch={() => onSwitch()} />
      </>
    </ThemeProvider>
  );
}

export default App;
