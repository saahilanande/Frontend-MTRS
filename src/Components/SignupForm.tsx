import Button from "@mui/material/Button";
import {
  CssBaseline,
  Avatar,
  Typography,
  Grid,
  TextField,
  FormControlLabel,
  Checkbox,
  Alert,
  IconButton,
  InputAdornment,
} from "@mui/material";
import { Container, Box } from "@mui/system";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { useState } from "react";
import Link from "@mui/material/Link";
import * as Yup from "yup";
import { useFormik } from "formik";
import ApiClient from "../Services/Api-Client";
import { useNavigate } from "react-router-dom";
import { VisibilityOff, Visibility } from "@mui/icons-material";

function SignupForm() {
  const navigate = useNavigate();
  const [isLoading, setIsLoading] = useState(false);
  const [emailExist, setEmailExist] = useState(false);
  const [showPassword, setShowPassword] = useState(false);

  const handleClickShowPassword = () => setShowPassword((show) => !show);

  const validationSchema = Yup.object().shape({
    firstName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    lastName: Yup.string()
      .min(2, "Too Short!")
      .max(50, "Too Long!")
      .required("Required"),
    email: Yup.string().email("Invalid email").required("Required"),
    password: Yup.string()
      .required("No password provided.")
      .min(5, "Password is too short - should be 5 chars minimum."),
  });

  const formik = useFormik({
    initialValues: {
      firstName: "",
      lastName: "",
      email: "",
      password: "",
    },
    validationSchema,
    onSubmit: (values) => {
      const UserInfo = {
        role: "test",
        username: values.firstName + values.lastName,
        password: values.password,
        email: values.email,
        phone: 9999,
      };

      setIsLoading(true);
      ApiClient.post("user/signup", UserInfo)
        .then((res) => {
          if (res.status === 208) {
            setEmailExist(true);
            setIsLoading(false);
          }
          if (res.status == 200) {
            setIsLoading(false);
            navigate("/login");
          }
        })
        .catch((err) => {
          console.log(err.message);
          setIsLoading(false);
          alert(err.message);
        });
    },
  });

  return (
    <>
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
            <LockOutlinedIcon />
          </Avatar>
          <Typography component="h1" variant="h5">
            Sign up
          </Typography>
          <Box
            component="form"
            noValidate
            sx={{ mt: 3 }}
            onSubmit={formik.handleSubmit}
          >
            <Grid container spacing={2}>
              <Grid item xs={12} sm={6}>
                <TextField
                  autoComplete="given-name"
                  name="firstName"
                  required
                  fullWidth
                  id="firstName"
                  label="First Name"
                  autoFocus
                  onChange={formik.handleChange}
                  value={formik.values.firstName}
                  error={
                    formik.errors.firstName && formik.touched.firstName
                      ? true
                      : false
                  }
                  helperText={
                    formik.errors.firstName && formik.touched.firstName
                      ? "" + formik.errors.firstName
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12} sm={6}>
                <TextField
                  required
                  fullWidth
                  id="lastName"
                  label="Last Name"
                  name="lastName"
                  autoComplete="family-name"
                  onChange={formik.handleChange}
                  value={formik.values.lastName}
                  error={
                    formik.errors.lastName && formik.touched.lastName
                      ? true
                      : false
                  }
                  helperText={
                    formik.errors.lastName && formik.touched.lastName
                      ? "" + formik.errors.lastName
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  id="email"
                  label="Email Address"
                  name="email"
                  autoComplete="email"
                  onChange={formik.handleChange}
                  value={formik.values.email}
                  error={
                    formik.errors.email && formik.touched.email ? true : false
                  }
                  helperText={
                    formik.errors.email && formik.touched.email
                      ? "" + formik.errors.email
                      : null
                  }
                />
              </Grid>
              <Grid item xs={12}>
                <TextField
                  required
                  fullWidth
                  name="password"
                  label="Password"
                  type={showPassword ? "text" : "password"}
                  id="password"
                  autoComplete="new-password"
                  onChange={formik.handleChange}
                  value={formik.values.password}
                  error={
                    formik.errors.password && formik.touched.password
                      ? true
                      : false
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
              </Grid>
              <Grid item xs={12}>
                {emailExist ? (
                  <Alert variant="outlined" severity="error">
                    Sign in to this account or enter an email address that isn't
                    already in use.
                  </Alert>
                ) : null}
              </Grid>
              <Grid item xs={12}>
                <FormControlLabel
                  control={
                    <Checkbox value="allowExtraEmails" color="primary" />
                  }
                  label="I want to receive inspiration, marketing promotions and updates via email."
                />
              </Grid>
            </Grid>
            <Button
              type="submit"
              fullWidth
              variant="contained"
              disabled={isLoading}
              sx={{ mt: 3, mb: 2 }}
            >
              Sign Up
            </Button>
            <Grid container justifyContent="flex-end">
              <Grid item>
                <Link href="#" variant="body2">
                  Already have an account? Sign in
                </Link>
              </Grid>
            </Grid>
          </Box>
        </Box>
      </Container>
    </>
  );
}

export default SignupForm;
