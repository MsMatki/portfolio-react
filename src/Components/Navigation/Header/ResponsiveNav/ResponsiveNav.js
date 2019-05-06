import React from "react";
import NavItem from "../NavItem/NavItem";
import classes from "./ResponsiveNav.css";

const ResponsiveNav = props => {
  return (
    <nav
      className={classes.ResponsiveNav}
      style={
        !props.scrollSlideNav
          ? { transform: "translateY(-120px)", opacity: "0" }
          : { transform: "translateY(-60px)", opacity: "1" }
      }
    >
      <ul>
        <NavItem>Home</NavItem>
        <NavItem>About</NavItem>
        <NavItem>Skills</NavItem>
        <NavItem>Portfolio</NavItem>
        <NavItem>Contact</NavItem>
      </ul>
    </nav>
  );
};

export default ResponsiveNav;
