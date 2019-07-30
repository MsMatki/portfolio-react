import React from "react";
import classes from './Education.css'

const Education = (props) => {
  return (
    <ul className={classes.Education}>
      <li>
        <h6>Nanodegree Udacity</h6>
        <p>Front End Web Developer</p>
      </li>
      <li>
        <h6>School of Graphic Designs</h6>
        <p>Graphic Designer</p>
      </li>
      <li>
        <h6>Treehouse</h6>
        <p>Front End Web Development</p>
      </li>
    </ul>
  );
};

export default Education;
