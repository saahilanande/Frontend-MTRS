import React, { useState } from "react";
import Navbar from "./Components/Navbar";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";

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
        <Routes>
          <Route element={<Home />} path="/"></Route>
          <Route element={<Login />} path="/login"></Route>
          <Route element={<Signup />} path="/signup"></Route>
        </Routes>
      </>
    </ThemeProvider>
  );
}

export default App;
