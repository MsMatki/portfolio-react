import React from "react";
import Nav from "./Nav/Nav";
import classes from "./Header.css";
import ResponsiveNav from "./ResponsiveNav/ResponsiveNav";

const Header = props => {
  return (
    <header className={classes.Header}>
      <Nav toggleDrawer={props.toggleDrawer} openClass={props.openClass}/>
      <ResponsiveNav
        scrollSlideNav={props.scrollSlideNav}
        toggleDrawer={props.toggleDrawer}
        openClass={props.openClass}
        sideDrawer={props.sideDrawer}
      />
    </header>
  );
};

export default Header;
