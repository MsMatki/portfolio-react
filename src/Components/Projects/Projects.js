import React, { Component } from "react";
import classes from "./Projects.css";
import Carousal from "./Carousal/Carousal";
import {Route} from 'react-router-dom';
import ProjectAbout from '../../Components/ProjectAbout/ProjectAbout'


class Projects extends Component {
  

  render() {
    return (
      <section className={classes.Projects} id="portfolio">
        <h1>My Portfolio</h1>
        <Route exact path="/" render={() =>  <Carousal items={this.props.items} />} />
        <Route exact path="/project" render={() =>  <ProjectAbout items={this.props.items}/>}/>
      </section>
    );
  }
}

export default Projects;
