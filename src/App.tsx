import React, { useState } from "react";
import { ThemeProvider, createTheme } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";
import { Route, Routes } from "react-router-dom";
import Login from "./Pages/Login";
import Signup from "./Pages/Signup";
import Home from "./Pages/Home";
import { RequireAuth } from "react-auth-kit";
import OAuth2Redirect from "./Services/OAuth2Redirect";
import ForgotPassword from "./Pages/ForgotPassword";
import Showtime from "./Pages/Showtime";
import SeatBooking from "./Pages/SeatBooking";

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
            <Route element={<ForgotPassword />} path="/reset"></Route>
            <Route element={<Showtime />} path="/showtime/:id"></Route>
            <Route
              element={<SeatBooking />}
              path="/seat/:movieName/:theaterName/:showtime"
            ></Route>
            <Route path="/oauth2/redirect" element={<OAuth2Redirect />} />
          </Routes>
        </>
      </ThemeProvider>
    </appContext.Provider>
  );
}

export default App;
