import { Box, Chip, Grid, Typography } from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import React from "react";
import Container from "../components/Container/Container";

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
    "Linux",
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
    <Container
      id="about"
      title="About me"
      subTitle="Let's get to know me more..."
      primary
    >
      <Grid item xs={12}>
        <Grid container style={{ padding: "2rem 64px" }}>
          <Grid item lg={8} md={12}>
            <Typography variant="h3" component="h4">
              <Box fontWeight="fontWeightBold">Introduce myself</Box>
            </Typography>
            <Typography variant="body1" component="span">
              <Box>
                Hi, I'm Fandy Kuncoro Adianto. An undergraduate computer science
                student. I’m highly interested in programming especially
                software development and artificial intelligence. This website
                is part of my digital progress history for my future self.
                Sometimes I want to look back and find out what I was actually
                doing, day-to-day, and how I really felt back then.
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
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h6">
                  <Box fontWeight="fontWeightBold">Tech</Box>
                </Typography>
              </Grid>
              <Grid item lg={9} md={12}>
                {programmingList.map((list) => (
                  <Chip label={list} className={classes.skillsChip} />
                ))}
              </Grid>
            </Grid>
          </Grid>
          <Grid item lg={6} md={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography variant="h5" component="h6">
                  <Box fontWeight="fontWeightBold">Programming Concept</Box>
                </Typography>
              </Grid>
              <Grid item lg={9} md={12}>
                {conceptList.map((list) => (
                  <Chip label={list} className={classes.skillsChip} />
                ))}
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default About;
