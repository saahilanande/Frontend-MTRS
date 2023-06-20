import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { RequireAuth } from "react-auth-kit";

interface IthemeContext {
  handleSwitch: () => void;
}

export const appContext = React.createContext<IthemeContext>({
  handleSwitch: () => {},
});

function App() {
  const [colorMode, setColorMode] = useState(true);

  const theme = createTheme({
    palette: {
      mode: colorMode ? "dark" : "light",
    },
  });

  const handleSwitch = () => {
    setColorMode(!colorMode);
  };

  return (
    <appContext.Provider value={{ handleSwitch }}>
      <ThemeProvider theme={theme}>
        <CssBaseline />
        <>
          <Routes>
            <Route
              element={
                <RequireAuth loginPath={"/login"}>
                  <Home />
                </RequireAuth>
              }
              path="/"
            ></Route>
            <Route element={<Login />} path="/login"></Route>
            <Route element={<Signup />} path="/signup"></Route>
          </Routes>
        </>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
