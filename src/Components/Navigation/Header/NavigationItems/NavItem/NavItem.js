import React from "react";
import classes from "./NavItem.css";
import { Link, animateScroll as scroll } from "react-scroll";

const NavItem = props => {
  return (
    <li className={classes.NavItem}>
      <Link
        spy={true}
        smooth={true}
        activeClass={classes.active}
        duration={props.scrollDuration}
        className={classes.Link}
        to={props.title}
        offset={props.windowOffset}
        style={props.color}
      >
        {props.children}
      </Link>
    </li>
  );
};

export default NavItem;
