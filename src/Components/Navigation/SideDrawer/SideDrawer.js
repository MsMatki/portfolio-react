import React from 'react';
import classes from './SideDrawer.css'
import NavigationItems from '../Header/NavigationItems/NavigationItems'

const SideDrawer = (props) => {
    return(
        <div className={classes.SideDrawer} style={!props.sideDrawer ? {transform: 'translateX(-100%)'} : {transform: 'translateX(0)'}}>
            <NavigationItems/>
        </div>
    );
}

export default SideDrawer;