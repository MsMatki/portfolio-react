import React from 'react';
import classes from './LogoHeader.css'

const LogoHeader = props => (
 <div className={classes.LogoHeader}>
   <h3 style={props.color}>{'<Bartol />'}</h3>
 </div>
);

export default LogoHeader;