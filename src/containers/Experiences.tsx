import React from "react";
import { makeStyles } from "@material-ui/core/styles";

import Container from "../components/Container/Container";
import CustomTimelineItems from "../components/CustomTimeline/CustomTimelineItems";
import CustomTimelineItem from "../components/CustomTimeline/CustomTimelineItem";

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
  const ExperienceLists = [
    {
      path: "logo-iris.png",
      role: "Senior Programmer",
      date: "October 2018 - December 2020",
      title: "IRIS ITS Robotics Team",
      tags: ["C++", "GUI", "ROS", "Robotics"],
      descriptions: [
        "Developed Graphical User Interface (GUI) Application using C++ for handled communication using UDP (unicast & multicast) socket",
        "Refactor codebase of all robot program from functional programming into object oriented programming with singleton design pattern",
        "Help a dissertation project by building a simulation system of wheeled robot soccer competition",
        "Achieved the most award and overall champion on Indonesian Robot Contest 2019 & 2020",
      ],
    },
    {
      path: "logo-kcv.png",
      role: "Administrator",
      date: "January 2019 - Present",
      title: "Intelligent Computation and Vision Laboratory",
      tags: ["Python", "AI", "Machine Learning"],
      descriptions: [
        "Introduced machine learning concept to a new college student interested in our lab using Orange for implementation",
      ],
    },
  ];

  return (
    <Container
      id="experiences"
      title="Experiences"
      subTitle="Where I've spent my campus life..."
    >
      <CustomTimelineItems>
        {ExperienceLists.map((experience) => (
          <CustomTimelineItem timeline={experience} />
        ))}
      </CustomTimelineItems>
    </Container>
  );
}
