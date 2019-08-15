import React from "react";
import classes from "./ContactInfo.css";
import icons from '../../../Assets/Icons/et-line.css';
import { Spring } from "react-spring/renderprops";
import Media from 'react-media';

const ContactInfo = props => (
  <Media query={{minWidth: 768}}>
    {matches => matches ? (
  <Spring
          from={{ opacity: 0, transform: "translateY(-50px)" }}
          to={
            props.active[3]
              ? { opacity: 1, transform: "translateX(0)" }
              : { opacity: 0 }
          }
          config={{ mass: 1, tension: 280, friction: 60, delay: 600 }}
        >
          {props => (
  <div className="row" style={props}>
    <div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
      <span className={icons.iconMapPin}>
        
      </span>
      <h6>Address</h6>
      <p>Manchester, United Kingdom</p>
    </div>
    <div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
      <span className={icons.iconEnvelope}>
     
      </span>
      <h6>Email</h6>
      <p>bartol.bilankov@gmail.com</p>
    </div>
    <div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
      <span className={icons.iconPhone}>
       
      </span>
      <h6>Contact</h6>
      <p>+44 791 675 1902</p>
    </div>
  </div>
          )}
  </Spring>
    ) : (
<div className="row">
<div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
  <span className={icons.iconMapPin}>
    
  </span>
  <h6>Address</h6>
  <p>Manchester, United Kingdom</p>
</div>
<div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
  <span className={icons.iconEnvelope}>
 
  </span>
  <h6>Email</h6>
  <p>bartol.bilankov@gmail.com</p>
</div>
<div className="col-xs-12 col-lg-4" id={classes.ContactInfo}>
  <span className={icons.iconPhone}>
   
  </span>
  <h6>Contact</h6>
  <p>+44 791 675 1902</p>
</div>
</div>

    )}
  </Media>
);

export default ContactInfo;
