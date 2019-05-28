import React from "react";
import classes from "./About.css";
import profileImage from "../../Assets/Images/Profile2.png";
import { Spring } from "react-spring/renderprops";

const About = props => {
  return (
    <section className={classes.About} id="about">
      <div className="container">
        <div className="row">
        <Spring
                from={{ opacity: 0, transform: "translateX(-200px)" }}
                to={props.aboutSection ? { opacity: 1, transform: "translateX(0)" } : {opacity: 0}}
                config={{mass: 1, tension: 280, friction: 120 }}
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
                from={{ opacity: 0, transform: "translateX(200px)" }}
                to={props.aboutSection ? { opacity: 1, transform: "translateX(0)" } : {opacity: 0}}
                config={{mass: 1, tension: 280, friction: 120 }}
              >
                {props => (
                  <div className="col-sm-12 col-md-6 col-lg-7" style={props}>
                  <h2>About Me</h2>
                  <h6>Front End Web Developer</h6>
                  <hr className={classes.hr}/>
                  <p>
                    I am Bartol Bilankov a Front End Web Developer living in
                    Manchester. I’m extremely passionate about Web Development and
                    Design in all its forms, and the main reason is that Front-end
                    development satisfies my need for creativity. It enabled me to
                    easily put my ideas into digital form and get results back really
                    quick.
                  </p>
                  <p>
                    I still remember the first time I created an HTML page and opened
                    it in the browser. A whole new world of possibilities appeared
                    before my eyes. I became really passionate and kept creating since
                    then. It absolutely has its ups and downs but if you love what you
                    do and are able to provide value to people, the outcomes are far
                    more rewarding! I love technology, enjoy creating a great user
                    experience, and looking for an exciting career with a lot of
                    growth potential. If you are a business seeking web presence or an
                    employer loking to hire, you can get in touch with me here
                  </p>
                </div>
                )}
            </Spring>
        </div>
      </div>
    </section>
  );
};

export default About;
