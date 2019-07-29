import React, { Component } from "react";
import classes from "./ProjectAbout.css";
import Footer from "../Navigation/Footer/Footer";
import {Link} from 'react-router-dom'
import { Spring } from "react-spring/renderprops";

class ProjectAbout extends Component {
  state = {
    filtered: []
  };

  componentDidMount() {
    let id = sessionStorage.getItem("id");
    let filteredArr = this.props.items.filter(item => item.id == id);
    this.setState({ filtered: filteredArr });

   

  }

  render() {
    
    console.log(this.state.filtered);
    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ mass: 1, tension: 400, friction: 120, delay: 100 }}
    >
      {props => (
      <section className={classes.Section} style={props}>
        <div className={classes.Background} />
        <div className="container">
          {this.state.filtered.map(item => {
            return (
              <div key={item.id} className="row">
                <div className="col-md-6 col-lg-6">
                  <div className={classes.Image}>
                    <img src={item.img} alt="" />
                  </div>
                </div>
                <div className="col-md-6 col-lg-6">
                  <div className={classes.Content}>
                    <h2>{item.title}</h2>
                    <hr />
                    <p>
                      {item.desc}
                    </p>
                    <div className={classes.Buttons}>
                    <Link to="/"><span>Back</span></Link>
                      <span><a target="_blank" href={item.githubURL}>View Github</a></span>
                      <span><a target="_blank" href={item.previewUrl}>Preview</a></span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </section>
      )}
      </Spring>
    );
  }
}

export default ProjectAbout;
