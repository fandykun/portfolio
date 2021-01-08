import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Hidden, Typography } from "@material-ui/core";
import Typist from "react-typist";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
  },
  heavy: {
    fontWeight: 500,
  },
});

function Home() {
  const classes = useStyles();

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
          >
            <Hidden mdUp>
              <Typography variant="h3" component="h4" className={classes.heavy}>
                <Box fontWeight="fontWeightBold">Fandykun</Box>
              </Typography>
              <Typography variant="h6" component="h6" className={classes.heavy}>
                <Typist avgTypingDelay={120}>Software Engineer</Typist>
              </Typography>
            </Hidden>
            <Hidden smDown>
              <Typography variant="h1" component="h2" className={classes.heavy}>
                <Box fontWeight="fontWeightBold">Fandy Kuncoro</Box>
              </Typography>
              <Typography variant="h6" component="h6" className={classes.heavy}>
                <Typist avgTypingDelay={120}>Software Engineer</Typist>
              </Typography>
            </Hidden>
          </Grid>
        </Grid>
      </Grid>
    </div>
  );
}

export default Home;
