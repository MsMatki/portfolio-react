import React from 'react';
import Nav from './Nav/Nav';
import classes from './Header.css'
import ResponsiveNav from './ResponsiveNav/ResponsiveNav'

const Header = (props) => {
    return(
        <header className={classes.Header}>
            <Nav/>
            <ResponsiveNav/>
        </header>
    )
}

export default Header;