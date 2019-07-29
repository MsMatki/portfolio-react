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
import { Spring } from "react-spring/renderprops";

class Portfolio extends Component {
  state = {
    responsiveNavSlideIn: false,
    toggleSideDrawer: false,
    hambOpenClass: "",
    skillsSection: false,
    aboutSection: false,
    portfolioSection: false,
    contactSection: false,
    onPageLoading: true
  };

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll, false);
    document.addEventListener("DOMContentLoaded", this.onPageLoad);
    
  }

  onPageLoad = () => {
    this.setState({onPageLoading: false})
  }

  onScroll = () => {
    const skills = document.querySelector("#skills").offsetTop;
    const about = document.querySelector("#about").offsetTop;
    const portfolio = document.querySelector("#portfolio").offsetTop;
    const contact = document.querySelector("#contact").offsetTop;

   
    if (window.pageYOffset >= about - 400) {
      this.setState({ aboutSection: true });
    }
    if (window.pageYOffset >= skills - 300) {
      this.setState({ skillsSection: true });
    }
    if (window.pageYOffset >= portfolio) {
      this.setState({ portfolioSection: true });
    }
    if (window.pageYOffset >= contact) {
      this.setState({ contactSection: true });
    }
    
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
        (window.pageYOffset - background.offsetTop) / 1.5 + "px";
    } else {
      background.style.backgroundPositionY = 0;
    }
  };

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

  componentWillUnmount(){
    document.removeEventListener('scroll', this.onScroll, false);
    document.removeEventListener("DOMContentLoaded", this.onPageLoad);
  }

  render() {

    console.log(this.state.onPageLoading)
    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ mass: 1, tension: 400, friction: 120, delay: 500 }}
    >
      {props => (
      <div className={classes.Portfolio} style={props}>
        <Header
          scrollSlideNav={this.state.responsiveNavSlideIn}
          toggleDrawer={this.toggleSideDrawerHandler}
          openClass={this.state.hambOpenClass}
          sideDrawer={this.state.toggleSideDrawer}
        />
        <SideDrawer sideDrawer={this.state.toggleSideDrawer} />
        <Hero />
        <About aboutSection={this.state.aboutSection} onPageLoading={this.state.onPageLoading}/>
        <Skills skillsSection={this.state.skillsSection} onPageLoading={this.state.onPageLoading}/>
        <Projects items={this.props.items}/>
        <Contact />
        <Footer />
      </div>
      )}
      </Spring>
    );
  }
}

export default Portfolio;
