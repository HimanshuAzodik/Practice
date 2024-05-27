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
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Avatar from "@material-ui/core/Avatar";
import { blue } from "@material-ui/core/colors";
import { setCookie } from "cookies-next"; // I

import AssignmentIndIcon from "@material-ui/icons/AssignmentInd";
import { useRouter } from "next/navigation";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundImage: 'url("nereus-assets/img/bg/pattern1.png")',
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  iconWrapper: {
    backgroundColor: blue[100],
    color: theme.palette.primary.main,
  },
  actions: {
    [theme.breakpoints.up("sm")]: {
      display: "flex",
    },
  },
  primaryAction: {
    width: "100%",
    marginTop: theme.spacing(2),
    [theme.breakpoints.up("sm")]: {
      marginTop: theme.spacing(0),
      width: "auto",
    },
  },
}));

export default function Page(props: any) {
  const classes = useStyles();
  const router = useRouter();

  const content = {
    header: "Login",
    description: "",
    "primary-action": "Sign in",
    "secondary-action": "Forgot your password?",
    ...props.content,
  };

  interface errors {
    email: string;
    password: string;
  }

  const initialValue = { email: "", password: "" };
  const [formValues, setFormValues] = useState(initialValue);
  const [formErrors, setFormErrors] = useState<formErrors>({});
  const [isSubmit, setIsSubmit] = useState(false);

  const IdPass = {
    email: "him@gmail.com",
    password: "12345678",
  };
  interface formErrors {
    email?: String;
    password?: any;
    submit?: string;
  }

  interface IdPass {
    email?: String;
    password?: String;
  }

  const handleChange = (e: any) => {
    const { name, value } = e.target;
    setFormValues({ ...formValues, [name]: value });
  };

  const handleSubmit = (e: any) => {
    e.preventDefault();
    const errors = validate(formValues);
    setFormErrors(errors);
    if (Object.keys(errors).length === 0) {
      setIsSubmit(true);
    }
  };

  useEffect(() => {
    if (isSubmit) {
      if (
        formValues.email === IdPass.email &&
        formValues.password === IdPass.password
      ) {
        setCookie("token", "your-token-here", { maxAge: 60 * 60 * 24 });
        router.push("/user");
      } else {
        setFormErrors({ submit: "Invalid Email & password !" });
      }
    }
  }, [
    isSubmit,
    formValues.email,
    formValues.password,
    IdPass.email,
    IdPass.password,
    router,
  ]);

  interface FormValues {
    email: string;
    password: string;
  }

  const validate = (values: FormValues) => {
    const errors: Partial<FormValues> = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "Enter a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    } else if (values.password.length < 8) {
      errors.password = "Password must be greater than 8 characters";
    } else if (values.password.length > 16) {
      errors.password = "Password must be less than 16 characters";
    }
    return errors;
  };

  return (
    <section className={classes.section}>
      <Container maxWidth="xs">
        <Box py={16}>
          <Card variant="outlined">
            <CardContent>
              <Box display="flex" mt={3}>
                <Box mx="auto">
                  <Avatar variant="rounded" className={classes.iconWrapper}>
                    <AssignmentIndIcon />
                  </Avatar>
                </Box>
              </Box>
              <Box mt={2} px={4}>
                <Typography
                  variant="h5"
                  component="h3"
                  align="center"
                  gutterBottom={true}
                >
                  {content["header"]}
                </Typography>
                <Typography
                  variant="body2"
                  component="p"
                  color="textSecondary"
                  align="center"
                >
                  {content["description"]}
                </Typography>
                <Box my={3}>
                  <form noValidate onSubmit={handleSubmit}>
                    <Grid container spacing={2}>
                      <p style={{ color: "red" }}>{formErrors.email}</p>
                      <Grid item xs={12}>
                        <TextField
                          variant="outlined"
                          required
                          fullWidth
                          size="small"
                          name="email"
                          label="E-mail address"
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
                          size="small"
                          type="password"
                          name="password"
                          label="Password"
                          value={formValues.password}
                          onChange={handleChange}
                        />
                      </Grid>
                      <Grid item xs={12}>
                        <Box
                          alignItems="center"
                          justifyContent="space-between"
                          className={classes.actions}
                        >
                          <Link href="#" color="textSecondary">
                            {content["secondary-action"]}
                          </Link>
                          <Button
                            type="submit"
                            variant="contained"
                            color="primary"
                            size="large"
                            className={classes.primaryAction}
                          >
                            {content["primary-action"]}
                          </Button>
                        </Box>
                      </Grid>
                    </Grid>
                  </form>
                </Box>
              </Box>
            </CardContent>
          </Card>
        </Box>
      </Container>
    </section>
  );
}
