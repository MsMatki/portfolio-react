import React from "react";
import classes from "./Skills.css";
import ProgressBarIndicator from './ProgerssBar/ProgressBarIndicator';
import icons from '../../Assets/Icons/et-line.css'

const Skills = props => {

   

  return (
    <section className={classes.Skills}>
      <div className={classes.Paralax}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <span className={icons.iconBookOpen}></span><br/>
            <h5>Education</h5>
            
            <ul className={classes.Education}>
              <li>
                <h6>Nanodegree Udacity</h6>
                <p>Front End Web Developer</p>
              </li>
              <li>
                <h6>School of Graphic Designs</h6>
                <p>Graphic Designer</p>
              </li>
              <li>
                <h6>Treehouse</h6>
                <p>Front End Web Development</p>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3">
          <span className={icons.iconLayers}></span><br/>
            <h5>Experience</h5>
           
            <ul>
              <li>
                <h6>mobileLIVE inc</h6>
                <p className="mb-0">Sep 2018 - Present</p>
                <p className="mb-0">Front End Developer</p>
                <p>Toronto, Canada</p>
              </li>
              <li>
                <h6>Freelancer</h6>
                <p className="mb-0">Jan 2018 - Aug 2018</p>
                <p className="mb-0">Web Developer / Designer</p>
                <p>Limerick, Ireland</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
          <span className={icons.iconGenius}></span><br/>
            <h5>My Skills</h5>
            
            <ProgressBarIndicator/>
          </div>
        </div>
      </div>
      </div>
    </section>
  );
};

export default Skills;
