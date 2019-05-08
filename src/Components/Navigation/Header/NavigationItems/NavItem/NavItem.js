import React from 'react';
import classes from './NavItem.css'

const NavItem = (props) => (
    <li className={classes.NavItem} >
        <a href="\" style={props.color}>{props.children}</a>
    </li>
);

export default NavItem;