import { Box, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#e22a25",
    position: "initial",
    color: "#ffffff",
  },
});

function About() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} id="about">
      <Grid item xs={12}>
        <Grid container>
          <Grid item>
            <Typography variant="h3" component="h4">
              <Box>About Me</Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
