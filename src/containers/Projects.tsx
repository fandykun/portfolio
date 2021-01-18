import React from "react";
import Container from "../components/Container/Container";
import { makeStyles, Theme, createStyles } from "@material-ui/core/styles";
import Accordion from "@material-ui/core/Accordion";
import AccordionDetails from "@material-ui/core/AccordionDetails";
import AccordionSummary from "@material-ui/core/AccordionSummary";
import Typography from "@material-ui/core/Typography";
import ExpandMoreIcon from "@material-ui/icons/ExpandMore";
import { Box, Chip, Grid } from "@material-ui/core";

const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      alignItems: "center",
    },
    heading: {
      fontSize: theme.typography.pxToRem(15),
      flexBasis: "33.33%",
      flexShrink: 0,
    },
    secondaryHeading: {
      fontSize: theme.typography.pxToRem(15),
      color: theme.palette.text.secondary,
    },
    customChip: {
      margin: "0.5rem 0.5rem",
      color: "#ffffff",
      backgroundColor: "#e22a25",
      fontWeight: 700,
      textTransform: "uppercase",
    },
    accordion: {
      "&:hover": {
        border: "1px solid #e22a25",
      },
    },
    link: {
      color: "#e22a25",
    },
  })
);
function Projects() {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState<string | false>(false);

  const handleChange = (panel: string) => (
    event: React.ChangeEvent<{}>,
    isExpanded: boolean
  ) => {
    setExpanded(isExpanded ? panel : false);
  };

  const projectLists = [
    {
      name: "Duacare Official Website",
      tags: ["PHP", "Laravel", "Bootstrap", "Ajax", "jQuery"],
      description: (
        <Box>
          Web profile of duacare organization, created using Laravel and has
          been deployed it on{" "}
          <a href="https://duacare.org/" className={classes.link}>
            https://duacare.org/
          </a>
        </Box>
      ),
    },
    {
      name: "Stack Game",
      tags: ["Javascript", "Node.js", "Three.js", "Socket.io"],
      description:
        "A web-based game created using Three.js library. This game inspired by a stack game on mobile applications but build on multiplayer via socket.",
    },
    {
      name: "Information System Covid-19",
      tags: ["PHP", "Phalcon", "DDD", "Clean Architecture"],
      description:
        "A simple website of information system of COVID-19, build on Phalcon framework with domain-driven design architecture",
    },
    {
      name: "Performance Monitoring Application",
      tags: ["Python", "Django", "Rest API", "Group"],
      description:
        "A Single-Page Application of Performance Monitoring Application. Created by Django rest framework by providing an API endpoint using Django (Django Rest Framework) for web and android",
    },
  ];

  return (
    <Container
      id="projects"
      title="Projects"
      subTitle="These are my best works so far..."
    >
      <Grid item xs={12} className={classes.root}>
        <Grid container style={{ padding: "2rem 64px" }} justify="center">
          <Grid item lg={8} md={12} alignItems="center">
            {projectLists.map((project, index) => (
              <Accordion
                expanded={expanded === "" + index}
                onChange={handleChange("" + index)}
                className={classes.accordion}
              >
                <AccordionSummary
                  expandIcon={<ExpandMoreIcon />}
                  aria-controls={"panel" + index + "bh-content"}
                  id={"panel" + index + "1bh-header"}
                >
                  <Typography className={classes.heading}>
                    <Box>{project.name}</Box>
                  </Typography>
                  <Typography className={classes.secondaryHeading}>
                    {project.tags.map((tag) => (
                      <Chip label={tag} className={classes.customChip} />
                    ))}
                  </Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Typography>{project.description}</Typography>
                </AccordionDetails>
              </Accordion>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Projects;
