import React from "react";
import classes from "./Hero.css";
import TextLoop from "react-text-loop";

const Hero = props => {
  return (
    <section className={classes.Hero} id="home">
      <div className={classes.Dark}>
          <div className={classes.Heading}>
              <h2>I Love To Design</h2>
        <h1>
        I Am
        {" "}<TextLoop springConfig={{ stiffness: 120, damping: 10 }} interval={2500} adjustingSpeed={200} >
            
              <span>Bartol Bilankov</span>
              <span>a Developer</span>
              <span>a Designer</span>
          </TextLoop>{" "}
        </h1>
        </div>
        <div className={classes.Icons}>
            <span><a href=""><i className="fab fa-github"></i></a></span>
            <span><a href=""><i className="fab fa-linkedin-in"></i></a></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
