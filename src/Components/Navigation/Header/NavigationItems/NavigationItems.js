import React, { Component } from "react";
import NavItem from "./NavItem/NavItem";
import classes from "./NavigationItems.css";

class NavigationItems extends Component {
  state = {
    navTitles: ["home", "about", "skills", "portfolio", "contact"],
    windowOffset: 0,
    scrollDuration: 1300
  };

  componentDidMount() {
    document.addEventListener('scroll', () => {
      if (window.pageYOffset >= 500) {
        this.setState({
          windowOffset: -100,
          scrollDuration: 1000
        });
      } else {
        this.setState({
          windowOffset: 0,
          scrollDuration: 1300
        });
      }
    })
   
  }

  render() {
    return (
      <ul className={classes.NavigationItems} style={this.props.visible}>
        {this.state.navTitles.map((title, index) => {
          return (
            <NavItem
              scrollDuration={this.state.scrollDuration}
              windowOffset={this.state.windowOffset}
              key={index}
              title={title}
              color={this.props.color}
            >
              {title}
            </NavItem>
          );
        })}
      </ul>
    );
  }
}

export default NavigationItems;
