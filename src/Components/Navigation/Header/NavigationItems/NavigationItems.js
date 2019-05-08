import React from "react";
import NavItem from "./NavItem/NavItem";
import classes from './NavigationItems.css'

const NavigationItems = (props) => {
  return (
    <ul className={classes.NavigationItems} >
      <NavItem color={props.color}>Home</NavItem>
      <NavItem color={props.color}>About</NavItem>
      <NavItem color={props.color}>Skills</NavItem>
      <NavItem color={props.color}>Portfolio</NavItem>
      <NavItem color={props.color}>Contact</NavItem>
    </ul>
  );
};

export default NavigationItems;
