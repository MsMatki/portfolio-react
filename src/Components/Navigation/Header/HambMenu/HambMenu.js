import React, { Fragment } from "react";
import classes from "./HambMenu.css";

const HambMenu = props => {
  return (
    <Fragment>
      <div className={classes.HambMenu} onClick={props.toggleDrawer}>
        <div style={props.color}/>
        <div style={props.color}/>
        <div style={props.color}/>
      </div>
    </Fragment>
  );
};

export default HambMenu;
