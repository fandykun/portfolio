import React from "react";
import Container from "../components/Container/Container";
import CustomTimelineItem from "../components/CustomTimeline/CustomTimelineItem";
import CustomTimelineItems from "../components/CustomTimeline/CustomTimelineItems";

function Achievements() {
  const achievementLists = [
    {
      path: "logo-icpc.png",
      role: "Top 90 Teams",
      date: "October 2017",
      title: "2017 Asia Jakarta - Indonesia National Contest",
      tags: ["CP", "Competitive", "Programming", "C", "C++"],
      descriptions: "A national competitive programming contest.",
    },
    {
      path: "logo-ristekdikti.png",
      role: "1st Place",
      date: "May 2019 & November 2020",
      title: "Indonesia Robot Contest 2019 & 2020",
      tags: ["Robotics", "C++", "ROS"],
      descriptions:
        "A National Robot Contest held by the Ministry of Research, Technology, and Higher Education followed by a lot of top universities in Indonesia. Finished as 1st Place in a wheeled robot soccer competition.",
    },
    {
      path: "logo-computerun-mini.png",
      role: "3rd Place",
      date: "January 2021",
      title: "Mobile Apps Development Computerun 2020",
      tags: ["Android", "UI / UX", "Java", "Python", "AI"],
      descriptions:
        "A Mobile Application Development held by Binus University followed by more than 100 teams in Indonesia. We won this competition and finished as 3rd Place. We have implemented face recognition as part of problem-solving cases.",
    },
  ];

  return (
    <Container
      primary
      id="achievements"
      title="Achievements"
      subTitle="I challenging myself by participating in a lot of competitions. and these are the results..."
    >
      <CustomTimelineItems>
        {achievementLists.map((achievement) => (
          <CustomTimelineItem timeline={achievement} primary />
        ))}
      </CustomTimelineItems>
    </Container>
  );
}

export default Achievements;
