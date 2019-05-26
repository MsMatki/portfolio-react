import React from "react";
import classes from "./Contact.css";
import ContactInfo from './ContactInfo/ContactInfo';


const Contact = props => {
  return (
    <section className={classes.Contact}>
      <form action="" className={classes.Background}>
        <div className="container">
         <ContactInfo/>
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
        </div>
      </form>
    </section>
  );
};

export default Contact;
