"use client";
import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Grid from "@material-ui/core/Grid";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import Link from "@material-ui/core/Link";
import Card from "@material-ui/core/Card";
import CardMedia from "@material-ui/core/CardMedia";

const useStyles = makeStyles((theme) => ({
  section: {
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
  },
  box: {
    paddingTop: theme.spacing(8),
    paddingBottom: theme.spacing(8),
    [theme.breakpoints.up("md")]: {
      paddingTop: theme.spacing(2),
      paddingBottom: theme.spacing(2),
    },
  },
  header: {
    [theme.breakpoints.up("md")]: {
      marginLeft: 0,
    },
  },
  primaryAction: {
    marginRight: theme.spacing(2),
    [theme.breakpoints.down("xs")]: {
      width: "100%",
      marginRight: theme.spacing(0),
      marginBottom: theme.spacing(2),
    },
  },
  img: {
    height: 768,
  },
}));

export default function Mainhero(props: any) {
  const classes = useStyles();

  const content = {
    "header-p1": "Welcom To CODEOFF",
    "header-p2": "THE BEST CODING PLATFORM",
    description:
      "Suspendisse aliquam tellus ante, porttitor mattis diam eleifend quis. Pellentesque pulvinar commodo eros sit amet finibus. Aenean et ornare erat. Etiam lobortis, ex sit amet finibus fermentum, nisl nunc ornare orci, vitae auctor lectus velit a ex.",
    "primary-action": "Action",
    "secondary-action": "Link Default",
    pattern: "nereus-assets/img/bg/pattern1.png",
    image:
      "https://images.unsplash.com/photo-1593642532400-2682810df593?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1050&q=60&blend=ddd&sat=-30&blend-mode=multiply",
    ...props.content,
  };

  return (
    <section
      className={classes.section}
      style={{ backgroundImage: `url("${content["pattern"]}")` }}
    >
      <Container maxWidth="lg">
        <Box className={classes.box}>
          <Grid container spacing={4}>
            <Grid item xs={12} md={6}>
              <Box display="flex" height="100%">
                <Box my="auto" width="100%">
                  <Container maxWidth="xs" className={classes.header}>
                    <Typography variant="h2" component="h2" gutterBottom={true}>
                      <Typography variant="h2" component="span" color="primary">
                        {content["header-p1"]}{" "}
                      </Typography>
                      <Typography variant="h2" component="span">
                        {content["header-p2"]}
                      </Typography>
                    </Typography>
                  </Container>
                  <Container maxWidth="sm">
                    <Typography variant="subtitle1" color="textSecondary">
                      {content["description"]}
                    </Typography>
                    <Box mt={3}>
                      <Button
                        variant="contained"
                        color="secondary"
                        className={classes.primaryAction}
                      >
                        {content["primary-action"]}
                      </Button>
                      <Link href="#">{content["secondary-action"]}</Link>
                    </Box>
                  </Container>
                </Box>
              </Box>
            </Grid>
            <Grid item xs={12} md={6}>
              <Card>
                <CardMedia
                  image={content["image"]}
                  className={classes.img}
                ></CardMedia>
              </Card>
            </Grid>
          </Grid>
        </Box>
      </Container>
    </section>
  );
}
