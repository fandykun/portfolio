import { Box, Grid, makeStyles, Typography } from "@material-ui/core";
import React from "react";

interface Props {
  id: string;
  title: string;
  subTitle: string;
  primary?: boolean;
}

const useStyles = makeStyles({
  root: {
    flexGrow: 1,
    padding: "3rem 0",
  },
  primary: {
    backgroundColor: "#e22a25",
    color: "#ffffff",
  },
});

const Container: React.FC<Props> = ({
  id,
  title,
  subTitle,
  primary,
  children,
}) => {
  const classes = useStyles();

  return (
    <Grid
      container
      className={`${classes.root} ${primary ? classes.primary : ""}`}
      spacing={0}
      id={id}
    >
      <Grid item xs={12}>
        <Grid container justify="center">
          <Grid item>
            <Typography variant="h2" component="h3">
              <Box fontWeight="fontWeightBold">{title}</Box>
            </Typography>
            <Typography variant="subtitle1" component="span">
              <Box textAlign="center" fontStyle="italic">
                {subTitle}
              </Box>
            </Typography>
          </Grid>
        </Grid>
      </Grid>

      {children}
    </Grid>
  );
};

export default Container;
