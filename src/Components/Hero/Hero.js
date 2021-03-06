import React from "react";
import classes from "./Hero.css";
import TextLoop from "react-text-loop";
import Media from 'react-media'

const Hero = props => {
  return (
    <section className={classes.Hero} id="home">
      <div className={classes.Dark}>
          <div className={classes.Heading}>
              <h2>I Love To Design</h2>
          <Media query={{minWidth: 768}}>
            {matches => matches ? (
        <h1>
        I Am
        {" "}<TextLoop springConfig={{ stiffness: 120, damping: 10 }} interval={2500} adjustingSpeed={200} >
            
              <span>Bartol Bilankov</span>
              <span>a Developer</span>
              <span>a Designer</span>
          </TextLoop>{" "}
        </h1>
            ):(
              <h1>
        {" "}<TextLoop springConfig={{ stiffness: 120, damping: 10 }} interval={2500} adjustingSpeed={200} >  
              <span>Bartol Bilankov</span>
              <span>I am a Developer</span>
              <span>I am a Designer</span>
          </TextLoop>{" "}
        </h1>
            )}
        </Media>
        </div>
        <div className={classes.Icons}>
            <span><a target="_blank" href="https://github.com/MsMatki"><i className="fab fa-github"></i></a></span>
            <span><a target="_blank" href="https://www.linkedin.com/in/bbilankov/"><i className="fab fa-linkedin-in"></i></a></span>
        </div>
      </div>
    </section>
  );
};

export default Hero;
