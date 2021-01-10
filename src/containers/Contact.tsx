import React from "react";
import { makeStyles, Slide } from "@material-ui/core";
import TwitterIcon from "@material-ui/icons/Twitter";
import LinkedInIcon from "@material-ui/icons/LinkedIn";
import GithubIcon from "@material-ui/icons/GitHub";
import InstagramIcon from "@material-ui/icons/Instagram";
import MailIcon from "@material-ui/icons/Mail";

interface Props {
  position?: boolean;
}

const useStyles = makeStyles({
  fixed: {
    position: "absolute",
    height: "60px",
    marginBottom: "40px",
  },
  root: {
    textAlign: "center",
    left: "0",
    bottom: "0",
    width: "100%",
  },
  link: {
    textDecoration: "none",
    backgroundColor: "transparent",
    margin: "8px",
    transition: "0.3s",
  },
  primaryLink: {
    textDecoration: "none",
    color: "#21211f",
    backgroundColor: "transparent",
    margin: "8px",
    transition: "0.3s",
  },
  secondaryLink: {
    textDecoration: "none",
    color: "#FFFFFF",
    backgroundColor: "transparent",
    margin: "8px",
    transition: "0.3s",
  },
  twitterHover: {
    transform: "translate(-50%,-50%)",
    color: "#1DA1F2",
  },
  instagramHover: {
    color: "#DD2A7B",
  },
  linkedInHover: {
    color: "#2867B2",
  },
  githubHover: {
    color: "#211F1F",
  },
  mailHover: {
    color: "#D44638",
  },
});

const Contact: React.FC<Props> = ({ position }) => {
  const classes = useStyles();

  const [twitterHover, setTwitterHover] = React.useState(false);
  const [instagramHover, setInstagramHover] = React.useState(false);
  const [linkedInHover, setLinkedInHover] = React.useState(false);
  const [githubHover, setGithubHover] = React.useState(false);
  const [mailHover, setMailHover] = React.useState(false);

  const twitterLink = "https://twitter.com/fandykunnn/";
  const instagramLink = "https://www.instagram.com/fandykun/";
  const linkedInLink = "https://linkedin.com/in/fandy-kuncoro-adianto/";
  const githubLink = "https://github.com/fandykun/";
  const mailLink = "mailto:fandy.17051@mhs.its.ac.id";

  const twitterTitle = "Fandykun on Twitter";
  const instagramTitle = "Fandykun on Instagram";
  const linkedInTitle = "Fandykun on LinkedIn";
  const githubTitle = "Fandykun on Github";
  const mailTitle = "Mail to fandy.17051@mhs.its.ac.id";

  const handleIconHover = (type: string) => {
    switch (type) {
      case "twitter":
        setTwitterHover(true);
        break;
      case "instagram":
        setInstagramHover(true);
        break;
      case "linkedIn":
        setLinkedInHover(true);
        break;
      case "github":
        setGithubHover(true);
        break;
      case "mail":
        setMailHover(true);
        break;
      default:
        break;
    }
  };

  const handleIconNotHover = (type: string) => {
    switch (type) {
      case "twitter":
        setTwitterHover(false);
        break;
      case "instagram":
        setInstagramHover(false);
        break;
      case "linkedIn":
        setLinkedInHover(false);
        break;
      case "github":
        setGithubHover(false);
        break;
      case "mail":
        setMailHover(false);
        break;
      default:
        break;
    }
  };

  return (
    // <Fade in={true} style={{ transitionDelay: '100ms' }}>
    <Slide direction="up" in={true} mountOnEnter unmountOnExit>
      <div className={`${classes.root} ${position ? "" : classes.fixed}`}>
        <a
          href={twitterLink}
          title={twitterTitle}
          className={`${
            position ? classes.secondaryLink : classes.primaryLink
          } ${twitterHover ? classes.twitterHover : "null"}`}
          onMouseEnter={() => handleIconHover("twitter")}
          onMouseLeave={() => handleIconNotHover("twitter")}
        >
          <TwitterIcon />
        </a>
        <a
          href={instagramLink}
          title={instagramTitle}
          className={`${
            position ? classes.secondaryLink : classes.primaryLink
          } ${instagramHover ? classes.instagramHover : "null"}`}
          onMouseEnter={() => handleIconHover("instagram")}
          onMouseLeave={() => handleIconNotHover("instagram")}
        >
          <InstagramIcon />
        </a>
        <a
          href={linkedInLink}
          title={linkedInTitle}
          className={`${
            position ? classes.secondaryLink : classes.primaryLink
          } ${linkedInHover ? classes.linkedInHover : "null"}`}
          onMouseEnter={() => handleIconHover("linkedIn")}
          onMouseLeave={() => handleIconNotHover("linkedIn")}
        >
          <LinkedInIcon />
        </a>
        <a
          href={githubLink}
          title={githubTitle}
          className={`${
            position ? classes.secondaryLink : classes.primaryLink
          } ${githubHover ? classes.githubHover : "null"}`}
          onMouseEnter={() => handleIconHover("github")}
          onMouseLeave={() => handleIconNotHover("github")}
        >
          <GithubIcon />
        </a>
        <a
          href={mailLink}
          title={mailTitle}
          className={`${
            position ? classes.secondaryLink : classes.primaryLink
          } ${mailHover ? classes.mailHover : "null"}`}
          onMouseEnter={() => handleIconHover("mail")}
          onMouseLeave={() => handleIconNotHover("mail")}
        >
          <MailIcon />
        </a>
      </div>
      {/* // </Fade> */}
    </Slide>
  );
};

export default Contact;
