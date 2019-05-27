import React, { Component } from "react";
import classes from "./HambMenu.css";

class HambMenu extends Component{

render(){


  return (
    <div
      id={classes.navIcon1}
      onClick={this.props.toggleDrawer}
      className={this.props.openClass}
    >
      <span style={this.props.color}/>
      <span style={this.props.color}/>
      <span style={this.props.color}/>
    </div>
  );
}
};

export default HambMenu;
