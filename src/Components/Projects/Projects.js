import React, { Component } from "react";
import classes from "./Projects.css";
import Carousal from "./Carousal/Carousal";

import img1 from "../../Assets/Images/img1.png";
import img2 from "../../Assets/Images/img2.png";
import img3 from "../../Assets/Images/img3.png";
import img4 from "../../Assets/Images/img4.png";
import img5 from "../../Assets/Images/img5.png";
import img6 from "../../Assets/Images/img6.png";

class Projects extends Component {
  state = {
    items: [
      { title: "Classic Arcade Game", background: img1 },
      { title: "Frogger Game", background: img2 },
      { title: "Restaurant Reviews", background: img3 },
      { title: "Neighbourhood Map", background: img4 },
      { title: "MyReads App", background: img5 },
      { title: "Cool Movies", background: img6 }
    ],
    displayText: 'Portfolio'
  };



  render() {
    return (
      <section className={classes.Projects} id="portfolio">
        <h1>My Portfolio</h1>
        <Carousal text={this.state.displayText} items={this.state.items} />
      </section>
    );
  }
}

export default Projects;
