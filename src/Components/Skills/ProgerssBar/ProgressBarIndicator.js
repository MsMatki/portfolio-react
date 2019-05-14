import React, { Component, Fragment } from "react";
import { ProgressBar } from "react-bootstrap";
import classes from "./ProgressBarIndicator.css";

class ProgressBarIndicator extends Component {
  state = {
    skills: [
      { title: "Responsive Design", indicator: 80 },
      { title: "HTML/CSS", indicator: 90 },
      { title: "JavaScript", indicator: 80 },
      { title: "React.js", indicator: 70 }
    ]
  };

  render() {
    return (
      <div className={classes.ProgressBar}>
        {this.state.skills.map(skill => {
          return (
            <Fragment key={skill.title}>
              <h6>
                {skill.title}<span>{skill.indicator}%</span>
              </h6>
              <ProgressBar
                animated
                now={skill.indicator}
                className={classes.ProgressBarIndicator}
              />
            </Fragment>
          );
        })}
      </div>
    );
  }
}

export default ProgressBarIndicator;
