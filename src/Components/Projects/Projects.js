import React from 'react'
import classes from './Projects.css';
import Carousal from './Carousal/Carousal'

const Projects = (props) => {
    return(
        <section className={classes.Projects}>
            <Carousal/>
        </section>
    )
}


export default Projects;