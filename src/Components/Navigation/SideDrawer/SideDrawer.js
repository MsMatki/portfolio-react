import React from 'react';
import classes from './SideDrawer.css'
import NavigationItems from '../Header/NavigationItems/NavigationItems'

const SideDrawer = (props) => {

    const navLinkColor = {
        color: "black"
      };

      const visible = {
          display: "flex"
      }
    
    return(
        <div className={classes.SideDrawer} style={!props.sideDrawer ? {transform: 'translateX(-100vh)'} : {transform: 'translateX(0)'}}>
            <NavigationItems color={navLinkColor} visible={visible}/>
        </div>
    );
}

export default SideDrawer;