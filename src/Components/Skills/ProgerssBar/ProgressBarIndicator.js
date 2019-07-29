import React, { Component, Fragment } from "react";
import classes from "./ProgressBarIndicator.css";
import { Spring } from "react-spring/renderprops";

class ProgressBarIndicator extends Component {
  state = {
    skills: [
      { title: "Responsive Design", indicator: 80 },
      { title: "HTML/CSS", indicator: 90 },
      { title: "JavaScript", indicator: 80 },
      { title: "React.js", indicator: 70 }
    ],
    skillsSection: false
  };

  componentDidMount() {
   document.addEventListener('scroll', this.onScroll);
  }

  onScroll = () => {
    const skills = document.querySelector("#skills").offsetTop;
    if (window.pageYOffset >= skills - 200) {
      this.setState({ skillsSection: true });
    }

  }


  componentWillUnmount() {
    document.removeEventListener('scroll', this.onScroll);
  }

  render() {
    return (
      <div className={classes.ProgressBar}>
        {this.state.skillsSection
          ? this.state.skills.map(skill => {
              return (
                <Spring
                  key={skill.title}
                  from={{ number: 0 }}
                  to={{ number: skill.indicator }}
                  config={{ tension: 50, delay: 1500 }}
                >
                  {props => (
                    <Fragment>
                      <h6 style={props}>
                        {skill.title}
                        <span>{props.number.toFixed()}%</span>
                      </h6>
                      <div
                        style={props}
                        className={classes.ProgressBarIndicator}
                      >
                        <div
                          style={{
                            backgroundColor: "#007bff",
                            height: "5px ",
                            width: `${props.number}%`
                          }}
                        />
                      </div>
                    </Fragment>
                  )}
                </Spring>
              );
            })
          : null}
      </div>
    );
  }
}

export default ProgressBarIndicator;
