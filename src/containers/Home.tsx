import React, { useEffect, useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Box, Grid, Hidden, Typography, Zoom, Button } from "@material-ui/core";
import Typist from "react-typist";
import { Link } from "react-scroll";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";

import Contact from "./Contact";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    height: "100vh",
    alignItems: "center",
    textAlign: "center",
  },
  jobTitle: {
    // marginTop: "-px",
    // textDecoration: "underline",
    fontWeight: 500,
  },
  prim_button: {
    margin: "20px",
    // borderRadius: "8px",
    color: "#FFFFFF",
    transition: "0.3s",
    background: "#e22a25",
    "&:hover": {
      opacity: "1",
      background: "#000000",
    },
  },
});

// Source: https://www.jonphillips.ca/

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
      avgTypingDelay={60}
      onTypingDone={() => {
        setIsChanged(false);
        setIndexNumber(indexNumber + 1);
      }}
    >
      {listJobTitle[indexNumber % 3]}
      <Typist.Backspace
        count={listJobTitle[indexNumber % 3].length}
        delay={500}
      />
    </Typist>
  );

  useEffect(() => {
    setIsChanged(true);
  }, [isChanged]);

  return (
    <div>
      <Grid container className={classes.root} id="home">
        <Grid item xs={12}>
          <Grid container justify="center">
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
          >
            <Link to="about" smooth={true}>
              Explore Me!
            </Link>
          </Button>
        </Grid>
      </Grid>
      <Contact />
    </div>
  );
}

export default Home;
