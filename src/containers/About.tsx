import { Box, Chip, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    backgroundColor: "#e22a25",
    color: "#ffffff",
    padding: "3rem 0",
  },
  skillsChip: {
    margin: "0.5rem 0.5rem",
    color: "#e22a25",
    backgroundColor: "#ffffff",
    fontWeight: 700,
    textTransform: "uppercase",
    "&:hover": {
      background: "#000000",
      color: "#ffffff",
    },
  },
});

function About() {
  const classes = useStyles();

  const programmingList = [
    "C++",
    "C",
    "Python",
    "PHP",
    "Javascript",
    "Typescript",
    "SQL",
    "Laravel",
    "Phalcon",
    "Django",
    "HTML",
    "CSS",
    "React.js",
    "OpenCV",
    "Tensorflow",
    "Keras",
    "ROS",
    "Git",
  ];

  const conceptList = [
    "Data Structure",
    "Object Oriented Programming",
    "Design Pattern",
    "Model View Controller",
    "Domain Driven Design",
    "Rest API",
    "Clean Architecture",
    "Machine Learning",
    "Image Processing",
    "Computer Vision",
  ];

  return (
    <Grid container className={classes.root} spacing={0} id="about">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2" component="h3">
              <Box fontWeight="fontWeightBold">About me</Box>
            </Typography>
            <Typography variant="subtitle1" component="span">
              <Box textAlign="center" fontStyle="italic">
                Let's get to know me more...
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ padding: "2rem 64px" }}>
          <Grid item xs={8}>
            <Typography variant="h3" component="h4">
              <Box fontWeight="fontWeightBold">Summary</Box>
            </Typography>
            <Typography variant="body1" component="span">
              <Box>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
                eiusmod tempor incididunt ut labore et dolore magna aliqua. Nisl
                purus in mollis nunc sed id. Lobortis elementum nibh tellus
                molestie nunc non. Nunc sed id semper risus. Amet massa vitae
                tortor condimentum lacinia quis vel. Convallis convallis tellus
                id interdum velit.
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ padding: "2rem 64px" }}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h4">
              <Box fontWeight="fontWeightBold">Education</Box>
            </Typography>
            <Typography variant="h5" component="h6">
              <Box fontWeight="fontWeightBold">
                Institut Teknologi Sepuluh Nopember
              </Box>
            </Typography>
            <Typography variant="body1" component="span">
              <Box>June 2017 - August 2021 (Expected)</Box>
            </Typography>
            <Typography variant="body1" component="span">
              <Box>Bachelor of Science in Computer Science Candidate</Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container style={{ padding: "2rem 64px" }}>
          <Grid item xs={12}>
            <Typography variant="h3" component="h4">
              <Box fontWeight="fontWeightBold">Skills</Box>
            </Typography>
          </Grid>

          <Grid item lg={6} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h6">
                  <Box fontWeight="fontWeightBold">Tech</Box>
                </Typography>
              </Grid>
              <Grid item xs={9}>
                {programmingList.map((list) => (
                  <Chip label={list} className={classes.skillsChip} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={12}>
            <Grid container spacing={4}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h6">
                  <Box fontWeight="fontWeightBold">Programming Concept</Box>
                </Typography>
              </Grid>
              <Grid item xs={9}>
                {conceptList.map((list) => (
                  <Chip label={list} className={classes.skillsChip} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}

export default About;
