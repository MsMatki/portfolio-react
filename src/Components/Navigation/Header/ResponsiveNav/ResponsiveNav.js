import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './ResponsiveNav.css'

const ResponsiveNav = () => {
    return(
        <nav className={classes.ResponsiveNav}>
            <ul>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Skills</NavItem>
                <NavItem>Portfolio</NavItem>
                <NavItem>Contact</NavItem>
            </ul>
        </nav>
    );
}

export default ResponsiveNav;