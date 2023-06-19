import {
  Container,
  CssBaseline,
  Box,
  Avatar,
  Typography,
  TextField,
  FormControlLabel,
  Checkbox,
  Button,
  Grid,
  IconButton,
  InputAdornment,
  Alert,
} from "@mui/material";
import Link from "@mui/material/Link";
import LoginIcon from "@mui/icons-material/Login";
import * as Yup from "yup";
import { useState } from "react";
import { useFormik } from "formik";
import { VisibilityOff, Visibility } from "@mui/icons-material";
import { useNavigate } from "react-router-dom";
import ApiClient from "../Services/Api-Client";
import { useSignIn } from "react-auth-kit";

function LoginForm() {
  const [showPassword, setShowPassword] = useState(false);
  const [invalidCred, setInvalidCred] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const navigate = useNavigate();
  const signIn = useSignIn();

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validationSchema = Yup.object().shape({
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(5, "Password is too short - should be 5 chars minimum."),
  });

  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      setInvalidCred(false);
      const userInfo = {
        password: values.password,
        email: values.email,
      };

      setIsLoading(true);
      ApiClient.post("/user/login", userInfo)
        .then((res) => {
          if (res.status == 200) {
            signIn({
              token: res.data.jwt,
              expiresIn: 500,
              tokenType: "Bearer",
              authState: {
                userId: res.data.email,
              },
            });
            navigate("/home");
            console.log(res.data);
          }
          setIsLoading(false);
        })
        .catch((err) => {
          if ((err.response.status === 403, 401)) {
            setInvalidCred(true);
            values.email = "";
            values.password = "";
          } else {
            alert(err.message);
          }
          setIsLoading(false);
        });
    },
  });

  return (
    <Container component="main" maxWidth="xs">
      <CssBaseline />
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
          <LoginIcon />
        </Avatar>
        <Typography component="h1" variant="h5">
          Sign in
        </Typography>
        <Box
          component="form"
          onSubmit={formik.handleSubmit}
          noValidate
          sx={{ mt: 1 }}
        >
          <TextField
            margin="normal"
            required
            fullWidth
            id="email"
            label="Email Address"
            name="email"
            autoComplete="email"
            autoFocus
            onChange={formik.handleChange}
            value={formik.values.email}
            error={formik.errors.email && formik.touched.email ? true : false}
            helperText={
              formik.errors.email && formik.touched.email
                ? "" + formik.errors.email
                : null
            }
          />
          <TextField
            margin="normal"
            required
            fullWidth
            name="password"
            label="Password"
            type={showPassword ? "text" : "password"}
            id="password"
            autoComplete="current-password"
            onChange={formik.handleChange}
            value={formik.values.password}
            error={
              formik.errors.password && formik.touched.password ? true : false
            }
            helperText={
              formik.errors.password && formik.touched.password
                ? "" + formik.errors.password
                : null
            }
            InputProps={{
              // <-- This is where the toggle button is added.
              endAdornment: (
                <InputAdornment position="end">
                  <IconButton
                    aria-label="toggle password visibility"
                    onClick={handleClickShowPassword}
                    // onMouseDown={handleMouseDownPassword}
                    edge="end"
                  >
                    {showPassword ? <VisibilityOff /> : <Visibility />}
                  </IconButton>
                </InputAdornment>
              ),
            }}
          />
          <Grid item xs={12}>
            {invalidCred ? (
              <Alert variant="outlined" severity="error">
                Invalid Email or Password
              </Alert>
            ) : null}
          </Grid>
          <FormControlLabel
            control={<Checkbox value="remember" color="primary" />}
            label="Remember me"
          />

          <Button
            type="submit"
            fullWidth
            variant="contained"
            disabled={isLoading}
            sx={{ mt: 3, mb: 2 }}
          >
            {isLoading ? "Signing In..." : "Sign In"}
          </Button>
          <Grid container>
            <Grid item xs>
              <Link href="#" variant="body2">
                Forgot password?
              </Link>
            </Grid>
            <Grid item>
              <Link href="#" variant="body2">
                {"Don't have an account? Sign Up"}
              </Link>
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
}

export default LoginForm;
