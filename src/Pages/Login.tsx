import Navbar from "../Components/Navbar";
import { Grid } from "@mui/material";
import Footer from "../Components/Footer";
import LoginForm from "../Components/LoginForm";

function Login() {
  return (
    <>
      <Grid container>
        <Grid item sm={12}>
          <Navbar />
        </Grid>
        <Grid item sm={12}>
          <LoginForm />
        </Grid>
        <Grid item sm={12}>
          <Footer />
        </Grid>
      </Grid>
    </>
  );
}

export default Login;
