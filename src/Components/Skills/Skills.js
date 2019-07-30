import React, { Fragment } from "react";
import classes from "./Skills.css";
import ProgressBarIndicator from "./ProgerssBar/ProgressBarIndicator";
import icons from "../../Assets/Icons/et-line.css";
import { Spring } from "react-spring/renderprops";
import Media from "react-media";
import Education from "./Education/Education";
import Experience from "./Experience/Experience";

const Skills = props => {

  return (
    <section className={classes.Skills} id="skills">
      <div className={classes.Paralax}>
        <div className="container">
          <Media query={{ minWidth: 768 }}>
            {maches =>
              maches ? (
                <div className="row">
                  <Spring
                    immediate={props.onPageLoading}
                    from={{ opacity: 0, transform: "translateX(-200px)" }}
                    to={
                      props.skillsSection
                        ? { opacity: 1, transform: "translateX(0)" }
                        : { opacity: 0 }
                    }
                    config={{ mass: 1, tension: 280, friction: 120 }}
                  >
                    {props => (
                      <Fragment>
                        <div className="col-sm-6 col-lg-3" style={props}>
                          <span className={icons.iconBookOpen} />
                          <br />
                          <h5>Education</h5>
                          <Education />
                        </div>

                        <div className="col-sm-6 col-lg-3" style={props}>
                          <span className={icons.iconLayers} />
                          <br />
                          <h5>Experience</h5>

                          <Experience />
                        </div>
                      </Fragment>
                    )}
                  </Spring>

                  <Spring
                    immediate={props.onPageLoading}
                    from={{ opacity: 0, transform: "translateX(200px)" }}
                    to={
                      props.skillsSection
                        ? { opacity: 1, transform: "translateX(0)" }
                        : { opacity: 0 }
                    }
                    config={{ mass: 1, tension: 280, friction: 120 }}
                  >
                    {props => (
                      <div className="col-lg-6" style={props}>
                        <span className={icons.iconGenius} />
                        <br />
                        <h5>My Skills</h5>

                        <ProgressBarIndicator
                          skillsSection={props.skillsSection}
                          onPageLoading={props.onPageLoading}
                        />
                      </div>
                    )}
                  </Spring>
                </div>
              ) : (
                <div className="row">
                    <div className="col-sm-6 col-lg-3">
                      <span className={icons.iconBookOpen} />
                      <br />
                      <h5>Education</h5>
                      <Education />
                    </div>

                    <div className="col-sm-6 col-lg-3">
                      <span className={icons.iconLayers} />
                      <br />
                      <h5>Experience</h5>
                      <Experience />
                    </div>
                  <div className="col-lg-6">
                    <span className={icons.iconGenius} />
                    <br />
                    <h5>My Skills</h5>
                    <ProgressBarIndicator
                      skillsSection={props.skillsSection}
                      onPageLoading={props.onPageLoading}
                    />
                  </div>
                </div>
              )
            }
          </Media>
        </div>
      </div>
    </section>
  );
};

export default Skills;
