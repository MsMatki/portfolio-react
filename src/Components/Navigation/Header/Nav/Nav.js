import React from 'react';
import NavItem from '../NavItem/NavItem';
import classes from './Nav.css'

const Nav = (props) => {
    return(
        <nav className={classes.Nav}>
            <ul>
                <NavItem>Home</NavItem>
                <NavItem>About</NavItem>
                <NavItem>Skills</NavItem>
                <NavItem>Portfolio</NavItem>
                <NavItem>Contact</NavItem>
            </ul>
        </nav>
    )
}

export default Nav;