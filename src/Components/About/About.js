import React, { Component } from "react";
import classes from "./About.css";
import profileImage from "../../Assets/Images/Profile2.png";
import { Spring } from "react-spring/renderprops";
import AboutMe from "./AboutMe/AboutMe";
import Media from "react-media";


class About extends Component {

  
  render() {
    return (
      <section className={classes.About} id="about">
        <div className="container slideIn">
          <Media query={{ minWidth: 768 }}>
            {matches =>
              matches ? (
                <div className="row">
                  <Spring
                    immediate={this.props.onPageLoading}
                    from={{ opacity: 0, transform: "translateX(-200px)" }}
                    to={
                      this.props.active[0]
                        ? { opacity: 1, transform: "translateX(0)" }
                        : { opacity: 0 }
                    }
                    config={{ mass: 1, tension: 280, friction: 80 }}
                  >
                    {props => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-5"
                        style={props}
                      >
                        <div className={classes.ImageContainer}>
                          <img src={profileImage} alt="" />
                        </div>
                      </div>
                    )}
                  </Spring>
                  <Spring
                    immediate={this.props.onPageLoading}
                    from={{ opacity: 0, transform: "translateX(200px)" }}
                    to={
                      this.props.active[0]
                        ? { opacity: 1, transform: "translateX(0)" }
                        : { opacity: 0 }
                    }
                    config={{ mass: 1, tension: 280, friction: 80 }}
                  >
                    {props => (
                      <div
                        className="col-sm-12 col-md-6 col-lg-7"
                        style={props}
                      >
                        <AboutMe about={this.props.about} />
                      </div>
                    )}
                  </Spring>
                </div>
              ) : (
                <div className="row">
                  <div className="col-sm-12 col-md-6 col-lg-5">
                    <div className={classes.ImageContainer}>
                      <img src={profileImage} alt="" />
                    </div>
                  </div>
                  <div className="col-sm-12 col-md-6 col-lg-7">
                    <AboutMe about={this.props.about} />
                  </div>
                </div>
              )
            }
          </Media>
        </div>
      </section>
    );
  }
}

export default About;
