import React, { Component } from "react";
import classes from "./Projects.css";
import Carousal from "./Carousal/Carousal";


class Projects extends Component {
  state = {
    displayText: 'Portfolio'
  };

  render() {
    return (
      <section className={classes.Projects} id="portfolio">
        <h1>My Portfolio</h1>
        <Carousal text={this.state.displayText} items={this.props.items} />
      </section>
    );
  }
}

export default Projects;
