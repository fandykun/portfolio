import { Grid, makeStyles } from "@material-ui/core";
import Timeline from "@material-ui/lab/Timeline";
import React from "react";

interface Props {}

const useStyles = makeStyles({
  gridContainer: {
    padding: "2rem 64px",
  },
});

const CustomTimelineItems: React.FC<Props> = ({ children }) => {
  const classes = useStyles();

  return (
    <Grid item xs={12}>
      <Grid container className={classes.gridContainer} justify="center">
        <Grid item lg={8} md={12}>
          <Timeline align="left">{children}</Timeline>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default CustomTimelineItems;
