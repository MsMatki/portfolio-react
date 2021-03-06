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
    onPageLoading: true,
    halfShown: false,
    active: ''
  };

  componentDidMount() {
    document.addEventListener("scroll", this.onScroll, false);
    document.addEventListener("DOMContentLoaded", this.onPageLoad);
    
  }

  onPageLoad = () => {
    this.setState({onPageLoading: false})
  }

  onScroll = () => {

    const slideSections = document.querySelectorAll('.slideIn');

    slideSections.forEach(slideSection => {
      const slideInAt = (window.scrollY + window.innerHeight) - slideSection.offsetHeight / 2;
      const isHalfShown = slideInAt > slideSection.offsetTop;
      this.setState({halfShown: isHalfShown})

      if(this.state.halfShown){
          slideSection.classList.add('active'); 
      }     
    })
    
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
    let active = document.querySelectorAll('.active');
    return (
      <Spring
      from={{ opacity: 0 }}
      to={{ opacity: 1 }}
      config={{ mass: 1, tension: 400, friction: 120, delay: 100 }}
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
        <About aboutSection={this.state.aboutSection} active={active} onPageLoading={this.state.onPageLoading} about={this.props.about}/>
        <Skills skillsSection={this.state.skillsSection} active={active} onPageLoading={this.state.onPageLoading}/>
        <Projects items={this.props.items} active={active} portfolioSection={this.state.portfolioSection}/>
        <Contact active={active} contactSection={this.state.contactSection} />
        <Footer />
      </div>
      )}
      </Spring>
    );
  }
}

export default Portfolio;
