"use client";
import PropTypes from "prop-types";
import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import Box from "@material-ui/core/Box";
import Typography from "@material-ui/core/Typography";
import Link from "@material-ui/core/Link";
import IconButton from "@material-ui/core/IconButton";

import TwitterIcon from "@material-ui/icons/Twitter";
import FacebookIcon from "@material-ui/icons/Facebook";
import InstagramIcon from "@material-ui/icons/Instagram";
import LinkedInIcon from "@material-ui/icons/LinkedIn";

const useStyles = makeStyles((theme) => ({
  footerNav: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "center",
    marginBottom: theme.spacing(1),
  },
  footerLink: {
    marginLeft: theme.spacing(3),
    marginRight: theme.spacing(3),
    marginBottom: theme.spacing(2),
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
  copy: {
    marginTop: theme.spacing(3),
    color: theme.palette.text.primary,
  },
  icon: {
    color: theme.palette.text.primary,
    "&:hover": {
      color: theme.palette.text.primary,
    },
  },
}));

function Footer({ content = {} }) {
  const classes = useStyles();

  const defaultContent = {
    copy: "© 2020 Pied Piper. All rights reserved.",
    link1: "Features",
    link2: "Enterprise",
    link3: "Support",
    link4: "ICO",
  };

  const finalContent = { ...defaultContent, ...content };

  return (
    <footer>
      <Container maxWidth="lg">
        <Box py={6} textAlign="center">
          <Box component="nav" className={classes.footerNav}>
            <Link href="#" variant="body1" className={classes.footerLink}>
              {finalContent.link1}
            </Link>
            <Link href="#" variant="body1" className={classes.footerLink}>
              {finalContent.link2}
            </Link>
            <Link href="#" variant="body1" className={classes.footerLink}>
              {finalContent.link3}
            </Link>
            <Link href="#" variant="body1" className={classes.footerLink}>
              {finalContent.link4}
            </Link>
          </Box>
          <Box mb={3}>
            <IconButton className={classes.icon} aria-label="Twitter">
              <TwitterIcon />
            </IconButton>
            <IconButton className={classes.icon} aria-label="Facebook">
              <FacebookIcon />
            </IconButton>
            <IconButton className={classes.icon} aria-label="Instagram">
              <InstagramIcon />
            </IconButton>
            <IconButton className={classes.icon} aria-label="LinkedIn">
              <LinkedInIcon />
            </IconButton>
          </Box>
          <Typography
            component="p"
            variant="body2"
            gutterBottom={false}
            className={classes.copy}
          >
            {finalContent.copy}
          </Typography>
        </Box>
      </Container>
    </footer>
  );
}

Footer.propTypes = {
  content: PropTypes.shape({
    copy: PropTypes.string,
    link1: PropTypes.string,
    link2: PropTypes.string,
    link3: PropTypes.string,
    link4: PropTypes.string,
  }),
};

export default Footer;
