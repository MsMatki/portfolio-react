import React from "react";
import classes from "./Contact.css";
import ContactInfo from "./ContactInfo/ContactInfo";
import ContactInput from "./ContactInput/ContactInput";
import { Spring } from "react-spring/renderprops";
import Media from 'react-media'

const Contact = props => {
  return (
    <section className={classes.Contact} id="contact">
      <form action="" className={classes.Background}>
        <div className="container slideIn">
          <div className="row">
            <div className="col-xs-12 col-lg-12 mb-5 text-center">
              <Media query={{minWidth: 768}}>
                {matches => matches ? (
              <Spring
                from={{ opacity: 0.5, transform: "translatex(-500px)" }}
                to={
                  props.active[3]
                    ? { opacity: 1, transform: "translateX(0)" }
                    : { opacity: 0 }
                }
                config={{ mass: 2.5, tension: 210, friction: 20 }}
              >
                {props => <h1 style={props}>Contact Me</h1>}
              </Spring>
                ) : (
                  <h1>Contact Me</h1>
                )}
              </Media>
            </div>
          </div>
          <ContactInfo active={props.active} contactSection={props.contactSection}/>
          <ContactInput active={props.active} contactSection={props.contactSection}/>
        </div>
      </form>
    </section>
  );
};

export default Contact;
