import React from "react";
import NavigationItems from "../NavigationItems/NavigationItems";
import classes from "./ResponsiveNav.css";
import HambMenu from "../HambMenu/HambMenu";
import LogoHeader from "../LogoHeader/LogoHeader";

const ResponsiveNav = props => {
  
  const HambColor = !props.sideDrawer ? { backgroundColor: "black" } : { backgroundColor: "#007bff" };

  const navLinkColor = {
    color: "black"
  };
  const logoColor = {
    color: "#007bff"
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
      <div className={`container ${classes.Container}`}>
        <LogoHeader color={logoColor} />
        <HambMenu
          color={HambColor}
          toggleDrawer={props.toggleDrawer}
          openClass={props.openClass}
        />
        <NavigationItems color={navLinkColor} />
      </div>
    </nav>
  );
};

export default ResponsiveNav;
