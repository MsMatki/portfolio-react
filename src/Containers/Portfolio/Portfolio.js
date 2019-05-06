import React, {Component} from 'react';
import Header from '../../Components/Navigation/Header/Header';
import Footer from '../../Components/Navigation/Footer/Footer';
import classes from './Portfolio.css'

class Portfolio extends Component{

    state = {
        responsiveNavSlideIn: false
    }

    componentDidMount(){

        document.addEventListener('scroll', () => {
            if(window.pageYOffset >= 100){
                
                this.setState({
                    responsiveNavSlideIn: true
                })
            }else{
                this.setState({
                    responsiveNavSlideIn: false
                })
            }
        })
    }



    render(){

        console.log(this.state.responsiveNavSlideIn)
        return(
            <div className={classes.Portfolio}>
                <Header scrollSlideNav={this.state.responsiveNavSlideIn}/>
                <Footer/>
            </div>
        );
    }
}

export default Portfolio;