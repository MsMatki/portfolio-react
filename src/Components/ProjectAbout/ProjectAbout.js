import React, { Component } from "react";
import classes from "./ProjectAbout.css";
import Footer from "../Navigation/Footer/Footer";
import img1 from "../../Assets/Images/responsive1.png";

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
      <section className={classes.Section}>
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
                    <div className="buttons">
                      <a href="">Back</a>
                      <a href="">View Github</a>
                      <a href="">Preview</a>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        <Footer />
      </section>
    );
  }
}

export default ProjectAbout;
