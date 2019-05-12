import React from "react";
import classes from "./Nav.css";
import HambMenu from "../HambMenu/HambMenu";
import NavigationItems from "../NavigationItems/NavigationItems";

const Nav = props => {
  return (
    <nav className={classes.Nav}>
      <HambMenu toggleDrawer={props.toggleDrawer}/>
      <NavigationItems />
    </nav>
  );
};

export default Nav;
