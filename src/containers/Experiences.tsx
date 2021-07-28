import React from "react";
import Container from "../components/Container/Container";
import CustomTimelineItems from "../components/CustomTimeline/CustomTimelineItems";
import CustomTimelineItem from "../components/CustomTimeline/CustomTimelineItem";

export default function Experiences() {
  const ExperienceLists = [
    {
      path: "logo-dptsi.png",
      role: "Software Engineer",
      date: "Februari 2021 - May 2021",
      title: "Software Engineer Internship at DPTSI-ITS",
      tags: ["PHP", "Laravel"],
      descriptions: [
        "Improved efficiency by writing script to generate each semester report of finance",
        "Built application to manage finance student report",
      ],
    },
    {
      path: "logo-iris.png",
      role: "Senior Programmer",
      date: "October 2018 - December 2020",
      title: "IRIS ITS Robotics Team",
      tags: ["C++", "GUI", "ROS", "Robotics", "Computer Vision"],
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
      date: "January 2019 - July 2021",
      title: "Intelligent Computation and Vision Laboratory",
      tags: ["Python", "AI", "Machine Learning"],
      descriptions: [
        "Introduced machine learning concept to a new college student interested in our lab using Orange for implementation",
        "Assist the junior student on subjects related to our lab and sometimes joining a competition to improving our related skills",
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
