import React from "react";
import classes from "./Skills.css";
import ProgressBarIndicator from './ProgerssBar/ProgressBarIndicator'

const Skills = props => {

   

  return (
    <section className={classes.Skills}>
      <div className={classes.Paralax}>
      <div className="container">
        <div className="row">
          <div className="col-sm-6 col-lg-3">
            <span><i className="fas fa-book icon"></i></span><br/>
            <h5>Education</h5>
            
            <ul>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
            </ul>
          </div>

          <div className="col-sm-6 col-lg-3">
          <span><i className="fas fa-layer-group icon"></i></span><br/>
            <h5>Experience</h5>
           
            <ul>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
              <li>
                <h6>Lorem, ipsum.</h6>
                <p>Lorem, ipsum dolor.</p>
              </li>
            </ul>
          </div>

          <div className="col-lg-6">
          <span><i className="fab fa-react icon"></i></span><br/>
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
