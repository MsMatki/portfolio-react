import React, { Component } from 'react';
import classes from './Carousal.css'
import Coverflow from 'react-coverflow';
import { directive } from '@babel/types';


class Carousal extends Component {


        render() {

                return (
                      <div className={classes.Carousal}>
                                <Coverflow width="960" height="800"
                                        displayQuantityOfSide={3}
                                        clickable
                                        enableScroll={false}
                                        enableHeading
                                        
                                >

                                        <img src="https://picsum.photos/500/500/?random" alt="1" />
                                        <img src="https://picsum.photos/500/501/?random" alt="2" />
                                        <img src="https://picsum.photos/500/502/?random" alt="3" />
                                        <img src="https://picsum.photos/500/503/?random" alt="4" />
                                        <img src="https://picsum.photos/500/504/?random" alt="5" />
                                        <img src="https://picsum.photos/500/505/?random" alt="5" />

                                </Coverflow>
                                </div>
                )
        }
}

export default Carousal;

