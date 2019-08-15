import React, { Component } from "react";
import classes from "./Projects.css";
import Carousal from "./Carousal/Carousal";
import { Route } from "react-router-dom";
import { Spring } from "react-spring/renderprops";
import Media from "react-media";
import ProjectAbout from "../../Components/ProjectAbout/ProjectAbout";

class Projects extends Component {
  render() {
    return (
      <Media query={{minWidth: 768}}>
      {matches => matches ? (
      <section className={`${classes.Projects} slideIn`} id="portfolio">
     
        <Spring
          from={{ opacity: 0.5, transform: "translatex(-500px)" }}
          to={
            this.props.active[2]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 2.5, tension: 210, friction: 20 }}
        >
          {props => <h1 style={props}>My Portfolio</h1>}
        </Spring>

        <Spring
          from={{ opacity: 0, transform: "translateY(-50px)" }}
          to={
            this.props.active[2]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 60, delay: 800 }}
        >
          {props => (
            <div style={props}>
              <Route
                exact
                path="/"
                render={() => <Carousal items={this.props.items} />}
              />
              <Route
                exact
                path="/project"
                render={() => <ProjectAbout items={this.props.items} />}
              />
            </div>
          )}
        </Spring>
          

      </section>
      ):(
        <section className={classes.Projects} id="portfolio">    
       <h1>My Portfolio</h1>
            <div>
              <Route
                exact
                path="/"
                render={() => <Carousal items={this.props.items} />}
              />
              <Route
                exact
                path="/project"
                render={() => <ProjectAbout items={this.props.items} />}
              />
            </div>
      </section>

        )}
      </Media>
    );
  }
}

export default Projects;
