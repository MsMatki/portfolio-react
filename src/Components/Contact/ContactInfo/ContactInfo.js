import React from "react";
import classes from "./ContactInfo.css";
import icons from '../../../Assets/Icons/et-line.css'

const ContactInfo = props => (
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
);

export default ContactInfo;
