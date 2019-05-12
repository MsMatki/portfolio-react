import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./ResponsiveNav.css";
import HambMenu from "../HambMenu/HambMenu";

const ResponsiveNav = props => {
  const HambColor = {
    backgroundColor: "black"
  };
  const navLinkColor = {
    color: "black"
  };

  return (
    <nav
      className={classes.ResponsiveNav}
      style={
        !props.scrollSlideNav
          ? { transform: "translateY(-120px)", opacity: "0" }
          : { transform: "translateY(-60px)", opacity: "1" }
      }
    >
      <HambMenu color={HambColor} toggleDrawer={props.toggleDrawer}/>
      <NavigationItems color={navLinkColor}/>
    </nav>
  );
};

export default ResponsiveNav;
