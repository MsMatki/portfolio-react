import React from "react";
import classes from "./About.css";
import profileImage from "../../Assets/Images/Profile2.png";

const About = props => {
  return (
    <section className={classes.About}>
      <div className="container">
        <div className="row">
          <div className="col-sm-12 col-md-6 col-lg-6">
            <div className={classes.ImageContainer}>
              <img src={profileImage} alt="" />
            </div>
          </div>
          <div className="col-sm-12 col-md-6 col-lg-6"></div>
        </div>
      </div>
    </section>
  );
};

export default About;
