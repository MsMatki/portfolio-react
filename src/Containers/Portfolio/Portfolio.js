import React, { Component } from "react";
import Header from "../../Components/Navigation/Header/Header";
import Footer from "../../Components/Navigation/Footer/Footer";
import classes from "./Portfolio.css";
import Hover from "../../Components/Hover/Hover";
import About from "../../Components/About/About";
import SideDrawer from '../../Components/Navigation/SideDrawer/SideDrawer';
import Skills from '../../Components/Skills/Skills';
import Projects from '../../Components/Projects/Projects';


class Portfolio extends Component {
  state = {
    responsiveNavSlideIn: false,
    toggleSideDrawer: false
  };

  componentDidMount() {
    document.addEventListener("scroll", () => {
      if (window.pageYOffset >= 300) {
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

  toggleSideDrawerHandler = () => {
    if(!this.state.toggleSideDrawer){
        this.setState({
            toggleSideDrawer: true
        })
    }else{
        this.setState({
            toggleSideDrawer: false
        })
    }
  }

  render() {
    console.log(this.state.responsiveNavSlideIn);
    return (
      <div className={classes.Portfolio}>
        <Header scrollSlideNav={this.state.responsiveNavSlideIn} toggleDrawer={this.toggleSideDrawerHandler}/>
        <SideDrawer sideDrawer={this.state.toggleSideDrawer}/>
        <Hover />
        <About />
        <Skills/>
        <Projects/>
        <Footer />
      </div>
    );
  }
}

export default Portfolio;
