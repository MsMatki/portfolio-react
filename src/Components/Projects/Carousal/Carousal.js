import React, { Component } from 'react';
import classes from './Carousal.css'
import Coverflow from 'react-coverflow';
import img1 from '../../../Assets/Images/img1.jpg'
import img2 from '../../../Assets/Images/img2.png'
import img3 from '../../../Assets/Images/img3.png'
import img4 from '../../../Assets/Images/img4.png'
import img5 from '../../../Assets/Images/img5.jpg'
import img6 from '../../../Assets/Images/img6.png'


class Carousal extends Component {


        render() {

                return (
                      <div className={classes.Carousal}>
                                <Coverflow width="100%" height="500"
                                        displayQuantityOfSide={3}
                                        enableScroll={false}
                                        enableHeading
                                        active={0}
                                      
                                >

                                        <img src={img1} alt="CoolMovies" />
                                        <img src={img2} alt="Neighbourhood Map" />
                                        <img src={img3} alt="MyReads" />
                                        <img src={img4} alt="Frogger" />
                                        <img src={img5} alt="Restaurant Reviews" />
                                        <img src={img6} alt="Memory" />

                                </Coverflow>
                                </div>
                )
        }
}

export default Carousal;

