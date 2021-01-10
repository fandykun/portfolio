import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";
import FavoriteBorderIcon from "@material-ui/icons/FavoriteBorder";
import Contact from "../containers/Contact";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "2rem 0",
    backgroundColor: "#e22a25",
    color: "#ffffff",
  },
});

function Footer() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0}>
      <Contact position />
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="subtitle1" component="span">
              <Box textAlign="center">
                Copyright ©2021 | Made with{" "}
                <FavoriteBorderIcon style={{ fontSize: "1rem" }} /> by Fandykun
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default Footer;
