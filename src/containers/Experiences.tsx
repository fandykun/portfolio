import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Timeline from "@material-ui/lab/Timeline";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import List from "@material-ui/core/List";
import ListItem, { ListItemProps } from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box, Chip, Grid } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
    padding: "3rem 0",
  },
  paper: {
    padding: "6px 16px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "1px 8px 12px grey",
      WebkitTransition: "box-shadow .2s ease-in",
    },
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main,
  },
  oppositeContent: {
    flex: 0.5,
  },
  gridContainer: {
    padding: "2rem 64px",
  },
  mainColor: {
    color: "#e22a25",
  },
  experienceChip: {
    margin: "0.5rem 0.5rem",
    color: "#ffffff",
    backgroundColor: "#e22a25",
    fontWeight: 700,
    textTransform: "uppercase",
  },
}));

export default function Experiences() {
  const classes = useStyles();

  return (
    <Grid container className={classes.root} spacing={0} id="experiences">
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2" component="h3">
              <Box fontWeight="fontWeightBold">Experiences</Box>
            </Typography>
            <Typography variant="subtitle1" component="span">
              <Box textAlign="center" fontStyle="italic">
                Where I've spent my campus life...
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      <Grid item xs={12}>
        <Grid container className={classes.gridContainer} justify="center">
          <Grid item lg={8} md={12}>
            <Timeline align="left">
              <TimelineItem>
                <TimelineOppositeContent className={classes.oppositeContent}>
                  <Typography variant="h6" className={classes.mainColor}>
                    Senior Programmer
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    October 2018 - December 2020
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="span">
                      <Box fontWeight="fontWeightBold">
                        IRIS ITS Robotics Team
                      </Box>
                    </Typography>
                    <Chip label="C++" className={classes.experienceChip} />
                    <Chip label="GUI" className={classes.experienceChip} />
                    <Chip label="ROS" className={classes.experienceChip} />
                    <Chip
                      label="Simulation"
                      className={classes.experienceChip}
                    />
                    <List>
                      <ListItem button alignItems="flex-start">
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Box>
                                Developed Graphical User Interface (GUI)
                                Application using C++ for handled communication
                                using UDP (unicast & multicast) socket
                              </Box>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button alignItems="flex-start">
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Box>
                                Refactor codebase of all robot program from
                                functional programming into object oriented
                                programming with singleton design pattern
                              </Box>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button alignItems="flex-start">
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Box>
                                Help a dissertation project by building a
                                simulation system of wheeled robot soccer
                                competition
                              </Box>
                            </Typography>
                          }
                        />
                      </ListItem>
                      <ListItem button alignItems="flex-start">
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Box>
                                Achieved the most award and overall champion on
                                Indonesian Robot Contest 2019 & 2020
                              </Box>
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>

              <TimelineItem>
                <TimelineOppositeContent className={classes.oppositeContent}>
                  <Typography variant="h6" className={classes.mainColor}>
                    Administrator
                  </Typography>
                  <Typography variant="body1" color="textSecondary">
                    January 2019 - Present
                  </Typography>
                </TimelineOppositeContent>
                <TimelineSeparator>
                  <TimelineDot variant="outlined" />
                  <TimelineConnector />
                </TimelineSeparator>
                <TimelineContent>
                  <Paper elevation={3} className={classes.paper}>
                    <Typography variant="h6" component="span">
                      <Box fontWeight="fontWeightBold">
                        Intelligent Computation and Vision Laboratory
                      </Box>
                    </Typography>
                    <Chip label="Python" className={classes.experienceChip} />
                    <Chip label="AI" className={classes.experienceChip} />
                    <Chip
                      label="Machine Learning"
                      className={classes.experienceChip}
                    />

                    <List>
                      <ListItem button alignItems="flex-start">
                        <ListItemIcon>
                          <ChevronRightIcon />
                        </ListItemIcon>
                        <ListItemText
                          primary={
                            <Typography variant="body2">
                              <Box>
                                Introduced machine learning concept to a new
                                college student interested in our lab using
                                Orange for implementation
                              </Box>
                            </Typography>
                          }
                        />
                      </ListItem>
                    </List>
                  </Paper>
                </TimelineContent>
              </TimelineItem>
            </Timeline>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
}
