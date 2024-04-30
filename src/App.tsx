import React from "react";

import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";
import HomeIcon from "@mui/icons-material/Home";
import CssBaseline from "@mui/material/CssBaseline";
import Link from "@mui/material/Link";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import Container from "@mui/material/Container";
import { purple } from "@mui/material/colors";
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';

const validationSchema = Yup.object({
  firstName: Yup.string().required('First Name is required'),
  lastName: Yup.string().required('Last Name is required'),
  email: Yup.string().email('Invalid email address').required('Email is required'),
  password: Yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
});

const App = () => {
  const handleSubmit = () => {
    alert("successfully submitted");
    // Handle form submission here
  };

  return (
    <div>
      <Formik 
        initialValues={{
          firstName: '',
          lastName: '',
          email: '',
          password: ''
        }}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {({ errors, touched }) => (
          <Form>
            <Box
              sx={{
                backgroundImage: `url('https://images.pexels.com/photos/457882/pexels-photo-457882.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1')`,
                backgroundSize: "cover",
                height: "100vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              <Container component="main" maxWidth="xs">
                <CssBaseline />
                <Box
                  sx={{
                    marginTop: 2,
                    display: "flex",
                    flexDirection: "column",
                    alignItems: "center",
                  }}
                >
                  <HomeIcon sx={{ fontSize: 60, color: purple[500] }} />
    
                  <Typography component="h1" variant="h5" mb={3} mt={2}>
                    Sign up
                  </Typography>
                  
                    <Grid container spacing={2}>
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          error={errors.firstName && touched.firstName}
                          helperText={errors.firstName && touched.firstName ? errors.firstName : ''}
                          autoComplete="given-name"
                          name="firstName"
                          required
                          fullWidth
                          id="firstName"
                          label="First Name"
                          autoFocus
                        />
                      </Grid>
    
                      <Grid item xs={12} sm={6}>
                        <Field
                          as={TextField}
                          error={errors.lastName && touched.lastName}
                          helperText={errors.lastName && touched.lastName ? errors.lastName : ''}
                          required
                          fullWidth
                          id="lastName"
                          label="Last Name"
                          name="lastName"
                          autoComplete="family-name"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          error={errors.email && touched.email}
                          helperText={errors.email && touched.email ? errors.email : ''}
                          required
                          fullWidth
                          id="email"
                          label="Email Address"
                          name="email"
                          autoComplete="email"
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Field
                          as={TextField}
                          error={errors.password && touched.password}
                          helperText={errors.password && touched.password ? errors.password : ''}
                          required
                          fullWidth
                          name="password"
                          label="Password"
                          type="password"
                          id="password"
                          autoComplete="new-password"
                        />
                      </Grid>
                      <Button
                      className="Button"
                        type="submit"
                        startIcon={<SendIcon />}
                        fullWidth
                        variant="contained"
                        sx={{ mt: 3, mb: 2 }}
                      >
                        Sign Up
                      </Button>
                    </Grid>
    
                    <Grid container justifyContent="center">
                      <Grid item>
                        <Link variant="body2" onClick={() => {}}>
                          Already have an account?
                        </Link>
                      </Grid>
                    </Grid>
              </Box>
            </Container>
          </Box>
        </Form>
        )}
      </Formik>
    </div>
  );
};
export default App;
