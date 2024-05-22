"use client";
import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  tertiaryAction: {
    [theme.breakpoints.up("sm")]: {
      textAlign: "right",
    },
  },
  actions: {
    [theme.breakpoints.down("sm")]: {
      marginTop: theme.spacing(3),
    },
  },
}));

export default function Page1(props: any) {
  interface User {
    username: string;
    email: string;
    password: string;
  }
  const initalValue = { email: "", password: "" };
  const [formValues, setformValues] = useState(initalValue);
  const [formErrors, setformErrors] = useState([]);
  const [isSubmit, setisSubmit] = useState(true);

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setformValues({ ...formValues, [name]: value });
    console.log(formValues);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setformErrors(validate(formValues));
    setisSubmit(true);
  };

  useEffect(() => {
    console.log(formErrors);
    if (Object.keys(formErrors).length === 0 && isSubmit) {
      console.log(formValues);
    }
  }, [formErrors]);

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
      errors.email = "email is Required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a Valid Email";
    }

    if (!values.password) {
      errors.password = "password is Required";
    } else if (values.password < 8) {
      errors.password = "Password Must be Greater than 4 letters";
    } else if (values.password > 16) {
      errors.password = "Password Must be less than 16 letters";
    }
    return errors;
  };
  const classes = useStyles();

  const content = {
    brand: { image: "mui-assets/img/logo-pied-piper-icon.png", width: 40 },
    "02_header": "Sign in",
    "02_primary-action": "Sign in",
    "02_secondary-action": "Don't have an account?",
    "02_tertiary-action": "Forgot password?",
    ...props.content,
  };

  let brand;

  if (content.brand.image) {
    brand = (
      <img src={content.brand.image} alt="" width={content.brand.width} />
    );
  } else {
    brand = content.brand.text || "";
  }

  return (
    <section>
      <Container maxWidth="xs">
        <Box pt={8} pb={10}>
          <Box mb={3} textAlign="center">
            <Link href="#" variant="h4" color="inherit" underline="none">
              {brand}
            </Link>
            <Typography variant="h5" component="h2">
              {content["02_header"]}
            </Typography>
          </Box>
          <Box>
            <form noValidate onSubmit={handleSubmit}>
              <Grid container spacing={2}>
                <p style={{ color: "red" }}>{formErrors.email}</p>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="email"
                    id="email"
                    label="Email address"
                    autoComplete="email"
                    value={formValues.email}
                    onChange={handleChange}
                  />
                </Grid>
                <p style={{ color: "red" }}>{formErrors.password}</p>
                <Grid item xs={12}>
                  <TextField
                    variant="outlined"
                    required
                    fullWidth
                    name="password"
                    id="password"
                    label="Password"
                    type="password"
                    autoComplete="current-password"
                    value={formValues.password}
                    onChange={handleChange}
                  />
                </Grid>
              </Grid>
              <Box my={2}>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                >
                  {content["02_primary-action"]}
                </Button>
              </Box>
              <Grid container spacing={2} className={classes.actions}>
                <Grid item xs={12} sm={6}>
                  <Link href="#" variant="body2">
                    {content["02_secondary-action"]}
                  </Link>
                </Grid>
                <Grid item xs={12} sm={6} className={classes.tertiaryAction}>
                  <Link href="#" variant="body2">
                    {content["02_tertiary-action"]}
                  </Link>
                </Grid>
              </Grid>
            </form>
          </Box>
        </Box>
      </Container>
    </section>
  );
}
