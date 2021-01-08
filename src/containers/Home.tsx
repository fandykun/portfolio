import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Hidden, Typography, Zoom, Button } from "@material-ui/core";
import Typist from "react-typist";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Footer from "./Footer";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    position: "absolute",
    left: "50%",
    top: "50%",
    transform: "translate(-50%, -50%)",
    textAlign: "center",
  },
  jobTitle: {
    // marginTop: "-px",
    // textDecoration: "underline",
    fontWeight: 500,
  },
  prim_button: {
    margin: "20px",
    borderRadius: "8px",
    color: "#FFFFFF",
    transition: "0.3s",
    background: "#e22a25",
    "&:hover": {
      opacity: "1",
      background: "#000000",
    },
  },
});

function Home() {
  const classes = useStyles();

  const [isChanged, setIsChanged] = useState(true);
  const [indexNumber, setIndexNumber] = useState(0);

  const listJobTitle = [
    "Software Engineer",
    "Backend Engineer",
    "Frontend Engineer",
  ];

  const myTypist = (
    <Typist
      avgTypingDelay={90}
      startDelay={100}
      onTypingDone={() => {
        setIsChanged(false);
        setIndexNumber(indexNumber + 1);
      }}
    >
      {listJobTitle[indexNumber % 3]}
      <Typist.Backspace count={17} delay={200} />
    </Typist>
  );

  useEffect(() => {
    setIsChanged(true);
  }, [isChanged]);

  return (
    <div>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            // direction="column"
            justify="center"
            // alignItems="center"
          >
            <Zoom in={true} style={{ transitionDelay: "200ms" }}>
              <Grid>
                <Hidden mdUp>
                  <Typography variant="h3" component="h4">
                    <Box fontWeight="fontWeightBold">Fandykun</Box>
                  </Typography>
                </Hidden>
                <Hidden smDown>
                  <Typography variant="h1" component="h2">
                    <Box fontWeight="fontWeightBold">Fandy Kuncoro</Box>
                  </Typography>
                </Hidden>
                <Typography
                  variant="h6"
                  component="h6"
                  className={classes.jobTitle}
                >
                  {isChanged ? myTypist : null}
                </Typography>
              </Grid>
            </Zoom>
          </Grid>
          <Button
            variant="contained"
            size="large"
            disableElevation
            className={classes.prim_button}
            startIcon={<ExpandMoreIcon />}
            href="#about"
          >
            Explore Me!
          </Button>
        </Grid>
      </Grid>
      <Footer />
    </div>
  );
}

export default Home;
