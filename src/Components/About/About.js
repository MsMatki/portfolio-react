import React, { Component } from "react";
import classes from "./About.css";
import profileImage from "../../Assets/Images/Profile2.png";
import { Spring } from "react-spring/renderprops";

class About extends Component {



  render() {
    console.log(this.props.aboutSection)
    return (
      <section className={classes.About} id="about">
        <div className="container">
          <div className="row">
            <Spring
              immediate={this.props.onPageLoading}
              from={{ opacity: 0, transform: "translateX(-200px)" }}
              to={
                this.props.aboutSection
                  ? { opacity: 1, transform: "translateX(0)" }
                  : { opacity: 0 }
              }
              config={{ mass: 1, tension: 280, friction: 120 }}
            >
              {props => (
                <div className="col-sm-12 col-md-6 col-lg-5" style={props}>
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
                this.props.aboutSection
                  ? { opacity: 1, transform: "translateX(0)" }
                  : { opacity: 0}
              }
              config={{ mass: 1, tension: 280, friction: 120 }}
            >
              {props => (
                <div className="col-sm-12 col-md-6 col-lg-7" style={props}>
                  <h2>About Me</h2>
                  <h6>Front End Web Developer</h6>
                  <hr className={classes.hr} />
                  <p className={classes.Desc}>
                    I am <strong>Bartol Bilankov</strong> a Front End Web Developer living in
                    Manchester. I’ve felt a strong connection to dragons since I was a kid, I fell in love with them instantly, They are wise yet sneaky, they are incredibly beautiful. They sort of straddle the line between being good and evil, and basically transcend the labels. They are badass as hell and very intelligent, just everything about them I found fascinating.
                  </p>
                  <p className={classes.Desc}>
                  I’m extremely passionate about Web Development
                    and Design in all its forms. I still remember the first time I created an HTML page and
                    opened it in the browser. A whole new world of possibilities
                    appeared before my eyes. I became really passionate and kept
                    creating since then. It absolutely has its ups and downs but
                    if you love what you do and are able to provide value to
                    people, the outcomes are far more rewarding! I love
                    technology, enjoy creating a great user experience, and
                    looking for an exciting career with a lot of growth
                    potential.
                  </p>
                </div>
              )}
            </Spring>
          </div>
        </div>
      </section>
    );
  }
}

export default About;
