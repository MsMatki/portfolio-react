import React from "react";
import classes from "./Nav.css";
import HambMenu from "../HambMenu/HambMenu";
import NavigationItems from "../NavigationItems/NavigationItems";
import LogoHeader from "../LogoHeader/LogoHeader";

const Nav = props => {
  return (
    <nav className={classes.Nav}>
      <div className={`container ${classes.Container}`}>
        <LogoHeader />
        <HambMenu openClass={props.openClass} toggleDrawer={props.toggleDrawer} />
        <NavigationItems />
      </div>
    </nav>
  );
};

export default Nav;
