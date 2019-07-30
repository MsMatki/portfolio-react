import React, { Fragment } from "react";
import classes from "./AboutMe.css";

const AboutMe = props => {
const about = props.about;

  return (
    <div className={classes.AboutMe}>
      <h2>{about.mainTitle}</h2>
      <h6>{about.title}</h6>
      <hr className={classes.hr} />
      <p className={classes.Desc}>{about.aboutMeDesc}</p>
      <p className={classes.Desc}>{about.techDesc}</p>
    </div>
  );
};

export default AboutMe;
