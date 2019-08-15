import React from 'react'
import { Spring } from "react-spring/renderprops";
import Media from 'react-media';

const ContactInput = props => {
   return(
    <Media query={{minWidth: 768}}>
     {matches => matches ? (
    <Spring
    from={{ opacity: 0, transform: "translateY(-50px)" }}
    to={
      props.active[3]
        ? { opacity: 1, transform: "translateX(0)" }
        : { opacity: 0 }
    }
    config={{ mass: 1, tension: 280, friction: 60, delay: 1100 }}
  >
    {props => (
    <div className="row pt-5" style={props}>
    <div className="col-xs 12 col-lg-6 p-2">
      <input type="text" placeholder="First Name" />
    </div>
    <div className="col-xs-12 col-lg-6 p-2">
      <input type="email" placeholder="Email" />
    </div>
    <div className="col-xs-12 col-lg-12 p-2">
      <textarea type="message" placeholder="Message" />
    </div>
  </div>
    )}
  </Spring>
     ) : (

      <div className="row pt-5">
      <div className="col-xs 12 col-lg-6 p-2">
        <input type="text" placeholder="First Name" />
      </div>
      <div className="col-xs-12 col-lg-6 p-2">
        <input type="email" placeholder="Email" />
      </div>
      <div className="col-xs-12 col-lg-12 p-2">
        <textarea type="message" placeholder="Message" />
      </div>
    </div>
     )}
  </Media>
   );
}

export default ContactInput;