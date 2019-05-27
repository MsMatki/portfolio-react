import React, { Component } from "react";
import Header from "../../Components/Navigation/Header/Header";
import Footer from "../../Components/Navigation/Footer/Footer";
import classes from "./Portfolio.css";
import Hero from "../../Components/Hero/Hero";
import About from "../../Components/About/About";
import SideDrawer from "../../Components/Navigation/SideDrawer/SideDrawer";
import Skills from "../../Components/Skills/Skills";
import Projects from "../../Components/Projects/Projects";
import Contact from "../../Components/Contact/Contact";

class Portfolio extends Component {
  state = {
    responsiveNavSlideIn: false,
    toggleSideDrawer: false,
    hambOpenClass: ""
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      // Navigation slide in top when scrolling down
      if (window.pageYOffset >= 300) {
        this.setState({
          responsiveNavSlideIn: true
        });
      } else {
        this.setState({
          responsiveNavSlideIn: false
        });
      }
      // Parallax scrolling Hero image
      const background = document.querySelector(".Hero__Hero__3KA_6");
      if (window.innerWidth > 768) {
        background.style.backgroundPositionY =
          (window.pageYOffset - background.offsetTop) / 1.3 + "px";
      } else {
        background.style.backgroundPositionY = 0;
      }
      
    });
  }

  toggleSideDrawerHandler = () => {
    if (!this.state.toggleSideDrawer) {
      this.setState({
        toggleSideDrawer: true,
        hambOpenClass: "HambMenu__open__3MyXM"
      });
    } else {
      this.setState({
        toggleSideDrawer: false,
        hambOpenClass: ""
      });
    }
  };

  render() {
    return (
      <div className={classes.Portfolio}>
        <Header
          scrollSlideNav={this.state.responsiveNavSlideIn}
          toggleDrawer={this.toggleSideDrawerHandler}
          openClass={this.state.hambOpenClass}
          sideDrawer={this.state.toggleSideDrawer}
        />
        <SideDrawer sideDrawer={this.state.toggleSideDrawer} />
        <Hero />
        <About />
        <Skills />
        <Projects />
        <Contact />
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
