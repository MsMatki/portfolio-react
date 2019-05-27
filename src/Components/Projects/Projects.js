import React from 'react'
import classes from './Projects.css';
import Carousal from './Carousal/Carousal'

const Projects = (props) => {
    return(
        <section className={classes.Projects} id="portfolio">
        <h1>My Portfolio</h1>
            <Carousal/>
        </section>
    )
}


export default Projects;