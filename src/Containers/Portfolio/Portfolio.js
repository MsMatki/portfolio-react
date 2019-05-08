import React, { Component } from "react";
import Header from "../../Components/Navigation/Header/Header";
import Footer from "../../Components/Navigation/Footer/Footer";
import classes from "./Portfolio.css";
import Hover from "../../Components/Hover/Hover";
import About from "../../Components/About/About";
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer'

class Portfolio extends Component {
  state = {
    responsiveNavSlideIn: false
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset >= 200) {
        this.setState({
          responsiveNavSlideIn: true
        });
      } else {
        this.setState({
          responsiveNavSlideIn: false
        });
      }
    });
  }

  render() {
    console.log(this.state.responsiveNavSlideIn);
    return (
      <div className={classes.Portfolio}>
        <Header scrollSlideNav={this.state.responsiveNavSlideIn} />
        <SideDrawer/>
        <Hover />
        <About />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
