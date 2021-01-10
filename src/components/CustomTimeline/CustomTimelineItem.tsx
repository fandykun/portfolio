import { makeStyles } from "@material-ui/core";
import React from "react";
import TimelineItem from "@material-ui/lab/TimelineItem";
import TimelineSeparator from "@material-ui/lab/TimelineSeparator";
import TimelineConnector from "@material-ui/lab/TimelineConnector";
import TimelineContent from "@material-ui/lab/TimelineContent";
import TimelineOppositeContent from "@material-ui/lab/TimelineOppositeContent";
import TimelineDot from "@material-ui/lab/TimelineDot";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import Paper from "@material-ui/core/Paper";
import Typography from "@material-ui/core/Typography";
import { Box, Chip } from "@material-ui/core";
import ChevronRightIcon from "@material-ui/icons/ChevronRight";

interface Timeline {
  path: string;
  role: string;
  date: string;
  title: string;
  tags: string[];
  descriptions: string[] | string;
}

interface Props {
  timeline: Timeline;
  primary?: boolean;
}

const useStyles = makeStyles({
  paper: {
    padding: "6px 16px",
    "&:hover": {
      cursor: "pointer",
      boxShadow: "1px 8px 12px grey",
      transform: "translateX(-5px)",
      transition: "transform .2s ease, box-shadow .2s ease-in",
    },
  },
  oppositeContent: {
    flex: 0.5,
  },
  primaryChip: {
    margin: "0.5rem 0.5rem",
    color: "#ffffff",
    backgroundColor: "#e22a25",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  secondaryChip: {
    margin: "0.5rem 0.5rem",
    color: "#e22a25",
    backgroundColor: "#ffffff",
    fontWeight: 700,
    textTransform: "uppercase",
  },
  primaryColor: {
    color: "#ffffff",
  },
  secondaryColor: {
    color: "#e22a25",
  },
  description: {
    padding: "16px 16px",
  },
});

const CustomTimelineItem: React.FC<Props> = ({ timeline, primary }) => {
  const classes = useStyles();
  const imageSize = 64;

  const handleDescriptions = (desc: string[] | string) => {
    if (typeof desc === "object") {
      return (
        <List>
          {desc.map((description) => (
            <ListItem alignItems="flex-start">
              <ListItemIcon>
                <ChevronRightIcon />
              </ListItemIcon>
              <ListItemText
                primary={
                  <Typography variant="body2">
                    <Box>{description}</Box>
                  </Typography>
                }
              />
            </ListItem>
          ))}
        </List>
      );
    } else {
      return (
        <Typography variant="body2" className={classes.description}>
          <Box>{desc}</Box>
        </Typography>
      );
    }
  };
  return (
    <TimelineItem>
      <TimelineOppositeContent className={classes.oppositeContent}>
        <img
          src={process.env.PUBLIC_URL + "assets/" + timeline.path}
          alt={timeline.title}
          width={imageSize}
          height="auto"
        />
        {primary ? (
          <React.Fragment>
            <Typography variant="h6">{timeline.role}</Typography>
            <Typography variant="body1" className={classes.primaryColor}>
              {timeline.date}
            </Typography>
          </React.Fragment>
        ) : (
          <React.Fragment>
            <Typography variant="h6" className={classes.secondaryColor}>
              {timeline.role}
            </Typography>
            <Typography variant="body1" color="textSecondary">
              {timeline.date}
            </Typography>
          </React.Fragment>
        )}
      </TimelineOppositeContent>
      <TimelineSeparator>
        <TimelineDot variant="outlined" />
        <TimelineConnector />
      </TimelineSeparator>
      <TimelineContent>
        <Paper elevation={3} className={classes.paper}>
          <Typography variant="h6" component="span">
            <Box fontWeight="fontWeightBold">{timeline.title}</Box>
          </Typography>
          {timeline.tags.map((tag) => (
            <Chip label={tag} className={classes.primaryChip} />
          ))}

          {handleDescriptions(timeline.descriptions)}
        </Paper>
      </TimelineContent>
    </TimelineItem>
  );
};

export default CustomTimelineItem;
